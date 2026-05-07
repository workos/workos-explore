import { useState } from 'react'
import Head from 'next/head'
import LoginWithSSO from '../../components/LoginWithSSO'

export default function SsoPage() {
  const [success, setSuccess] = useState<boolean | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const state = 'app'

      const res = await fetch('/api/sso', {
        method: 'POST',
        body: JSON.stringify({ state }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message)
      }

      window.location.href = data.authorizationURL
    } catch (err) {
      setSuccess(false)
      setMessage(err instanceof Error ? err.message : String(err))
    }
  }

  return (
    <main>
      <Head>
        <title>Super App | Log in with SSO</title>
        <link href="/favicon.png" rel="shortcut icon" />
      </Head>

      <LoginWithSSO onSubmit={onSubmit} success={success} message={message} />
    </main>
  )
}
