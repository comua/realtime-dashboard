import { AnimatePresence } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { FC } from 'react'

const Home: FC = () => {
  const title = 'Home'
  const description = 'Home page'

  return (
    <AnimatePresence>
      <div
        className={`relative flex w-[100svw] flex-col items-center justify-center bg-black p-48 px-24 text-white`}
      >
        <NextSeo title={title} description={description} openGraph={{ title, description }} />
        {Array(50).fill(<div>Hello World</div>)}
      </div>
    </AnimatePresence>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default Home
