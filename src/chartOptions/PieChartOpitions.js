export const PieChartOptions = (data) => {
  return(({
    data: data,
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