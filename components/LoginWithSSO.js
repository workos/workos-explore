import React from 'react'
import Link from 'next/link'
import { LockClosedIcon } from '@heroicons/react/solid'
import Alert from './Alert'
import * as Label from '@radix-ui/react-label';
import * as Separator from '@radix-ui/react-separator';

export default class LoginWithSSO extends React.Component {
  render() {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-20 w-auto" src="/favicon.png" alt="HireOS" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to HireOS
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <Alert succeeded={this.props.succeeded} message={this.props.message} />

            <form onSubmit={this.props.onSubmit.bind(this)} className="space-y-6">
              <div>
              <Label.Root htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </Label.Root>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Enter email address"
                    defaultValue="sheldon@foo-corp.com"
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
                  Continue
                </button>
              </div>
              <div className="relative my-6">
              <div className="flex absolute inset-0 items-center">
                <Separator.Root decorative className="w-full my-4 bg-gray-200 h-px"></Separator.Root>
              </div>
              <div class="flex relative justify-center text-sm">
                <span class="px-2 text-xs font-medium uppercase bg-white text-gray-500 ">Or</span>
              </div>
            </div>
              <button 
                    onClick={this.props.onSubmit.bind(this)}
                    value="google"
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border rounded-md shadow-sm text-xs font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                  >
                    <svg class="w-4 h-4 mx-2" viewBox="0 0 533.5 544.3" x="0px" y="0px"><g><path d="M533.5,278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1,33.8-25.7,63.7-54.4,82.7v68h87.7 C503.9,431.2,533.5,361.2,533.5,278.4z" fill="#4285F4"></path><path d="M272.1,544.3c73.4,0,135.3-24.1,180.4-65.7l-87.7-68c-24.4,16.6-55.9,26-92.6,26c-71,0-131.2-47.9-152.8-112.3 H28.9v70.1C75.1,486.3,169.2,544.3,272.1,544.3z" fill="#34A853"></path><path d="M119.3,324.3c-11.4-33.8-11.4-70.4,0-104.2V150H28.9c-38.6,76.9-38.6,167.5,0,244.4L119.3,324.3z" fill="#FBBC04"></path><path d="M272.1,107.7c38.8-0.6,76.3,14,104.4,40.8l0,0l77.7-77.7C405,24.6,339.7-0.8,272.1,0C169.2,0,75.1,58,28.9,150 l90.4,70.1C140.8,155.6,201.1,107.7,272.1,107.7z" fill="#EA4335"></path></g></svg>
                    Sign in with Google
                  </button>
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
