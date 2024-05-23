// TODO: FIX CONSOLE ERROR 
//! - Warning: Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. 
//! - You can only call hooks at the top level of your React function.
// ? - Will have to set context state outside of any chart components/options component
/**
  //* 
 */
import React, { Suspense, lazy, useContext, useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Grid } from '@radix-ui/themes'
import { MainContentHeader } from './Home.styles'
import { FlexAlignCenter } from '../../styles/utils/flexAlignCenter.styles';
import { Applied, PhoneScreens, Interviews } from '../../components/DataCard/DataCard';
import GetData from '../../data/GetData';
import { DataContext } from '../../context/DataContext';

function Home() {
  const BarChart = lazy(() => import("../../components/BarChart/BarChart"))
  const PieChart = lazy(() => import("../../components/PieChart/PieChart"))
  const { state, setData } = useContext(DataContext)
  const data = GetData()
  useEffect(() => {
    data.then(response => {
      setData({ type: 'LOAD', payload: response})
      localStorage.setItem('jobs', JSON.stringify(response))
    })
  },[])
  if(state.length < 1) return(
    <>
      Loading
    </>
  )
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
          gapY="7"
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
          <Suspense fallback={<FlexAlignCenter style={{ gridColumn: "1/4", height:"50vh"}} justify="center">..loading...</FlexAlignCenter>}>
            <Applied />
            <PhoneScreens /> 
            <Interviews />
          </Suspense>
          <Suspense fallback={<FlexAlignCenter style={{ gridColumn: "1/4", height: "50vh" }} justify="center">..loading...</FlexAlignCenter>}>
            <BarChart/>
          </Suspense>
          <Suspense fallback={<FlexAlignCenter style={{ gridColumn: "1/4", height: "50vh" }} justify="center">..loading...</FlexAlignCenter>}>
            <PieChart />
          </Suspense>
        </Grid>
    </Grid>
    </>
  )

}

export default Home