import { useState, useEffect } from 'react';
import { AgChartsReact } from 'ag-charts-react';
import { PieChartOptions } from '../../chartOptions/PieChartOpitions';
import { Box } from '@radix-ui/themes'
import { PieChartData } from '../../data/PieChartData';
import GetData from '../../data/GetData';

function PieChart() {
  let data = GetData()
  const [options, setOptions] = useState(PieChartOptions([]));
  useEffect(() => {
    data.then((resolve) => {
      setOptions(
        PieChartOptions(PieChartData(resolve))
      )
    })
  }, [])
  return (
    <Box style={{ gridColumn: "1/4", height: "95%", maxHeight: "500", width: "90%", maxWidth: "500" }}>
      <AgChartsReact options={options} />
    </Box>
  )
}

export default PieChart