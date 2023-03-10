import { useQuery } from '@tanstack/react-query'

import { formatSecondsAgo } from '../lib/helpers'

export const QUERY_BASE = 'http://takehome-frontend.oden.network/'

export const queryMetrics = async ({ metric }) => {
  const response = await fetch(`${QUERY_BASE}?metric=${metric}`)
  const data = await response.json()

  return data
}

export const useMetricsQuery = ({ metric }) => {
  const queryResults = useQuery({
    queryKey: [metric],
    queryFn: () => queryMetrics({ metric }),
    refetchInterval: 1000,
  })

  const shapedData = queryResults?.data?.series.map((measurement) => {
    return {
      timestamp: formatSecondsAgo(measurement[0]),
      range: [measurement[1][0], measurement[1][2]],
      min: measurement[1][0],
      max: measurement[1][2],
      avg: measurement[1][1],
    }
  })

  const min = shapedData?.reduce(
    (min, measurement) => Math.min(min, measurement.range[0]),
    shapedData[0].range[0]
  )

  const max = shapedData?.reduce(
    (max, measurement) => Math.max(max, measurement.range[1]),
    shapedData[0].range[1]
  )

  return {
    ...queryResults,
    data: { min, max, measurements: shapedData },
  }
}
