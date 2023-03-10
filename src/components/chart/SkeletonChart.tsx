import React from 'react'
import Skeleton from 'react-loading-skeleton'

export const SkeletonChart = () => {
  return (
    <div className="h-full w-full">
      <Skeleton className="h-full w-full" baseColor="#000" duration={1} />
    </div>
  )
}
