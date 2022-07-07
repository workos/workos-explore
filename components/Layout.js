import Link from 'next/link'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon } from '@heroicons/react/outline'
import * as Avatar from '@radix-ui/react-avatar'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

const user = {
  name: 'Whitney Francis',
  email: 'whitney@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#dashboard', sub: 'menu1' },
  { name: 'Jobs', href: '#jobs', sub: 'menu2' },
  { name: 'Applicants', href: '#applicants' },
  { name: 'Company', href: '#company' },
]

const navigationItems = navigation.map((navItem) => {
  return (
    <NavigationMenu.Link
      className="px-3 py-2 text-gray-900 text-sm font-medium"
      href={navItem.href}
    >
      {navItem.name}
    </NavigationMenu.Link>
  )
})

export default function Layout(props) {
  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Logout', href: '/app/login' },
  ]

  return (
    <div className="min-h-screen bg-gray-100 ">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <NavigationMenu.Root className="flex justify-between h-16">
            {/*Logo */}
            <NavigationMenu.Sub className="flex px-2 lg:px-0">
              <NavigationMenu.Item className="flex-shrink-0 flex items-center">
                <NavigationMenu.Link href="/app">
                  <a>
                    <img className="h-8 w-auto" src="/HireOS.svg" alt="HireOS Logo" />
                  </a>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            </NavigationMenu.Sub>
            {/* Link Menu */}
            <NavigationMenu.Sub className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-4">
              {navigationItems}
            </NavigationMenu.Sub>
            {/* Search Bar */}
            <NavigationMenu.Item className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="max-w-lg w-full lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white shadow-sm placeholder-gray-500 sm:text-sm"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
            </NavigationMenu.Item>
            <NavigationMenu.Sub className="hidden lg:ml-4 lg:flex lg:items-center">
              <button
                type="button"
                className="mx-3 flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              {/* Profile dropdown */}
              <DropdownMenu.Root>
                <DropdownMenu.Trigger className="bg-white rounded-full flex text-sm focus:outline-none">
                  <Avatar.Root>
                    <Avatar.Image className="h-8 w-8 rounded-full" alt="" src={user.imageUrl} />
                  </Avatar.Root>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className="origin-top-right absolute mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                  <DropdownMenu.Root>
                    {userNavigation.map((item) => (
                      <DropdownMenu.Item className="block px-4 py-2 text-sm text-gray-700">
                        <Link key={item.name} href={item.href}>
                          <a>{item.name}</a>
                        </Link>
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.Root>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </NavigationMenu.Sub>
          </NavigationMenu.Root>
        </div>
      </header>
      {props.children}
    </div>
  )
}
