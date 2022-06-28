import { CogIcon, UserCircleIcon } from '@heroicons/react/outline'
import * as Tabs from '@radix-ui/react-tabs';

const subNavigation = [
  { name: 'Admin Settings', href: '#', icon: CogIcon, current: true },
  { name: 'Your Profile', href: '#', icon: UserCircleIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Settings(props) {
  return (
    <main className="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
          <nav className="space-y-1">
            {subNavigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-gray-50 text-blue-600 hover:bg-white'
                    : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                  'group rounded-md px-3 py-2 flex items-center text-sm font-medium',
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                <item.icon
                  className={classNames(
                    item.current ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500',
                    'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                  )}
                  aria-hidden="true"
                />
                <span className="truncate">{item.name}</span>
              </a>
            ))}
          </nav>
        </aside>

        <Tabs.Root defaultValue="sso" orientation="vertical" className="sm:px-6 lg:px-0 lg:col-span-9 shadow sm:rounded-md sm:overflow-hidden">
          <Tabs.List aria-label="configure settings" className="flex justify-around text-lg leading-6 font-medium text-gray-900">
            <Tabs.Trigger value="sso" className="hover:bg-white focus:bg-white h-full w-full px-4 py-3 bg-gray-50">Configure Single Sign-On</Tabs.Trigger>
            <Tabs.Trigger value="directory-sync" className="hover:bg-white focus:bg-white h-full w-full px-4 py-3 bg-gray-50"><h2>Configure Directory Sync</h2></Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="sso">
          <form onSubmit={props.onSubmit.bind(this, 'sso')}>
              <div className="bg-white py-6 px-4 sm:p-6">
                <div>
                  <p className="mt-1 text-sm text-gray-500">
                    Allow users to authentication using an Identity Provider.
                  </p>
                </div>
                <button
                  type="submit"
                  className="py-2 px-4 my-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Configure
                </button>
              </div>
          </form>
          </Tabs.Content>
          <Tabs.Content value="directory-sync">
          <form onSubmit={props.onSubmit.bind(this, 'dsync')}>
              <div className="bg-white py-6 px-4 sm:p-6">
                <div>
                  <p className="mt-1 text-sm text-gray-500">
                    Provision and de-provision accounts with your directory provider.
                  </p>
                </div>
                <button
                  type="submit"
                  className="py-2 px-4 my-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Configure
                </button>
              </div>
          
            </form>
          </Tabs.Content>
        </Tabs.Root>

       
      </div>
    </main>
  )
}
