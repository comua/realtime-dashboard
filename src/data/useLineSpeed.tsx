import { Metric } from '../lib/constants'
import { useMetricsQuery } from './useMetricsQuery'

export const useLineSpeed = () => {
  return useMetricsQuery({ metric: Metric.LineSpeed })
}
