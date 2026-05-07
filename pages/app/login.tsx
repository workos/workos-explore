import React from 'react'
import Head from 'next/head'
import LoginWithEmail from '../../components/LoginWithEmail'

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

      this.setState({
        success: true,
        message: 'We just sent a magic link to your email.',
      })
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
          <title>Super App | Log in with Email</title>
          <link href="/favicon.png" rel="shortcut icon" />
        </Head>

        <LoginWithEmail
          onSubmit={this.onSubmit}
          success={this.state.success}
          message={this.state.message}
        />
      </main>
    )
  }
}
