import { sort } from '../data/sort'
export const AppliedChartOptions = (xData) => {
  if(!xData) return []
  return({
    // data: sort(xData.slice(0, 5), 'appliedDate'),
    data: sort(xData, 'appliedDate'),
    series: [
      {
        type: "line",
        xKey: "appliedDate",
        yKey: "appliedCount",
        yName: "Applied",
        xName: "Company",
        stroke: "#39e6da",
        cursor: "pointer",
        strokeWidth:4,
        lineDashOffset:3,
        cursor: 'pointer',
        visible: true,
        showInLegend: false,
        highlightStyle: {
          // Attributes that apply to individual items within a single series.
          // For example, a line series marker nearest to the mouse cursor,
          // or a bar segment under a cursor.
          item: {
            fill: '#1D3557',
            stroke: undefined,
            strokeWidth: undefined,
          },
          // Attributes that apply to the whole series containing the highlighted item.
          series: {
            dimOpacity: .1, // series opacity when dimmed (while some other series is hovered)
            strokeWidth: undefined
          }
        },
        tooltip: {
          enabled:true,
          position: {
            yOffset: -40,
            xOffset: -20
          },
          renderer: ({title, datum}) => {
            return({
              title: datum.appliedLocation,
              content: datum.company + ': ' + datum.appliedDate,
              color: "hsl(0, 0%, 100%)",
              backgroundColor: "hsl(0, 0%, 10%)"
            })
            }
        },
        marker: {
          enabled:true,
          fill: '#39e6da',
          size: 10,
          stroke: '#39e6da',
          strokeWidth: 3,
          shape: 'circle',
        },
        label: {
          enabled: false,
          formatter: ({ value, datum, seriesId, itemId }) => datum.companyName
        },
      },
    ],
    background: {
      visible:false,
      fill: 'transparent'
    },
    axes: [
      {
        type: "category",
        position: "bottom",
        label: {
          enabled:false,
        },
        title: {
          enabled: true,
          text: "Date Applied"
        },
      
      },
      {
        type: "number",
        position: "left",
        min:0,
        reverse:false,
        nice: true,
        line: {
          enabled:true
        },
        crossLines: [{
          enabled: true
        }],
        title: {
          enabled: true,
          text: "Applications"
        },
        tick: {
          enabled: false
        },
        gridLine:{
          enabled: false
        },
        label: {
          enabled:false,
        },
      }
    ]
  })
}