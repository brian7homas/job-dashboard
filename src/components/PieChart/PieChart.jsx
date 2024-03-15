import { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';
import { PieChartOptions } from '../../chartOptions/PieChartOpitions';
import { Box } from '@radix-ui/themes'

function PieChart() {
  const [options, setOptions] = useState(PieChartOptions);
  return (
    <Box style={{ gridColumn: "1/4", height: "95%", maxHeight: "500", width: "90%", maxWidth: "500" }}>
      <AgChartsReact options={options} />
    </Box>
  )
}

export default PieChart