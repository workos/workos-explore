import React from 'react'
import Head from 'next/head'

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
        url: '/app/settings',
        icon: `<svg height="57" viewBox="0 0 166 38" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M24.4481 19.5969H23.6312V17.94H24.4481C27.1567 17.94 29.3537 15.7154 29.3537 12.9692C29.3537 10.2231 27.1567 8 24.4481 8C21.7394 8 19.5425 10.2246 19.5425 12.9708V13.7985H17.9073V12.9708C17.9073 10.2246 15.7118 8 13.0032 8C10.2945 8 8.09756 10.2246 8.09756 12.9708C8.09756 15.7169 10.293 17.9415 13.0032 17.9415H13.82V19.5985H13.0032C10.293 19.5969 8.09756 21.8231 8.09756 24.5677C8.09756 27.3123 10.293 29.5385 13.0032 29.5385C15.7133 29.5385 17.9088 27.3138 17.9088 24.5677V23.74H19.544V24.5677C19.544 27.3123 21.7394 29.5385 24.4496 29.5385C27.1597 29.5385 29.3537 27.3123 29.3537 24.5677C29.3537 21.8231 27.1567 19.5969 24.4481 19.5969ZM21.1777 12.9708C21.1777 11.1415 22.6413 9.65692 24.4481 9.65692C26.2548 9.65692 27.7185 11.14 27.7185 12.9708C27.7185 14.8015 26.2548 16.2846 24.4481 16.2846H23.6312V15.4569H24.4481C25.8024 15.4569 26.9001 14.3446 26.9001 12.9723C26.9001 11.6 25.8024 10.4877 24.4481 10.4877C23.0937 10.4877 21.996 11.6 21.996 12.9723V19.6H21.1792V12.9708H21.1777ZM23.6312 13.7985V12.9708C23.6312 12.5138 23.9971 12.1431 24.4481 12.1431C24.899 12.1431 25.2649 12.5138 25.2649 12.9708C25.2649 13.4277 24.899 13.7985 24.4481 13.7985H23.6312ZM17.9073 17.94H19.5425V19.5969H17.9073V17.94ZM13.0032 16.2846C11.1979 16.2846 9.73276 14.8015 9.73276 12.9708C9.73276 11.14 11.1964 9.65692 13.0032 9.65692C14.8099 9.65692 16.2736 11.14 16.2736 12.9708V13.7985H15.4567V12.9708C15.4567 11.5985 14.359 10.4862 13.0047 10.4862C11.6504 10.4862 10.5526 11.5985 10.5526 12.9708C10.5526 14.3431 11.6504 15.4554 13.0047 15.4554H19.5455V16.2831H13.0032V16.2846ZM13.82 13.7985H13.0032C12.5522 13.7985 12.1863 13.4277 12.1863 12.9708C12.1863 12.5138 12.5522 12.1431 13.0032 12.1431C13.4541 12.1431 13.82 12.5138 13.82 12.9708V13.7985ZM16.2736 24.5677C16.2736 26.3985 14.8099 27.8815 13.0032 27.8815C11.1964 27.8815 9.73276 26.3985 9.73276 24.5677C9.73276 22.7369 11.1964 21.2538 13.0032 21.2538H13.82V22.0815H13.0032C11.6488 22.0815 10.5511 23.1938 10.5511 24.5661C10.5511 25.9385 11.6488 27.0508 13.0032 27.0508C14.3575 27.0508 15.4552 25.9385 15.4552 24.5661V17.94H16.272V24.5677H16.2736ZM13.82 23.74V24.5677C13.82 25.0246 13.4541 25.3954 13.0032 25.3954C12.5522 25.3954 12.1863 25.0246 12.1863 24.5677C12.1863 24.1108 12.5522 23.74 13.0032 23.74H13.82ZM24.4481 27.8815C22.6413 27.8815 21.1777 26.3985 21.1777 24.5677V23.74H21.9945V24.5677C21.9945 25.94 23.0922 27.0523 24.4465 27.0523C25.8009 27.0523 26.8986 25.94 26.8986 24.5677C26.8986 23.1954 25.8009 22.0831 24.4465 22.0831H17.9073V21.2554H24.4481C26.2533 21.2554 27.7185 22.7385 27.7185 24.5692C27.7185 26.3985 26.2548 27.8815 24.4481 27.8815ZM23.6312 23.74H24.4481C24.899 23.74 25.2649 24.1108 25.2649 24.5677C25.2649 25.0246 24.899 25.3954 24.4481 25.3954C23.9971 25.3954 23.6312 25.0246 23.6312 24.5677V23.74Z" fill="currentColor"/>
</svg> `,
      },
      {
        title: 'Sign-On',
        description:
          'SSO enables authentication via an organization’s Identity Provider (IdP), such as Google Workspace or Okta.',
        url: '/app/sso',
        icon: `<svg height="57" viewBox="0 0 182 38" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M30.1262 9.22923C30.3154 13.3138 29.3831 17.4954 27.1908 21.2938C25.8985 23.5277 24.2738 25.4523 22.4138 27.04C22.1323 26.8831 21.8554 26.7169 21.5831 26.5415C23.4615 24.9815 25.1 23.0662 26.3923 20.8277C28.5754 17.0431 29.4615 12.8708 29.1938 8.81385C28.5569 8.55077 27.9154 8.31538 27.2692 8.10769V8.11231C24.98 7.39231 22.5431 7 20.0138 7C15.6338 7 11.5354 8.17692 8 10.2262C8 10.9369 8.03692 11.6385 8.09692 12.3354C11.5446 10.1292 15.6292 8.84615 20.0138 8.84615C22.5938 8.84615 25.0723 9.29385 27.38 10.1108C27.3846 10.4338 27.38 10.7569 27.3662 11.08C25.0723 10.2308 22.5985 9.76923 20.0138 9.76923C15.6477 9.76923 11.5862 11.0892 8.21231 13.3508C8.3 14.0338 8.42 14.7077 8.56308 15.3723C8.56308 15.3723 8.56769 15.3723 8.56769 15.3677C9.08462 17.7123 9.96154 20.02 11.2262 22.2077C13.4138 25.9969 16.4877 28.96 20.0277 31C20.6415 30.6446 21.2323 30.2615 21.8046 29.86C18.1723 27.9815 15.0154 25.0831 12.8231 21.2846C11.5308 19.0462 10.6815 16.6785 10.2338 14.2738C10.5108 14.1123 10.7923 13.9508 11.0785 13.8031C11.4938 16.2077 12.3292 18.5846 13.6215 20.8231C15.8046 24.6077 18.98 27.46 22.6215 29.2554C23.1708 28.8354 23.6923 28.3969 24.1954 27.94H24.1908C25.9631 26.32 27.5231 24.4092 28.7877 22.2169C30.9754 18.4231 32.0046 14.2831 32 10.1985C31.3862 9.84308 30.7585 9.52462 30.1262 9.22923ZM15.2185 19.9C13.9538 17.7077 13.1738 15.3677 12.8277 13C15.0523 12.1092 17.4754 11.6154 20.0092 11.6154C22.5431 11.6154 24.9615 12.1092 27.1815 12.9954C26.84 15.3677 26.06 17.7123 24.7908 19.9092C23.5262 22.1015 21.8877 23.9523 20.0092 25.4292C18.1308 23.9477 16.4877 22.0969 15.2185 19.9Z" fill="currentColor"/>
</svg>`,
      },
      {
        title: 'Magic Link',
        description:
          'Magic Link gives you the ability to build a secure passwordless authentication flow utilizing email.',
        url: '/app/login',
        icon: `<svg height="57" viewBox="0 0 146 38" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.519 9H18.9035C18.9035 13.1969 21.341 16.8015 24.8405 18.4277C24.4985 18.5508 24.1625 18.6908 23.8355 18.8446C20.42 16.9554 18.0965 13.2585 18.0965 9H16.481C16.481 13.8046 12.6845 17.6985 8 17.6985V19.3554C12.0905 19.3554 15.6065 16.8554 17.192 13.2677C17.312 13.6185 17.4485 13.96 17.597 14.2954C15.755 17.7985 12.152 20.1831 8 20.1831V21.84C12.6845 21.84 16.481 25.7338 16.481 30.5385H18.0965C18.0965 26.3446 15.662 22.7385 12.1655 21.1108C12.5045 20.9877 12.8345 20.8461 13.16 20.6938C16.577 22.5815 18.9035 26.2785 18.9035 30.5385H20.519C20.519 25.7338 24.3155 21.84 29 21.84V20.1831C24.9095 20.1831 21.395 22.6831 19.808 26.2723C19.688 25.9215 19.5515 25.58 19.403 25.2446C21.245 21.74 24.8465 19.3554 29 19.3554V17.6985C24.3155 17.6985 20.519 13.8046 20.519 9ZM18.4985 23.5554C17.54 22.0431 16.2815 20.7508 14.807 19.7677C16.2815 18.7846 17.543 17.4954 18.5 15.9831C19.4585 17.4954 20.717 18.7877 22.1915 19.7692C20.717 20.7523 19.457 22.0431 18.4985 23.5554Z" fill="currentColor"/>
</svg>`,
      },
    ]

    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto pt-12 px-4 sm:px-6 lg:pt-16 lg:px-8">
          <div className="mb-20">
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-700 sm:text-4xl">
              Try it for yourself
            </p>
            <p className="mt-3 text-lg text-gray-500">See how WorkOS APIs can work in practice.</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
              {sections.map((section) => (
                <a
                  key={section.title}
                  href={section.url}
                  className={`col-span-1 flex flex-row py-20 px-20 bg-gray-50 transition text-gray-400 hover:text-indigo-200 hover:bg-indigo-500`}
                >
                  <div className="max-h-12 w-20" dangerouslySetInnerHTML={{ __html: section.icon }} />
                  <div className="text-2xl mt-3">{section.title}</div>
                </a>
              ))}
            </div>
          </div>
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
            <p className="text-center text-base text-gray-400 text-xs">
              Built with{' '}
              <a className="text-indigo-600" href="https://www.radix-ui.com/">
                Radix
              </a>
            </p>
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
