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
  
  return phoneScreenDates
}