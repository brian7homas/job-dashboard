import { AgChartsReact } from 'ag-charts-react';
import { useState } from 'react'
let getData = () => ([
  { asset: 'Stocks', amount: 60000 },
  { asset: 'Bonds', amount: 40000 },
  { asset: 'Cash', amount: 7000 },
  { asset: 'Real Estate', amount: 5000 },
  { asset: 'Commodities', amount: 3000 },
])



export const PieChartOptions = () => {
  return(({
    data: getData(),
    title: {
      text: "Portfolio Composition",
    },
    background:{
      fill: 'transparent'
    },
    series: [
      {
        type: "pie",
        angleKey: "amount",
        legendItemKey: "asset",
      },
    ],
  })
)
}