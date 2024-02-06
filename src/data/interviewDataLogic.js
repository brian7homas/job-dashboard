import { count } from "./count"
function findMostFrequentDate(obj) {
  let prevValue = 0
  for (const [key, value] of Object.entries(count(obj, "interviewFormattedDate"))) {
    if(new Date(value) > prevValue){
      prevValue = value
      return key
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
    mostRecentInterviewDate: findMostFrequentDate(InterviewDates),
    interviewDates: InterviewDates
  })
}
