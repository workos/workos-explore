import React from 'react'
import Head from 'next/head'
import Home from '../../components/Home'
import Layout from '../../components/Layout'

export default class extends React.Component {
  render() {
    return (
      <main>
        <Head>
          <title>Super App | Home</title>
          <link href="/favicon.png" rel="shortcut icon" />
          <script src="https://cdn.tailwindcss.com"></script>
        </Head>

        <Layout>
          <Home />
        </Layout>
      </main>
    )
  }
}
