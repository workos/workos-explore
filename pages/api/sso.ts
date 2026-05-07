import { WorkOS } from '@workos-inc/node'
import type { NextApiRequest, NextApiResponse } from 'next'
import baseURL from '../../lib/baseURL'

const workos = new WorkOS(process.env.WORKOS_API_KEY!)
const clientId = process.env.WORKOS_CLIENT_ID!

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { state } = req.body
    const authorizationURL = workos.sso.getAuthorizationUrl({
      state,
      clientId,
      organization: 'org_01G2AMPPHC9712JSRAXKY3Z0K7',
      redirectUri: `${baseURL}/api/callback`,
    })

    res.status(200).json({ authorizationURL })
  } catch (e) {
    res.status(400).json({ message: e instanceof Error ? e.message : String(e) })
  }
}
