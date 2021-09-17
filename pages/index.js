import React from 'react'
import Head from 'next/head'
import paths from '../lib/demos'

export default class extends React.Component {
  renderHero() {
    return (
      <div className="bg-indigo-600">
        <div className="relative max-w-2xl mx-auto py-16 px-4 text-center sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            <span className="block lg:inline">Explore WorkOS</span>
          </h1>
          <p className="mt-4 text-xl text-indigo-100">
            Interact and see how to make your app enterprise-ready.
          </p>
        </div>
      </div>
    )
  }

  renderSections() {
    const sections = [
      {
        title: 'Admin Portal',
        description:
          'Admin Portal provides an out-of-the-box UI for IT admins to configure SSO and Directory Sync Connections.',
        url: '/settings',
      },
      {
        title: 'Single Sign-On',
        description:
          'SSO enables authentication via an organization’s Identity Provider (IdP), such as Google Workspace or Okta.',
        url: '/sso',
      },
      {
        title: 'Magic Link',
        description:
          'Magic Link gives you the ability to build a secure passwordless authentication flow utilizing email.',
        url: '/',
      },
    ]

    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto pt-12 px-4 sm:px-6 lg:pt-16 lg:px-8">
          {sections.map((section) => (
            <div key={section.title} className="mb-20">
              <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-700 sm:text-4xl">
                {section.title}
              </p>
              <p className="mt-3 text-lg text-gray-500">{section.description}</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
                {paths.map(({ params }) => (
                  <a
                    target="_blank"
                    key={params.name}
                    href={`/${params.slug}${section.url}`}
                    className={`col-span-1 flex justify-center py-8 px-8 bg-gray-50 transition text-gray-400 hover:text-${params.color}-200 hover:bg-${params.color}-500`}
                  >
                    <div className="max-h-12" dangerouslySetInnerHTML={{ __html: params.logo }} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  renderCta() {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="text-indigo-600 block">Start your free trial today.</span>
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="https://dashboard.workos.com/signup"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="https://workos.com"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderFooter() {
    const navigation = [
      {
        name: 'Twitter',
        href: 'https://twitter.com/workos',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
      {
        name: 'GitHub',
        href: 'https://github.com/workos-inc',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ]

    return (
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; {new Date().getFullYear()} WorkOS, Inc.
            </p>
          </div>
        </div>
      </footer>
    )
  }

  render() {
    return (
      <main>
        <Head>
          <title>Explore | WorkOS</title>
          <link href="https://workos.imgix.net/brand/v2/favicon@32x32.png" rel="shortcut icon" />
        </Head>

        {this.renderHero()}
        {this.renderSections()}
        {this.renderCta()}
        {this.renderFooter()}
      </main>
    )
  }
}
