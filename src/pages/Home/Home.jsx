import React, { Suspense, lazy, useContext, useEffect } from "react"
import { DataContext } from "../../context/DataContext";
import Sidebar from "../../components/Sidebar/Sidebar"
import Overview from "../../components/Overview/Overview";
import getData from "../../data/getData";
import { count } from "../../data/count";
import { builDataArray } from "../../data/buildDataArray";
import {
  MainContainer, 
  MainContent, 
  MainContentHeader,
  MainContentOverView 
  } from "./Home.styles"

  const data01 = [];
  const data02 = [];
function Home() {
  const Chart = lazy(() => import('../../components/ChartPie/ChartPie'))
  const DataCard = lazy(() => import('../../components/DataCard/DataCard'))
  const {state, setData} = useContext(DataContext)
  useEffect(() => {
    let jobData = getData(state, setData)
    jobData.then((res) => {
        builDataArray(count(res, 'company'), data01)
        builDataArray(count(res, 'role'), data02)
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
          <Suspense fallback={<div>..loading...</div>}>
            <DataCard
              metric={appliedData.length}
              chartOptions={AppliedChartOptions(appliedData)}
              subData={((100 * appliedData.length) / state.length).toFixed(0)}
              title='Applied'
              icon={faBriefcase}
              sub='Location'
            />
          </Suspense>
          <Suspense fallback={<div styles="color:white;">..loading...</div>}>
            <DataCard
              metric={phoneData.length}
              chartOptions={PhoneScrensChartOptions(phoneData)}
              subData={((100 * phoneData.length) / state.length).toFixed(0)}
              title='Phone screens'
              icon={faPhone}
              sub='Date'
            />
          </Suspense>
          <Suspense fallback={<div>..loading...</div>}>
            <DataCard
              metric={interviewData.length}
              chartOptions={InterViewChartOptions(interviewData)}
              subData={((100 * interviewData.length) / state.length).toFixed(0)}
              title='Interviews'
              icon={faUser}
              sub='Date'
            />
          </Suspense>  
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