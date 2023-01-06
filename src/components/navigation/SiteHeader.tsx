import { FC } from 'react'

import { NoScrollLink } from './NoScrollLink'

export const SiteHeader: FC = () => {
  return (
    <header className="fixed z-50 flex w-full justify-between p-24 text-14 transition-colors duration-1000 ease-in-out-expo">
      <div className="">
        <NoScrollLink href="/">Oden</NoScrollLink>
      </div>
    </header>
  )
}
