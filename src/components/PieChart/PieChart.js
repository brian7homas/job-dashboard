import { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';
// import { PieChartOptions } from '../../chartOptions/PieChartOptions';
import { PieChartOptions } from '../../chartOptions/PieChartOpitions';

function PieChart() {
  const [options, setOptions] = useState(PieChartOptions);
  return (
    <>
      <AgChartsReact options={options} />
    </>
  )
}

export default PieChart