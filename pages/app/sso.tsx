import React from 'react'
import Head from 'next/head'
import LoginWithSSO from '../../components/LoginWithSSO'

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

  onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
          <title>Super App | Log in with SSO</title>
          <link href="/favicon.png" rel="shortcut icon" />
        </Head>

        <LoginWithSSO
          onSubmit={this.onSubmit}
          success={this.state.success}
          message={this.state.message}
        />
      </main>
    )
  }
}
