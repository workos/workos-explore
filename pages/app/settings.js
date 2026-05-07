import React from 'react'
import Head from 'next/head'
import Settings from '../../components/Settings'
import Layout from '../../components/Layout'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      success: null,
      message: null,
    }
  }

  async onSubmit(intent, e) {
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
          <title>Super App | Admin Settings</title>
          <link href="/favicon.png" rel="shortcut icon" />
        </Head>

        <Layout>
          <Settings
            onSubmit={this.onSubmit.bind(this)}
            success={this.state.success}
            message={this.state.message}
          />
        </Layout>
      </main>
    )
  }
}
