import '../css/app.css'
import 'react-loading-skeleton/dist/skeleton.css'

import { Inter, Roboto_Mono } from '@next/font/google'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'

import { Layout } from '../components/layout/Layout'
import { DefaultMeta } from '../components/seo/DefaultMeta'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Wait for font to load
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap', // Wait for font to load
})

const queryClient = new QueryClient({
  defaultOptions: {},
})

const App = ({ Component, pageProps, router }: AppProps) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${router.route}`

  return (
    <div className={`relative flex font-body ${inter.variable} ${robotoMono.variable}`}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <DefaultMeta canonical={url} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
      </QueryClientProvider>
    </div>
  )
}

export default App
