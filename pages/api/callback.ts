import { WorkOS } from '@workos-inc/node'
import type { NextApiRequest, NextApiResponse } from 'next'

const workos = new WorkOS(process.env.WORKOS_API_KEY!)
const clientId = process.env.WORKOS_CLIENT_ID!

// State is round-tripped through the OAuth flow as a post-auth redirect
// hint. We treat it as untrusted user input — only allow simple path
// segments and fall back to /app for anything else, otherwise an attacker
// could craft state=//example.com and trigger an open redirect.
const SAFE_STATE_PATTERN = /^[a-z0-9_-]+(?:\/[a-z0-9_-]+)*$/i

const safeRedirectPath = (state: unknown): string => {
  if (typeof state !== 'string' || !SAFE_STATE_PATTERN.test(state)) {
    return '/app'
  }
  return `/${state}`
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { code, state } = req.query
    if (typeof code !== 'string') {
      res.status(400).json({ message: 'Invalid code' })
      return
    }
    await workos.sso.getProfileAndToken({
      code,
      clientId,
    })

    res.redirect(302, safeRedirectPath(state))
  } catch {
    res.status(400).json(req.query)
  }
}
