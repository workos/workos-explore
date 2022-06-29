import WorkOS from '@workos-inc/node'
import baseURL from '../../lib/baseURL'

const workos = new WorkOS(process.env.WORKOS_API_KEY)
const clientID = process.env.WORKOS_CLIENT_ID

export default async (req, res) => {
  try {
    const { state } = req.body
    const authorizationURL = workos.sso.getAuthorizationURL({
      state,
      clientID,
      provider: 'GoogleOAuth',
      redirectURI: `${baseURL}/api/callback`,
    })

    res.status(200).json({ authorizationURL })
  } catch (e) {
    res.status(400).json({ message: e.message })
  }
}
