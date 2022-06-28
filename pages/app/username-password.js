import React from 'react'
import Head from 'next/head'
import LoginWithSSO from '../../components/LoginWithUsernamePassword'
import LoginWithUsernamePassword from '../../components/LoginWithUsernamePassword'

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

      if (/@test.com\s*$/.test(e.target.email.value)) {
        alert("this would go to a login/password page")
        // send to username/password page
        
     } 

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
          <title>HireOS | Sign in with SSO</title>
          <link href="/favicon.png" rel="shortcut icon" />
        </Head>

        <LoginWithUsernamePassword
          onSubmit={this.onSubmit.bind(this)}
          success={this.state.success}
          message={this.state.message}
        />
        
      </main>
    )
  }
}
