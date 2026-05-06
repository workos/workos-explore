import React from 'react'
import Head from 'next/head'
import LoginWithSSO from '../../components/LoginWithSSO'

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
          <title>Super App | Log in with SSO</title>
          <link href="/favicon.png" rel="shortcut icon" />
        </Head>

        <LoginWithSSO
          onSubmit={this.onSubmit.bind(this)}
          success={this.state.success}
          message={this.state.message}
        />
      </main>
    )
  }
}
