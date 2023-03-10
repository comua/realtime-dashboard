import { Metric } from '../lib/constants'
import { useMetricsQuery } from './useMetricsQuery'

export const useCableDiameters = () => {
  return useMetricsQuery({ metric: Metric.CableDiameter })
}
