import '../styles/tailwind.css'
import type { AppProps } from 'next/app'
import { DatadogPagesRouter } from '@datadog/browser-rum-nextjs'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DatadogPagesRouter />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
