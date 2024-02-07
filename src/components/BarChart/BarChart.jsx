import { useEffect, useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';
import { BarChartOptions } from '../../chartOptions/BarChartOptions';

function BarChart() {
  const [options, setOptions] = useState(BarChartOptions);
  return (
    <>
      <AgChartsReact options={options} />
    </>
  )
  
}

export default BarChart