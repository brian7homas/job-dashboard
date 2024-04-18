import React, { useEffect, useContext } from "react"
import { DataContext } from "../context/DataContext"
const url = "/jobs.js"
const request = new Request(url)
async function GetData() {
  const { setData } = useContext(DataContext)
  try {
    const response = await fetch(request)
    const jobs = await response.json()
    if(response.status === 200){
      setData({type: 'LOAD', payload: jobs})
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