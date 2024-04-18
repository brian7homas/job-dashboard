import getData from '../data/GetData';
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
/**
 * 
 * @returns Sorted job data for bar chart
 */
export const BarChartOptions = () => {
  let container = []
  /**
   * 
   * @param {Array} res - Array of job data
   */
  const BuildBarChartData = (res) => {
    let filteredRemote = new Array
    let filteredRemoteRole = new Array
    let remoteCounter = 0
    let remoteRoleCounter = 0
    let filteredHybrid = new Array
    let filteredHybridRole = new Array
    let hybridCounter = 0
    let hybridRoleCounter = 0
    let filteredOnSite = new Array
    let filteredOnSiteRole = new Array
    let onSiteCounter = 0
    let onSiteRoleCounter = 0
    let remoteCompaniesResult = {}
    let hybridCompaniesResult = {}
    let onSiteCompaniesResult = {}
    res.forEach((el) => {
      let rolePresent = el.role.charAt(0).toUpperCase() + el.role.slice(1)
      let role = el.role.split(" ").join("-").toLowerCase().trim()
      let company = el.company.toLowerCase().trim()
      let location = el.location.split(" ").join("").toLowerCase().trim()
      //? NOTE - SORTING BY LOCATION BECAUSE EACH JOB CAN BE BROKEN DOWN INTO 1 OF 3 CATEGORIES
      // ? 1) Remote 2) On site 3) Hybrid - default will place job into On site container
      switch (location) {
        case 'onsite':
          if (!filteredOnSite.includes(company)) {
            onSiteCounter = 0
            filteredOnSite.push({ company: company, role: role })
          }
          if (!filteredOnSiteRole.includes(role)) {
            onSiteRoleCounter = 0
            filteredOnSiteRole.push(role)
          }
          if (filteredOnSiteRole.includes(role)) {
            let newCount = filteredOnSite.filter(el => el.role === role).length
            onSiteRoleCounter++
            let test = container.find(({ position }) => position === rolePresent)
            if (onSiteRoleCounter > 1 || test) {
              let setCount = container.find(({ position }) => position === rolePresent)
              if (!setCount.remote) setCount.remote = 0
              if (!setCount.hybrid) setCount.hybrid = 0

              if (!setCount.companyArr.includes(company)) {
                setCount.companyArr.push({ company: company, role: role })
                setCount.company = setCount.companyArr.length
              }
              return setCount.onsite = newCount
            }
            let obj = onSiteCompaniesResult[role] = {
              position: rolePresent,
              company: filteredOnSite.filter(el => el.role === role).length,
              companyArr: filteredOnSite.filter(el => el.role === role),
              onsite: onSiteRoleCounter,
            }
            if (!obj.remote) obj.remote = 0
            if (!obj.hybrid) obj.hybrid = 0
            container.push(obj)
            return container
          }
          break

        case 'hybrid':
          if (!filteredHybrid.includes(company)) {
            hybridCounter = 0
            filteredHybrid.push({ company: company, role: role })
          }
          if (!filteredHybridRole.includes(role)) {
            hybridRoleCounter = 0
            filteredHybridRole.push(role)
          }


          if (filteredHybridRole.includes(role)) {
            let newCount = filteredHybrid.filter(el => el.role === role).length
            hybridRoleCounter++
            let test = container.find(({ position }) => position === rolePresent)
            if (hybridCompaniesResult > 1 || test) {
              let setCount = container.find(({ position }) => position === rolePresent)
              if (!setCount.onsite) setCount.onsite = 0
              if (!setCount.remote) setCount.remote = 0
              if (!setCount.companyArr.includes(company)) {
                setCount.companyArr.push({ company: company, role: role })
                setCount.company = setCount.companyArr.length
              }
              return setCount.hybrid = newCount
            }
            let obj = hybridCompaniesResult[role] = {
              position: rolePresent,
              company: filteredHybrid.filter(el => el.role === role).length,
              companyArr: filteredHybrid.filter(el => el.role === role),
              hybrid: hybridRoleCounter,
            }
            if (!obj.onsite) obj.onsite = 0
            if (!obj.remote) obj.remote = 0
            container.push(obj)
            return container
          }
          break

        case 'remote':
          if (!filteredRemote.includes(company)) {
            remoteCounter = 0
            filteredRemote.push({ company: company, role: role })
          }
          if (!filteredRemoteRole.includes(role)) {
            remoteRoleCounter = 0
            filteredRemoteRole.push(role)
          }

          if (filteredRemoteRole.includes(role)) {
            let newCount = filteredRemote.filter(el => el.role === role).length
            remoteRoleCounter++
            let test = container.find(({ position }) => position === rolePresent)
            if (remoteCompaniesResult > 1 || test) {

              let setCount = container.find(({ position }) => position === rolePresent)
              if (!setCount.onsite) setCount.onsite = 0
              if (!setCount.hybrid) setCount.hybrid = 0


              if (!setCount.companyArr.includes(company)) {
                setCount.companyArr.push({ company: company, role: role })
                setCount.company = setCount.companyArr.length
              }
              return setCount.remote = newCount
            }
            let obj = remoteCompaniesResult[role] = {
              position: rolePresent,
              company: filteredRemote.filter(el => el.role === role).length,
              companyArr: filteredRemote.filter(el => el.role === role),
              remote: remoteRoleCounter,
            }
            if (!obj.onsite) obj.onsite = 0
            if (!obj.hybrid) obj.hybrid = 0
            container.push(obj)
            return container
          }
          break

        default:
          if (!filteredOnSite.includes(company)) {
            onSiteCounter = 0
            filteredOnSite.push({ company: company, role: role })
          }
          if (!filteredOnSiteRole.includes(role)) {
            onSiteRoleCounter = 0
            filteredOnSiteRole.push(role)
          }
          if (filteredOnSiteRole.includes(role)) {
            let newCount = filteredOnSite.filter(el => el.role === role).length
            onSiteRoleCounter++
            let test = container.find(({ position }) => position === rolePresent)
            if (onSiteRoleCounter > 1 || test) {
              let setCount = container.find(({ position }) => position === rolePresent)
              if (!setCount.remote) setCount.remote = 0
              if (!setCount.hybrid) setCount.hybrid = 0

              if (!setCount.companyArr.includes(company)) {
                setCount.companyArr.push({ company: company, role: role })
                setCount.company = setCount.companyArr.length
              }
              return setCount.onsite = newCount
            }
            let obj = onSiteCompaniesResult[role] = {
              position: rolePresent,
              company: filteredOnSite.filter(el => el.role === role).length,
              companyArr: filteredOnSite.filter(el => el.role === role),
              onsite: onSiteRoleCounter,
            }
            if (!obj.remote) obj.remote = 0
            if (!obj.hybrid) obj.hybrid = 0
            container.push(obj)
            return container
          }
          break
      }
      return container
    })
  }
  //* Fetch call/returned promise
  let data = getData()
  data.then((resolve) => (BuildBarChartData(resolve)))

  //* Returning the barchart options with the container of sorted job data
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