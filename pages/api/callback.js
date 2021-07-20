import WorkOS from '@workos-inc/node'

const workos = new WorkOS(process.env.WORKOS_API_KEY)
const clientID = process.env.WORKOS_CLIENT_ID

export default async (req, res) => {
  try {
    const { code, state } = req.query
    await workos.sso.getProfileAndToken({
      code,
      clientID,
    })

    res.redirect(302, `/${state}/home`)
  } catch (e) {
    res.status(400).json(req.query)
  }
}
