import Head from 'next/head'
import Link from 'next/link'
import paths from '../lib/demos'

export default class extends React.Component {
  render() {
    return (
      <main>
        <Head>
          <title>WorkOS | Demo</title>
          <link href="/favicon.png" rel="shortcut icon" />
        </Head>

        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
              Choose Your Own Adventure
            </p>
            <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
              {paths.map(({ params }) => (
                <Link key={params.name} href={`/${params.slug}`}>
                  <a
                    className={`col-span-1 flex justify-center py-8 px-8 bg-gray-50 transition text-gray-400 hover:text-${params.color}-200 hover:bg-${params.color}-500`}
                  >
                    <div className="max-h-12" dangerouslySetInnerHTML={{ __html: params.logo }} />
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    )
  }
}
