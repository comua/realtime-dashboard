import { useMotorRpms } from '../../data/useMotorRpms'
import { Chart } from '../chart/Chart'
import { ChartHeader } from '../chart/ChartHeader'
import { SkeletonChart } from '../chart/SkeletonChart'

export const MotorRpmChart = () => {
  const { data, isLoading } = useMotorRpms()

  return (
    <>
      <ChartHeader title="Motor RPM" currentMeasurement={data?.measurements?.[0]} />
      {isLoading ? <SkeletonChart /> : <Chart data={data} />}
    </>
  )
}
