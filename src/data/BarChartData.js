export const BuildBarChartData = (res) => {
  let container = []
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
  })
  return container
}