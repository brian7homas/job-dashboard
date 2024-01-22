async function getData(state, setData) {
  let currentStorage = JSON.parse(localStorage.getItem('jobs'))
  if(isEqual(currentStorage, state)){
    const jobs = currentStorage
    setData({type: 'LOAD', payload: jobs})
    return jobs
  }else{
    const response = await fetch("/jobs.js")
    const jobs = await response.json();
    if(jobs){
      setData({type: 'LOAD', payload: jobs})
      localStorage.setItem('jobs', JSON.stringify(jobs))
    }
    return jobs
  }
}

export default getData