import React from 'react'
import Head from 'next/head'
import SignIn from '../components/SignIn'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sentMagicLink: false,
      message: null,
    }
  }

  async onSubmit(e) {
    e.preventDefault()

    try {
      const email = e.target.email.value
      const res = await fetch('/api/magic-link', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message)
      }

      this.setState({
        sentMagicLink: true,
        message: 'We just sent a magic link to your email.',
      })
    } catch (e) {
      this.setState({
        sentMagicLink: false,
        message: e.message,
      })
    }
  }

  render() {
    return (
      <main>
        <Head>
          <title>Magic Link - WorkOS Demo</title>
        </Head>

        <SignIn
          onSubmit={this.onSubmit.bind(this)}
          sentMagicLink={this.state.sentMagicLink}
          message={this.state.message}
        />
      </main>
    )
  }
}
