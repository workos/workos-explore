import React from 'react'
import Head from 'next/head'
import LoginWithEmail from '../../components/LoginWithEmail'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      success: null,
      message: null,
    }
  }

  async onSubmit(e) {
    e.preventDefault()

    try {
      const email = e.target.email.value
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
    } catch (e) {
      this.setState({
        success: false,
        message: e.message,
      })
    }
  }

  render() {
    return (
      <main>
        <Head>
          <title>HireOS | Sign in with Email</title>
          <link href="/favicon.png" rel="shortcut icon" />
        </Head>

        <LoginWithEmail
          onSubmit={this.onSubmit.bind(this)}
          success={this.state.success}
          message={this.state.message}
        />
      </main>
    )
  }
}
