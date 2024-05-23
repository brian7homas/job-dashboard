function findMostRecentInterview(obj) {
  let currentDateString = new Date().toLocaleDateString()
  let currentDate = new Date(currentDateString).getTime()
  for (const [key, value] of Object.entries(obj)) {
    let jobDateString = new Date(value.interviewFormattedDate).toLocaleDateString()
    let jobDate = new Date(jobDateString).getTime()
    if(jobDate > currentDate){
      return new Date(value.interviewFormattedDate).toLocaleDateString()
    }
    else if(jobDate < currentDate){}
    else{
      let date = new Date(value.interviewDate)
      let formatter = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric', 
        minute: '2-digit', 
        })
      let formattedTime = formatter.format(date)
      return 'Today at ' + formattedTime
    }
  } 
}
export const InterviewDataLogic = (state) => {
  const InterviewDates = []
  let interviewCounter = 0
  let placeholder
  const interviewFilter = state.filter((el) => {
    if (el.stage.faceToface) return el
  })
  for (const [key, value] of Object.entries(interviewFilter)){
    if(placeholder !== value.stage.faceToface){
      interviewCounter = 0
      placeholder = value.stage.faceToface
    }
    if(value.stage.faceToface){
      interviewCounter++
      let dateValue = new Date(value.stage.faceToface)
      let day = dateValue.getUTCDate()
      let month = dateValue.getUTCMonth() + 1
      let year = dateValue.getUTCFullYear()
      InterviewDates.push({
        interviewDate: dateValue,
        interviewFormattedDate: month + '/' + day + '/' + year,
        interviews: interviewCounter,
        company: value.company
      })
    }
  }
  return({
    mostRecentInterviewDate: findMostRecentInterview(InterviewDates),
    interviewDates: InterviewDates
  })
}
