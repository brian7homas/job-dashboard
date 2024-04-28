let colors = {
  dataText: "black",
  companies: {
    main: "#29ddaa",
    hoverFill: "#7839e6",
    hoverStroke: "#29ddaa"
  },
  remote: {
    main: "#b629dd",
    hoverFill: "#036cff",
    hoverStroke: "#b629dd"
  },
  hybrid: {
    main: "#2971dd",
    hoverFill: "#03ff20",
    hoverStroke: "#2971dd"
  },
  onSite: {
    main: "#dd2929",
    hoverFill: "#f6ff00",
    hoverStroke: "#dd2929"
  },
}
let sharedProps = {
  fillOpacity: .5,
  strokeWidth: 1.2,
  dimOpacity: .1
}
export const BarChartOptions = (container) => {
  //* Returning the barchart options
  return ({
    title: {
      fontFamily: "Unbounded",
      text: 'Role details',
    },
    subtitle: {
      fontFamily: "Unbounded",
      text: "Breakdown of each role and location",
    },
    data: container,
    background: {
      fill: "transparent"
    },

    series: [
      {
        type: "bar",
        direction: "horizontal",
        xKey: "position",
        yKey: "company",
        yName: "# of Companies",
        fill: colors.companies.main,
        fillOpacity: sharedProps.fillOpacity,
        stroke: colors.companies.main,
        strokeWidth: sharedProps.strokeWidth,
        cursor: "pointer",
        highlightStyle: {
          item: {
            fill: colors.companies.hoverFill,
            stroke: colors.companies.hoverStroke,
            strokeWidth: 1,
          },
          series: {
            dimOpacity: sharedProps.dimOpacity,
            strokeWidth: undefined
          }
        },
        tooltip: {
          enabled: true,
          renderer: ({ datum }) => {
            return ({
              title: datum.position,
              content: 'There is a total of ' + (datum.onsite + datum.hybrid + datum.remote + ' ' + datum.position) + ' positions',
              color: "hsl(0, 0%, 100%)",
              backgroundColor: "hsl(0, 0%, 10%)",
            })
          }
        },
        label: {
          color: "white",
          fontFamily: "Unbounded",
          fontSize: 11,
          placement: "inside",
          formatter: ({ value, datum }) => datum.position + " " + value.toFixed(0)
        },
      },

      {
        fill: colors.remote.main,
        fillOpacity: sharedProps.fillOpacity,
        stroke: colors.remote.main,
        strokeWidth: sharedProps.strokeWidth,

        highlightStyle: {
          item: {
            fill: colors.remote.hoverFill,
            stroke: colors.remote.hoverStroke,
            strokeWidth: undefined,
          },

          series: {
            dimOpacity: sharedProps.dimOpacity,
            strokeWidth: undefined
          }

        },
        tooltip: {
          enabled: true,
          renderer: ({ title, datum }) => {
            return ({
              title: datum.remote + ' remote ' + datum.position + ' positions',
              content: '',
              color: "hsl(0, 0%, 100%)",
              backgroundColor: "hsl(0, 0%, 10%)",
            })
          }
        },
        label: {
          color: "white",
          fontFamily: "Unbounded",
          fontSize: 9,
          placement: "outside",
          formatter: ({ value, datum }) => value.toFixed(0)
        },
        type: "bar",
        direction: "horizontal",
        xKey: "position",
        yKey: "remote",
        yName: "Remote",
      },
      {
        fill: colors.hybrid.main,
        fillOpacity: sharedProps.fillOpacity,
        stroke: colors.hybrid.main,
        strokeWidth: sharedProps.strokeWidth,
        highlightStyle: {
          item: {
            fill: colors.hybrid.hoverFill,
            stroke: colors.hybrid.hoverStroke,
            strokeWidth: undefined,
          },

          series: {
            dimOpacity: sharedProps.dimOpacity,
            strokeWidth: undefined
          }

        },
        tooltip: {
          enabled: true,
          renderer: ({ title, datum }) => {
            return ({
              title: datum.hybrid + ' hybrid ' + datum.position + ' positions',
              content: '',
              color: "hsl(0, 0%, 100%)",
              backgroundColor: "hsl(0, 0%, 10%)",
            })
          }
        },
        label: {
          color: "white",
          fontFamily: "Unbounded",
          fontSize: 9,
          placement: "outside",
          formatter: ({ value, datum }) => value.toFixed(0)
        },
        type: "bar",
        direction: "horizontal",
        xKey: "position",
        yKey: "hybrid",
        yName: "Hybrid",
      },
      {
        fill: colors.onSite.main,
        fillOpacity: sharedProps.fillOpacity,
        stroke: colors.onSite.main,
        strokeWidth: sharedProps.strokeWidth,
        highlightStyle: {
          item: {
            fill: colors.onSite.hoverFill,
            stroke: colors.onSite.hoverStroke,
            strokeWidth: undefined,
          },

          series: {
            dimOpacity: sharedProps.dimOpacity,
            strokeWidth: undefined
          }

        },
        tooltip: {
          enabled: true,
          renderer: ({ title, datum }) => {
            console.log(datum)
            return ({
              title: datum.onsite + ' onsite ' + datum.position + ' positions',
              content: '',
              color: "hsl(0, 0%, 100%)",
              backgroundColor: "hsl(0, 0%, 10%)",
            })
          }
        },
        label: {
          color: "white",
          fontFamily: "Unbounded",
          fontSize: 10,
          placement: "outside",
          formatter: ({ value, datum }) => value.toFixed(0)
        },
        type: "bar",
        direction: "horizontal",
        xKey: "position",
        yKey: "onsite",
        yName: "On Site",
      },
    ],
    axes: [
      {
        type: "number",
        position: "bottom",
        nice: true,
        label: {
          enabled: true,
          color: 'hotpink'
        },
        tick: {
          values: [0, 25, 50, 75, 100],
          enabled: true,
          minSpacing: 100
        }


      },
      {
        type: "category",
        position: "right",
        nice: true,
        label: {
          enabled: false,
          avoidCollisions: true,
          color: "hotpink",
        },
        gridLine: {
          style: [
            {
              stroke: "yellow",
              lineDash: [1, 5],
            },
          ]
        }
      },
    ],

  })
}