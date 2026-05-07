import { useState } from 'react'
import Head from 'next/head'
import Settings from '../../components/Settings'
import Layout from '../../components/Layout'

type Intent = 'sso' | 'dsync' | 'audit_logs' | 'domain_verification'

export default function SettingsPage() {
  const [success, setSuccess] = useState<boolean | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  const onSubmit = async (intent: Intent, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const state = 'app'

      const res = await fetch('/api/admin-portal', {
        method: 'POST',
        body: JSON.stringify({ intent, state }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message)
      }

      window.location.href = data.link
    } catch (err) {
      setSuccess(false)
      setMessage(err instanceof Error ? err.message : String(err))
    }
  }

  return (
    <main>
      <Head>
        <title>Super App | Admin Settings</title>
        <link href="/favicon.png" rel="shortcut icon" />
      </Head>

      <Layout>
        <Settings onSubmit={onSubmit} success={success} message={message} />
      </Layout>
    </main>
  )
}
