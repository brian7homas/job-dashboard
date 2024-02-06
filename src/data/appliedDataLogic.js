import { count } from "./count"
/**
 * 
 * @param {DataContext} state 
 * @param {Filter} seperateFilter 
 * @returns 
 */
 
 function findMostFrequentEntry(obj){
  let prevValue = 0
  let arr = count(obj, 'appliedLocation')
  for (const [key, value] of Object.entries(arr)) {
    if(value > prevValue){
      prevValue = value
      return key
    }
  }
 }
export const AppliedDataLogic = (state) => {
  let appliedLocations = []
  let appliedCounter = 0
  let placeholder
  const appliedFilter = state.map((el) => {
    if (el.stage.applied !== null) return ({
      ...el, 
      company: el.company.toLowerCase().trim()
      })
  })
  
  for (const [key, value] of Object.entries(appliedFilter.filter(Boolean))) {
    if(placeholder !== value.stage.applied){
      appliedCounter = 0
      placeholder = value.stage.applied
    }
    appliedCounter++
    if(value.stage.applied){
      let dateValue = new Date(value.stage.applied)
      let options = { year: 'numeric', month: 'short', day: 'numeric' };
      let formattedDate = new Intl.DateTimeFormat('en-US', options).format(dateValue);
      appliedLocations.push({
        appliedCount: appliedCounter,
        appliedDate: formattedDate,
        company: value.company,
        appliedLocation: value.location
      })
    }
  }
  return({
    mostFrequent: findMostFrequentEntry(appliedLocations),
    appliedLocations: appliedLocations
  })
}