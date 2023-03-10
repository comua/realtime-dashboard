import React from 'react'

import { CableDiameterChart } from './CableDiameterChart'
import { LineSpeedChart } from './LineSpeedChart'
import { MotorRpmChart } from './MotorRpmChart'

export const MetricsDashboard = () => {
  return (
    <div className="mt-16 flex h-full w-full flex-col first:mt-24">
      <CableDiameterChart />
      <LineSpeedChart />
      <MotorRpmChart />
    </div>
  )
}
