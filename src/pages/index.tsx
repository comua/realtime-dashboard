import { NextSeo } from 'next-seo'
import { FC } from 'react'

import { MetricsDashboard } from '../components/metrics/MetricsDashboard'

const Home: FC = () => {
  const title = 'Home'
  const description = 'Home page'

  return (
    <div
      className={`relative flex h-[100svh] w-[100svw] flex-col items-center justify-center bg-black px-24 pt-48 pb-24 text-14 text-white`}
    >
      <NextSeo title={title} description={description} openGraph={{ title, description }} />
      <MetricsDashboard />
    </div>
  )
}

export default Home
