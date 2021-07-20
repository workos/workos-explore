import React from 'react'
import Head from 'next/head'
import paths, { getDemoProps } from '../../lib/demos'
import LoginWithSSO from '../../components/LoginWithSSO'

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
      const domain = e.target.domain.value
      const state = this.props.demo.slug

      const res = await fetch('/api/sso', {
        method: 'POST',
        body: JSON.stringify({ domain, state }),
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
    const { demo } = this.props

    return (
      <main>
        <Head>
          <title>{demo.name} | Log in with SSO</title>
          <link href={`/favicon/${demo.name}.png`} rel="shortcut icon" />
        </Head>

        <LoginWithSSO
          onSubmit={this.onSubmit.bind(this)}
          success={this.state.success}
          message={this.state.message}
          demo={demo}
        />
      </main>
    )
  }
}
