import React from 'react'
import Link from 'next/link'
import { LockClosedIcon } from '@heroicons/react/solid'
import Alert from './Alert'

export default class LoginWithSSO extends React.Component {
  render() {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-20 w-auto" src="/favicon.png" alt="HireOS" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in with SSO to HireOS
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <Alert succeeded={this.props.succeeded} message={this.props.message} />

            <form onSubmit={this.props.onSubmit.bind(this)} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Enter email address"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <LockClosedIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                  Login with SAML SSO
                </button>
              </div>
            </form>
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Or{' '}
            <Link href="/app/login">
              <a className="font-medium text-blue-600 hover:text-blue-500">
                continue with Magic Link
              </a>
            </Link>
          </p>
        </div>
      </div>
    )
  }
}
