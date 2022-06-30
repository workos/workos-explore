import React from 'react'
import Head from 'next/head'
import LoginWithSSO from '../../components/LoginWithSSO'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      success: null,
      message: null,
      protocol: null,
    }
  }

  async onSubmit(e) {
    e.preventDefault()

    let protocol = e.target.value === 'google' ? 'oauth' : e.target.magiclink ? 'magic-link' : 'sso'

    try {
      const state = 'app'

      let email = protocol === 'magic-link' ? e.target.magiclink.value : ''

      var res = await fetch(`/api/${protocol}`, {
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

      if (protocol == 'magic-link')
        this.setState({
          success: true,
          message: 'We just sent a magic link to your email.',
          protocol: protocol,
        })
      else {
        window.location.href = data.authorizationURL
      }
    } catch (e) {
      this.setState({
        success: false,
        message: e.message,
        protocol: protocol,
      })
    }
  }

  render() {
    return (
      <main>
        <Head>
          <title>HireOS | Log in with SSO</title>
          <link href="/favicon.png" rel="shortcut icon" />
        </Head>

        <LoginWithSSO
          onSubmit={this.onSubmit.bind(this)}
          success={this.state.success}
          message={this.state.message}
          protocol={this.state.protocol}
        />
      </main>
    )
  }
}
