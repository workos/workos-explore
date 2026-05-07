import { WorkOS, type Organization } from '@workos-inc/node'
import type { NextApiRequest, NextApiResponse } from 'next'
import baseURL from '../../lib/baseURL'

const workos = new WorkOS(process.env.WORKOS_API_KEY!)

const createAuditLogEvents = async (organization: Organization) => {
  for (const action of ['user.signed_in', 'user.signed_out']) {
    await workos.auditLogs.createEvent(organization.id, {
      action,
      occurredAt: new Date(),
      actor: {
        type: 'user',
        name: 'Jon Smith',
        id: 'user_01GBNJC3MX9ZZJW1FSTF4C5938',
      },
      targets: [
        {
          type: 'team',
          id: 'team_01GBNJD4MKHVKJGEWK42JNMBGS',
        },
      ],
      context: {
        location: '1.1.1.1',
        userAgent:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
      },
    })
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { intent, state } = req.body
    const name = `demo-${Date.now()}`

    const organization = await workos.organizations.createOrganization({
      name,
    })

    if (intent === 'audit_logs') {
      await createAuditLogEvents(organization)
    }

    const { link } = await workos.portal.generateLink({
      intent,
      organization: organization.id,
      returnUrl: `${baseURL}/${state}/settings`,
    })

    res.status(200).json({ link })
  } catch (e) {
    res.status(400).json({ message: e instanceof Error ? e.message : String(e) })
  }
}
