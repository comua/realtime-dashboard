import React from 'react'

import { COMPACT_NUMBER_FORMATTER } from '../../lib/constants'

export const ChartHeader = ({ currentMeasurement, title }) => {
  return (
    <div className="mb-8 flex w-full justify-between uppercase">
      <div>{title}</div>
      <div>{COMPACT_NUMBER_FORMATTER.format(currentMeasurement?.avg)} AVG</div>
    </div>
  )
}
