import { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';
import { BarChartOptions } from '../../chartOptions/BarChartOptions';
import { Box } from '@radix-ui/themes'

function BarChart() {
  const [options] = useState(BarChartOptions);
    return (
      <Box mt="4" size="4" style={{ gridColumn: "1/4", alignItems: "center", height: "90rem", maxHeight: '500', width: '90%', maxWidth: '500' }}>
        <AgChartsReact options={options} />
      </Box>
    )
  
}

export default BarChart