import { Metric } from '../lib/constants'
import { useMetricsQuery } from './useMetricsQuery'

export const useMotorRpms = () => {
  return useMetricsQuery({ metric: Metric.MotorRPM })
}
