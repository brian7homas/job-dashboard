import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import getData from "../data/GetData"
let placeholderArr = []
let resultArr = []
let counter = 0
const PieChartData = () => {
  const { state, setData } = useContext(DataContext)
  
  let data = getData(setData)
  data.then((resolve)=>(
    resolve.map(el => {
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
    ))
  let currentStorage = JSON.parse(localStorage.getItem('jobs'))
  return resultArr
}


export const PieChartOptions = () => {
  return(({
    data: PieChartData(),
    title: {
      text: "Total Companies",
    },
    background:{
      fill: 'transparent'
    },
    series: [
      {
        
        type: "pie",
        angleKey: "count",
        legendItemKey: "company",
        calloutLabelKey: "count",
        sectorLabelKey: "company",
        cursor:"pointer",
        fills:["#29ddaa", "#7839e6", "#dd2929", "#2971dd", "#b629dd", "#7839e6", "#036cff"],
        fillOpacity:.4,
        strokes:["#29ddaa", "#7839e6", "#dd2929", "#2971dd", "#b629dd", "#7839e6", "#036cff"],
        sectorLabel: {
          fontFamily: "Unbounded",
          fontWeight: 900
        },
        calloutLabel:{
          avoidCollisions: true,
          color:"white",
          fontFamily: "Unbounded",
          fontWeight: 900
        },
        tooltip:{
          enabled:true,
          interaction:{
            enabled:true
          },
          renderer: ({title, datum}) => {
            return({
              title: datum.company + ' : ' + datum.count,
              content: '',
              color: "hsl(0, 0%, 100%)",
              backgroundColor:  "hsl(0, 0%, 10%)",
            })
            }
        },
        highlightStyle:{
          item:{
            stroke: "#29ddaa",
            fill:'black',
            strokeWidth:2,
            fillOpacity:1
          },
          series:{
            dimOpacity:1,
            strokeWidth: .4
          }
        }
      },
    ],
  })
)
}