import React from 'react'
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'

import { COMPACT_NUMBER_FORMATTER } from '../../lib/constants'

const LINE_TYPE = 'monotone'

export const Chart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data.measurements}>
        <Area dataKey="range" strokeWidth={0} fill="deepskyblue" isAnimationActive={false} />
        <Line dataKey="avg" stroke="white" type={LINE_TYPE} isAnimationActive={false} dot={false} />
        <CartesianGrid stroke="gray" strokeDasharray="3 3" />
        <XAxis
          dataKey="timestamp"
          tickCount={10}
          type="number"
          unit="s"
          reversed
          domain={[0, 300]}
        />
        <YAxis
          dataKey="avg"
          orientation="right"
          domain={[data.min, data.max]}
          tickFormatter={(tick) => COMPACT_NUMBER_FORMATTER.format(tick)}
        />
      </ComposedChart>
    </ResponsiveContainer>
  )
}
