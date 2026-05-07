import '../styles/tailwind.css'
import { DatadogPagesRouter } from '@datadog/browser-rum-nextjs'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DatadogPagesRouter />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
