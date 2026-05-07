import { datadogRum } from '@datadog/browser-rum'
import { nextjsPlugin } from '@datadog/browser-rum-nextjs'

if (process.env.NEXT_PUBLIC_DATADOG_RUM_APPLICATION_ID) {
  datadogRum.init({
    applicationId: process.env.NEXT_PUBLIC_DATADOG_RUM_APPLICATION_ID,
    clientToken: process.env.NEXT_PUBLIC_DATADOG_RUM_CLIENT_TOKEN,
    site: process.env.NEXT_PUBLIC_DATADOG_RUM_SITE || 'datadoghq.com',
    service: 'workos-explore',
    env: process.env.NODE_ENV,
    version: process.env.NEXT_PUBLIC_COMMIT_SHA || undefined,
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackResources: true,
    trackUserInteractions: true,
    trackLongTasks: true,
    plugins: [nextjsPlugin()],
  })
}
