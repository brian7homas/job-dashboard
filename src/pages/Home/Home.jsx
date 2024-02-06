import React, { Suspense, lazy, useContext, useEffect } from 'react'
import { DataContext } from '../../context/DataContext';
import Sidebar from '../../components/Sidebar/Sidebar'
import { PhoneScreensDataLogic } from '../../data/phoneScreensDataLogic';
import { AppliedDataLogic } from '../../data/appliedDataLogic';
import { InterviewDataLogic } from '../../data/interviewDataLogic';
import { faBriefcase, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import getData from '../../data/getData';
import { count } from '../../data/count';
import { builDataArray } from '../../data/buildDataArray';
import { PhoneScrensChartOptions } from '../../chartOptions/PhoneScreensChartOptions'
import { AppliedChartOptions } from '../../chartOptions/AppliedChartOptions';
import { InterViewChartOptions } from '../../chartOptions/InterviewChartOptions';
import { Grid } from '@radix-ui/themes'
import { MainContentHeader } from './Home.styles'
import { FlexAlignCenter } from '../../styles/utils/flexAlignCenter.styles';
const data01 = [];
const data02 = [];
function Home() {
  const Chart = lazy(() => import("../../components/ChartPie/ChartPie"))
  const DataCard = lazy(() => import("../../components/DataCard/DataCard"))
  const {state, setData} = useContext(DataContext)
  const appliedData = AppliedDataLogic(state)
  const phoneData = PhoneScreensDataLogic(state)
  const interviewData = InterviewDataLogic(state)
  useEffect(() => {
    let jobData = getData(state, setData)
    jobData.then((res) => {
        builDataArray(count(res, "company"), data01)
        builDataArray(count(res, "role"), data02)
      })
  },[])
  return (
    <>
      <Grid 
        height="100%" 
        columns="calc((10px + 24.4rem)/1.1) 2fr"
        position="relative">
        <Sidebar />
        <Grid
          columns="1fr 1fr 1fr" 
          gapX="3"
          rows=".2fr .15fr 1fr 1fr"
          align="center"
          justify="center"
          px="3"
          pt="7">
          {/* FIRST GRID ROW */}
          <MainContentHeader>
            <h1>Overview</h1>
            <p>Hello Brian, welcome back</p>
          </MainContentHeader>
          {/* SECOND GRID ROW */}
          {/* //TODO - Buld/import separate component for loading */}
          <Suspense fallback={<FlexAlignCenter style={{gridColumn:"1/4"}} justify="center">..loading...</FlexAlignCenter>}>
            <DataCard
              metric={appliedData.appliedLocations.length}
              chartOptions={AppliedChartOptions(appliedData.appliedLocations)}
              average={((100 * appliedData.appliedLocations.length) / state.length).toFixed(0)}
              title="Applied"
              icon={faBriefcase}
              sub="Location most applied to:"
              subData={appliedData.mostFrequent}
            />
            <DataCard
              metric={phoneData.phoneScreenDates.length}
              chartOptions={PhoneScrensChartOptions(phoneData.phoneScreenDates)}
              average={((100 * phoneData.phoneScreenDates.length) / state.length).toFixed(0)}
              title="Phone screens"
              icon={faPhone}
              sub="Next phone screen"
              subData={phoneData.mostRecentDate}
            />
            <DataCard
              metric={interviewData.interviewDates.length}
              chartOptions={InterViewChartOptions(interviewData.interviewDates)}
              average={((100 * interviewData.interviewDates.length) / state.length).toFixed(0)}
              title="Interviews"
              icon={faUser}
              sub="Next interview"
              subData={interviewData.mostRecentInterviewDate}
            />
          </Suspense>  
          {/* <Suspense fallback={<div>..loading...</div>}>
            <Chart data01={data01} data02={data02}/>
          </Suspense> */}
          {/* THIRD GRID ROW */}
        </Grid>
    </Grid>
    </>
  )
}

export default Home