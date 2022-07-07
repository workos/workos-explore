import { CogIcon, UserCircleIcon } from '@heroicons/react/outline'
import * as Tabs from '@radix-ui/react-tabs'
import React, { useState } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Settings(props) {
  const [status, setStatus] = useState('sso')

  return (
    <Tabs.Root defaultValue="sso" className="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <Tabs.List
          aria-label="configure settings"
          className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-2"
        >
          <Tabs.Trigger
            value="sso"
            className={classNames(
              status == 'sso'
                ? 'bg-gray-50 text-blue-600 hover:bg-white'
                : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
              'group rounded-md px-3 py-2 flex items-center text-sm font-medium',
            )}
            onClick={() => setStatus('sso')}
          >
            <CogIcon
              className={classNames(
                status == 'sso' ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500',
                'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
              )}
            ></CogIcon>
            <span className="truncate">Single Sign-On</span>
          </Tabs.Trigger>
          <Tabs.Trigger
            value="directory-sync"
            className={classNames(
              status == 'dsync'
                ? 'bg-gray-50 text-blue-600 hover:bg-white'
                : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
              'group rounded-md px-3 py-2 flex items-center text-sm font-medium',
            )}
            onClick={() => setStatus('dsync')}
          >
            <UserCircleIcon
              className={classNames(
                status == 'dsync' ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500',
                'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
              )}
            ></UserCircleIcon>
            <span className="truncate">Directory Sync</span>
          </Tabs.Trigger>
        </Tabs.List>

        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9 shadow sm:rounded-md sm:overflow-hidden">
          <Tabs.Content value="sso">
            <form onSubmit={props.onSubmit.bind(this, 'sso')}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="bg-white py-6 px-4 sm:p-6">
                  <div>
                    <h2
                      id="payment-details-heading"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Configure Single Sign-On
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Allow users to authentication using an Identity Provider.
                    </p>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 sm:px-6 cursor-pointer">
                  <button
                    type="submit"
                    className=" py-2 px-4 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Configure
                  </button>
                </div>
              </div>
            </form>
          </Tabs.Content>
          <Tabs.Content value="directory-sync">
            <form onSubmit={props.onSubmit.bind(this, 'dsync')}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="bg-white py-6 px-4 sm:p-6">
                  <div>
                    <h2
                      id="payment-details-heading"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Configure Directory Sync
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Provision and de-provision accounts with your directory provider.
                    </p>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    className="py-2 px-4 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Configure
                  </button>
                </div>
              </div>
            </form>
          </Tabs.Content>
        </div>
      </div>
    </Tabs.Root>
  )
}
