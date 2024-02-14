import { AgChartsReact } from 'ag-charts-react';
import { useState } from 'react'
let getData = () => ([
  { asset: 'Stocks', amount: 60000 },
  { asset: 'Bonds', amount: 40000 },
  { asset: 'Cash', amount: 7000 },
  { asset: 'Real Estate', amount: 5000 },
  { asset: 'Commodities', amount: 3000 },
])
let placeholderArr = []
let resultArr = []
let counter = 0
const RETURN = () => {
  let currentStorage = JSON.parse(localStorage.getItem('jobs'))
  let result = currentStorage.map(el => {
    let companyPresent = el.company.charAt(0).toUpperCase() + el.company.slice(1)
    let company = el.company.split(" ").join("-").toLowerCase().trim()
    if(company && !placeholderArr.includes(company)){
      counter = 0
      placeholderArr.push(company)
    }
    
    if(placeholderArr.includes(company)){
      counter++
      let test = resultArr.find(el => el.company === companyPresent)
      if(test){
        return test.count = counter
      }
      return resultArr.push({company:companyPresent, count: counter})
    }
    
  })
  return resultArr
}


export const PieChartOptions = () => {
  return(({
    data: RETURN(),
    title: {
      text: "Portfolio Composition",
    },
    background:{
      fill: 'transparent'
    },
    series: [
      {
        type: "pie",
        angleKey: "count",
        legendItemKey: "company",
      },
    ],
  })
)
}