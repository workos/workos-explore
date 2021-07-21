import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import paths, { getDemoProps } from '../../lib/demos'

export async function getStaticPaths() {
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const demo = getDemoProps(params)
  return { props: { demo } }
}

export default class extends React.Component {
  renderHome() {
    const { demo } = this.props
    const Home = dynamic(() => import(`../../components/Home/${demo.name}`))
    const Layout = dynamic(() => import(`../../components/Layout/${demo.name}`))
    return (
      <Layout demo={demo}>
        <Home />
      </Layout>
    )
  }

  render() {
    const { demo } = this.props

    return (
      <main>
        <Head>
          <title>{demo.name} | Home</title>
          <link href={`/favicon/${demo.name}.png`} rel="shortcut icon" />
        </Head>

        {this.renderHome()}
      </main>
    )
  }
}
