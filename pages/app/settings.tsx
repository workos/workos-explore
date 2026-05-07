import React from 'react'
import Head from 'next/head'
import Settings from '../../components/Settings'
import Layout from '../../components/Layout'

type Intent = 'sso' | 'dsync' | 'audit_logs' | 'domain_verification'

type State = {
  success: boolean | null
  message: string | null
}

export default class extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)

    this.state = {
      success: null,
      message: null,
    }
  }

  onSubmit = async (intent: Intent, e: React.FormEvent<HTMLFormElement>) => {
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
      this.setState({
        success: false,
        message: err instanceof Error ? err.message : String(err),
      })
    }
  }

  override render() {
    return (
      <main>
        <Head>
          <title>Super App | Admin Settings</title>
          <link href="/favicon.png" rel="shortcut icon" />
        </Head>

        <Layout>
          <Settings
            onSubmit={this.onSubmit}
            success={this.state.success}
            message={this.state.message}
          />
        </Layout>
      </main>
    )
  }
}
