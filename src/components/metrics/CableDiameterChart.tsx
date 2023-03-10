import { useCableDiameters } from '../../data/useCableDiameters'
import { Chart } from '../chart/Chart'
import { ChartHeader } from '../chart/ChartHeader'
import { SkeletonChart } from '../chart/SkeletonChart'

export const CableDiameterChart = () => {
  const { data, isLoading } = useCableDiameters()

  return (
    <>
      <ChartHeader title="Cable Diameter" currentMeasurement={data?.measurements?.[0]} />
      {isLoading ? <SkeletonChart /> : <Chart data={data} />}
    </>
  )
}
