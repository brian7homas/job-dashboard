import React, { Suspense, lazy, useContext, useEffect } from "react"
import { DataContext } from "../../context/DataContext";
import Sidebar from "../../components/Sidebar/Sidebar"
import Overview from "../../components/Overview/Overview";
import {
  MainContainer, 
  MainContent, 
  MainContentHeader,
  MainContentOverView 
  } from "./Home.styles"

  const data01 = [];
  const data02 = [];
  async function data(state, setData) {
    let currentStorage = JSON.parse(localStorage.getItem('jobs'))
    if(currentStorage){
      console.log('local')
      const jobs = currentStorage
      setData({type: 'LOAD', payload: jobs})
      return jobs
    }else if(!currentStorage){
      console.log('fetch')
      const response = await fetch("/jobs.js")
      const jobs = await response.json();
      if(jobs){
        setData({type: 'LOAD', payload: jobs})
        localStorage.setItem('jobs', JSON.stringify(jobs))
      }
      return jobs
    }
  }

function Home() {
  const Chart = lazy(() => import('../../components/ChartPie/ChartPie'))
  const {state, setData} = useContext(DataContext)
  useEffect(() => {
    let jobData = data(state, setData)
    jobData
      .then((res) => {
        const countBy = (arr, prop, key) => arr.reduce((prev, curr) => ((prev[curr[prop]] = ++prev[curr[prop]] || 1), prev), {})
        for (const [key, value] of Object.entries(countBy(res, 'company'))) data01.push({ 'name': key, 'value': value })
        for (const [key, value] of Object.entries(countBy(res, 'role'))) data02.push({ 'role': key, 'value': value })
      })
  },[])
  return (
    <>
      <MainContainer>
        <Sidebar />
        <MainContent>
          {/* FIRST GRID ROW */}
          <MainContentHeader>
            <h1>Overview</h1>
            <p>Hello Brian, welcome back</p>
          </MainContentHeader>
          {/* SECOND GRID ROW */}
          <MainContentOverView>
            <Overview />
          </MainContentOverView>
          <Suspense fallback={<div>..loading...</div>}>
            <Chart data01={data01} data02={data02}/>
          </Suspense>
          {/* THIRD GRID ROW */}
        </MainContent>
    </MainContainer>
    </>
  )
}

export default Home