import { useEffect, useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';
import { BarChartOptions } from '../../chartOptions/BarChartOptions';
import { BuildBarChartData } from '../../data/BarChartData';
import GetData from '../../data/GetData';
import { Box } from '@radix-ui/themes'

function BarChart() {
  const container = []
  let data = GetData()
  const [options, setOptions] = useState(BarChartOptions(container))
  useEffect(() => {
    data.then((resolve) => (
      setOptions(
        BarChartOptions(BuildBarChartData(resolve))
      )
    ))
  }, [])
    return (
      <Box mt="4" size="4" style={{ gridColumn: "1/4", alignItems: "center", height: "90rem", maxHeight: '500', width: '90%', maxWidth: '500' }}>
        <AgChartsReact options={options} />
      </Box>
    )
  
}

export default BarChart