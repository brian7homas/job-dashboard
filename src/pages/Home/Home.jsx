import React, { Suspense, lazy, useContext, useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Grid, Flex, Box } from '@radix-ui/themes'
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
          style={{maxWidth: '100%', width:'100%', background:'var(--color-main-bg)'}}
          columns="1fr 1fr 1fr" 
          gapX="3"
          gapY="7"
          rows=".2fr .15fr 1fr 1fr"
          align="center"
          // justify="center"
          px="3"
          pt="7"
          >
          {/* FIRST GRID ROW */}
          <MainContentHeader>
            <h1>Overview</h1>
            <p>Hello Brian, welcome back</p>
          </MainContentHeader>
          {/* SECOND GRID ROW */}
          {/* //TODO - Buld/import separate component for loading */}
          <Box 
            width={'100%'} 
            display={'block'}
            style={{width:'100%'}}
            >
            <Flex 
              gap={"5"} 
              justify={'between'} 
              style={{width:'75vw', padding:'0 4rem'}}
              wrap={'wrap'}
              >
              <Suspense fallback={<FlexAlignCenter style={{ gridColumn: "1/4", height:"50vh"}} justify="center">..loading...</FlexAlignCenter>}>
                <Box width={"300px"}>
                  <Applied />
                </Box>
                <Box width={"300px"}>
                  <PhoneScreens /> 
                </Box>
                <Box width={"300px"}>
                  <Interviews />
                </Box>
              </Suspense>
            </Flex>
          </Box>
          
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