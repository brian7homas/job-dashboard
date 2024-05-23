const url = "/jobs.js"

const request = new Request(url)
async function GetData() {
  try {
    const response = await fetch(request)
    const jobs = await response.json()
    if(response.status === 200){
      return jobs
    }else{
      console.log('server error', jobs)
    }
    return jobs
  }catch(e){
    console.log(e)
  }
}

export default GetData