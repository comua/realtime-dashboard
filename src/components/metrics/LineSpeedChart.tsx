import { useLineSpeed } from '../../data/useLineSpeed'
import { Chart } from '../chart/Chart'
import { ChartHeader } from '../chart/ChartHeader'
import { SkeletonChart } from '../chart/SkeletonChart'

export const LineSpeedChart = () => {
  const { data, isLoading } = useLineSpeed()

  return (
    <>
      <ChartHeader title="Line Speed" currentMeasurement={data?.measurements?.[0]} />
      {isLoading ? <SkeletonChart /> : <Chart data={data} />}
    </>
  )
}
