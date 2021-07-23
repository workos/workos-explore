import WorkOS from '@workos-inc/node'
import baseURL from '../../lib/baseURL'

const workos = new WorkOS(process.env.WORKOS_API_KEY)

export default async (req, res) => {
  try {
    const { intent, state } = req.body
    const name = `demo-${Date.now()}`
    const domains = [`${name}.com`]

    const organization = await workos.organizations.createOrganization({
      name,
      domains,
    })

    const { link } = await workos.portal.generateLink({
      intent,
      organization: organization.id,
      returnUrl: `${baseURL}/${state}/settings`,
    })

    res.status(200).json({ link })
  } catch (e) {
    res.status(400).json({ message: e.message })
  }
}
