import WorkOS from '@workos-inc/node'

const workos = new WorkOS(process.env.WORKOS_API_KEY)

export default async (req, res) => {
  try {
    const { email } = req.body
    const session = await workos.passwordless.createSession({
      email,
      type: 'MagicLink',
    })

    await workos.passwordless.sendSession(session.id)
    res.status(200).json({ sessionId: session.id })
  } catch (e) {
    res.status(400).json({ message: e.message })
  }
}
