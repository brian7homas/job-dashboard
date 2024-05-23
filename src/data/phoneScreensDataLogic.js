function findMostRecentDate(obj) {
  let currentDateString = new Date().toLocaleDateString()
  let currentDate = new Date(currentDateString).getTime()
  for (const [key, value] of Object.entries(obj)) {
    let jobDateString = new Date(value.phoneScreenFormattedDate).toLocaleDateString()
    let jobDate = new Date(jobDateString).getTime()
    if(jobDate > currentDate){
      return new Date(value.phoneScreenFormattedDate).toLocaleDateString()
    }
    else if(jobDate < currentDate){}
    else{
      let date = new Date(value.phoneScreenDate)
      let formatter = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric', 
        minute: '2-digit', 
        })
      let formattedTime = formatter.format(date)
      return 'Today at ' + formattedTime
    }
  } 
}
export const PhoneScreensDataLogic = (state) => {
  const phoneScreenDates = []
  let phoneScreenCounter = 0
  let placeholder
  const phoneScreensFilter = state.filter((el) => {
    if (el.stage.phoneScreen) return el
  })
  
  for (const [key, value] of Object.entries(phoneScreensFilter)){
    if(placeholder !== value.stage.phoneScreen){
      phoneScreenCounter = 0
      placeholder = value.stage.phoneScreen
    }
    phoneScreenCounter++
    if(value.stage.phoneScreen){
      let dateValue = new Date(value.stage.phoneScreen)
      let day = dateValue.getUTCDate()
      let month = dateValue.getUTCMonth() + 1
      let year = dateValue.getUTCFullYear()
      phoneScreenDates.push({
        phoneScreens:phoneScreenCounter,
        phoneScreenDate: dateValue,
        phoneScreenFormattedDate: month + '/' + day + '/' + year,
        companyName: value.company 
        })
    }
  }
  
  return({
    mostRecentDate: findMostRecentDate(phoneScreenDates),
    phoneScreenDates: phoneScreenDates
  }) 
}