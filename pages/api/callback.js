import WorkOS from '@workos-inc/node'

const workos = new WorkOS(process.env.WORKOS_API_KEY)
const clientID = process.env.WORKOS_CLIENT_ID

export default async (req, res) => {
  try {
    const { code } = req.query
    const { profile } = await workos.sso.getProfileAndToken({
      code,
      clientID,
    })

    res.status(200).json(profile)
  } catch (e) {
    res.status(400).json({ message: e.message })
  }
}
