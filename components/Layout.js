import { Fragment } from 'react'
import Link from 'next/link'
import { Menu, Popover, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import * as Avatar from '@radix-ui/react-avatar';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const user = {
  name: 'Whitney Francis',
  email: 'whitney@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#' },
  { name: 'Jobs', href: '#' },
  { name: 'Applicants', href: '#' },
  { name: 'Company', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Layout(props) {
  const userNavigation = [
    { name: 'Admin Settings', href: '/app/settings' },
    { name: 'Your Profile', href: '#' },
    { name: 'Logout', href: '/app/login' },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <Popover className="flex justify-between h-16">
            {({ open }) => (
              <>
                <div className="flex px-2 lg:px-0">
                  <div className="flex-shrink-0 flex items-center">
                    <Link href="/app">
                      <a>
                        <img className="h-8 w-auto" src="/HireOS.svg" alt="HireOS Logo" />
                      </a>
                    </Link>
                  </div>
                  <nav
                    aria-label="Global"
                    className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-4"
                  >
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="px-3 py-2 text-gray-900 text-sm font-medium"
                      >
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                  <div className="max-w-lg w-full lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white shadow-sm placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Transition.Root show={open} as={Fragment}>
                  <div className="lg:hidden">
                    <Transition.Child
                      as={Fragment}
                      enter="duration-150 ease-out"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="duration-150 ease-in"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Popover.Overlay
                        static
                        className="z-20 fixed inset-0 bg-black bg-opacity-25"
                        aria-hidden="true"
                      />
                    </Transition.Child>

                    <Transition.Child
                      as={Fragment}
                      enter="duration-150 ease-out"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="duration-150 ease-in"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Popover.Panel
                        focus
                        static
                        className="z-30 absolute top-0 right-0 max-w-none w-full p-2 transition transform origin-top"
                      >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
                          <div className="pt-3 pb-2">
                            <div className="flex items-center justify-between px-4">
                              <div>
                                <img className="h-8 w-auto" src="/HireOS.svg" alt="HireOS Logo" />
                              </div>
                              <div className="-mr-2">
                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                                  <span className="sr-only">Close menu</span>
                                  <XIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                              </div>
                            </div>
                            <div className="mt-3 px-2 space-y-1">
                              {navigation.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                                >
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          </div>
                          <div className="pt-4 pb-2">
                            <div className="flex items-center px-5">
                              <div className="flex-shrink-0">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={user.imageUrl}
                                  alt=""
                                />
                              </div>
                              <div className="ml-3">
                                <div className="text-base font-medium text-gray-800">
                                  {user.name}
                                </div>
                                <div className="text-sm font-medium text-gray-500">
                                  {user.email}
                                </div>
                              </div>
                              <button className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                <span className="sr-only">View notifications</span>
                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                              </button>
                            </div>
                            <div className="mt-3 px-2 space-y-1">
                              {userNavigation.map((item) => (
                                <Link key={item.name} href={item.href}>
                                  <a className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">
                                    {item.name}
                                  </a>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition.Child>
                  </div>
                </Transition.Root>
                <div className="hidden lg:ml-4 lg:flex lg:items-center">
                  <button
                    type="button"
                    className="mx-3 flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <DropdownMenu.Root> 
                    <DropdownMenu.Trigger className="bg-white rounded-full flex text-sm">  
                      <Avatar.Root>
                        <Avatar.Image className="h-8 w-8 rounded-full" alt="" src={user.imageUrl} />
                      </Avatar.Root> </DropdownMenu.Trigger>

                    <DropdownMenu.Content 
                      className="origin-top-right absolute mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <DropdownMenu.Root>
                        <DropdownMenu.TriggerItem className='block px-4 py-2 text-sm text-gray-700'>Settings</DropdownMenu.TriggerItem>
                        <DropdownMenu.Content>
                          <DropdownMenu.Item className='block px-4 py-2 text-sm text-gray-700'>Admin Settings</DropdownMenu.Item>
                          <DropdownMenu.Item className='block px-4 py-2 text-sm text-gray-700'>User Settings</DropdownMenu.Item>
                          <DropdownMenu.Arrow />
                        </DropdownMenu.Content>
                      </DropdownMenu.Root>
                      <DropdownMenu.Item className='block px-4 py-2 text-sm text-gray-700'>Logout</DropdownMenu.Item>
                      
                      
                
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </div>
              </>
            )}
          </Popover>
        </div>
      </header>

      {props.children}
    </div>
  )
}
