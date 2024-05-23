let placeholderArr = []
let resultArr = []
let counter = 0
export const PieChartData = (res) => {
  res.map(el => {
    let companyPresent = el.company.charAt(0).toUpperCase() + el.company.slice(1)
    let company = el.company.split(" ").join("-").toLowerCase().trim()
    if (company && !placeholderArr.includes(company)) {
      counter = 0
      placeholderArr.push(company)
    }

    if (placeholderArr.includes(company)) {
      counter++
      let test = resultArr.find(el => el.company === companyPresent)
      if (test) {
        return test.count = counter
      }
      return resultArr.push({ company: companyPresent, count: counter })
    }

  })
  let currentStorage = JSON.parse(localStorage.getItem('jobs'))
  return resultArr
}