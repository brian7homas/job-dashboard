import { sort } from '../data/sort'
export const InterViewChartOptions = (state) => {
  return({
    currentStorage: [],
    mostRecentInterviewDate:state.mostRecentInterviewDate,
    data: sort(state.interviewDates, 'interviewDate') ,
    height:200,
    width:300,
    autoSize:false,
    series: [
      {
        type: "line",
        xKey: "interviewFormattedDate", // string
        yKey: "interviews",  //number
        yName: "Interviews",
        xName: "Interview",
        stroke: "#7839e6",
        strokeWidth:4,
        lineDashOffset:3,
        cursor: 'pointer',
        visible: true,
        showInLegend: false,
        connectMissingData:true,
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
          enabled: true,
          position: {
            yOffset: -40,
            xOffset: -20
          },
          renderer: ({title, datum}) => {
            return({
              title: title,
              content: datum.company + ': ' + datum.interviewFormattedDate,
              color: "hsl(0, 0%, 100%)",
              backgroundColor: "hsl(0, 0%, 10%)"
            })
            }
        },
        marker: {
          enabled:true,
          fill: '#7839e6',
          size: 10,
          stroke: '#7839e6',
          strokeWidth: 3,
          shape: 'circle',
        },
        label: {
          enabled: false,
          formatter: ({datum}) => {
            return datum.company
          }
        },
      },
    ],
    background: {
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
          text: "Interview Date"
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
          text: "Interviews"
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