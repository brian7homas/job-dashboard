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