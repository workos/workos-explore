import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Settings from '../../components/Settings'
import paths, { getDemoProps } from '../../lib/demos'

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

  async onSubmit(intent, e) {
    e.preventDefault()

    try {
      const state = this.props.demo.slug

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
    const { demo } = this.props
    const Layout = dynamic(() => import(`../../components/Layout/${demo.name}`))

    return (
      <main>
        <Head>
          <title>{demo.name} | Admin Settings</title>
          <link href={`/favicon/${demo.name}.png`} rel="shortcut icon" />
        </Head>

        <Layout demo={demo}>
          <Settings
            onSubmit={this.onSubmit.bind(this)}
            success={this.state.success}
            message={this.state.message}
            demo={demo}
          />
        </Layout>
      </main>
    )
  }
}
