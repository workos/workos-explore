import { useState } from 'react'
import Head from 'next/head'
import LoginWithEmail from '../../components/LoginWithEmail'

export default function LoginPage() {
  const [success, setSuccess] = useState<boolean | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value
      const state = 'app'

      const res = await fetch('/api/magic-link', {
        method: 'POST',
        body: JSON.stringify({ email, state }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message)
      }

      setSuccess(true)
      setMessage('We just sent a magic link to your email.')
    } catch (err) {
      setSuccess(false)
      setMessage(err instanceof Error ? err.message : String(err))
    }
  }

  return (
    <main>
      <Head>
        <title>Super App | Log in with Email</title>
        <link href="/favicon.png" rel="shortcut icon" />
      </Head>

      <LoginWithEmail onSubmit={onSubmit} success={success} message={message} />
    </main>
  )
}
