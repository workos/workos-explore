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
    const { name } = this.props.demo
    const Home = dynamic(() => import(`../../components/Home/${name}`))
    return <Home />
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
