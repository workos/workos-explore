import React from 'react'
import Head from 'next/head'
import paths, { getDemoProps } from '../../lib/demos'
import LoginWithEmail from '../../components/LoginWithEmail'

export async function getStaticPaths() {
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const demo = getDemoProps(params)
  return { props: { demo } }
}

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
      const state = this.props.demo.slug

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
    const { demo } = this.props

    return (
      <main>
        <Head>
          <title>{demo.name} | Log in with Email</title>
          <link href={`/favicon/${demo.name}.png`} rel="shortcut icon" />
        </Head>

        <LoginWithEmail
          onSubmit={this.onSubmit.bind(this)}
          success={this.state.success}
          message={this.state.message}
          demo={demo}
        />
      </main>
    )
  }
}
