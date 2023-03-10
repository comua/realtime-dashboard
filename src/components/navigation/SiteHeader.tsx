import { FC } from 'react'

import { NoScrollLink } from './NoScrollLink'

export const SiteHeader: FC = () => {
  return (
    <header className="fixed z-50 flex w-full justify-between px-24 py-16 text-14 transition-colors duration-1000 ease-in-out-expo">
      <div className="">
        <NoScrollLink href="/">{/* <OdenLogoIcon /> */}</NoScrollLink>
      </div>
    </header>
  )
}
