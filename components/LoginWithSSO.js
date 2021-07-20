import Link from 'next/link'
import { LockClosedIcon } from '@heroicons/react/solid'
import Alert from './Alert'

export default class LoginWithSSO extends React.Component {
  render() {
    const { demo } = this.props

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-20 w-auto" src={`/favicon/${demo.name}.png`} alt={demo.name} />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in with SSO to {demo.name}
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <Alert succeeded={this.props.succeeded} message={this.props.message} />

            <form onSubmit={this.props.onSubmit.bind(this)} className="space-y-6">
              <div>
                <label htmlFor="domain" className="block text-sm font-medium text-gray-700">
                  Domain
                </label>
                <div className="mt-1">
                  <input
                    id="domain"
                    name="domain"
                    type="text"
                    placeholder="Enter domain"
                    defaultValue="foo-corp.com"
                    required
                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-${demo.color}-500 focus:border-${demo.color}-500 sm:text-sm`}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-${demo.color}-600 hover:bg-${demo.color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${demo.color}-500`}
                >
                  <LockClosedIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                  Login with SAML SSO
                </button>
              </div>
            </form>
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Or{' '}
            <Link href={`/${demo.slug}`}>
              <a className={`font-medium text-${demo.color}-600 hover:text-${demo.color}-500`}>
                continue with email
              </a>
            </Link>
          </p>
        </div>
      </div>
    )
  }
}
