import React, { Suspense, lazy, useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataContext';
import Sidebar from '../../components/Sidebar/Sidebar'
import getData from '../../data/getData';
import { count } from '../../data/count';
import { builDataArray } from '../../data/buildDataArray';
import { Grid, Box } from '@radix-ui/themes'
import { MainContentHeader } from './Home.styles'
import { FlexAlignCenter } from '../../styles/utils/flexAlignCenter.styles';
import { Applied, PhoneScreens, Interviews } from '../../components/DataCard/DataCard';

const data01 = [];
const data02 = [];
function Home() {
  const [loading, setLoading] = useState(true)
  const BarChart = lazy(() => import("../../components/BarChart/BarChart"))
  const PieChart = lazy(() => import("../../components/PieChart/PieChart"))
  const {state, setData} = useContext(DataContext)
  const syncTest = async() => {
    if(!state){
      return
    }
    return setLoading(false)
  }
  const run = async () => {
    await syncTest()
    await getData(state, setData)
      .then((res) => {
        builDataArray(count(res, "company"), data01)
        builDataArray(count(res, "role"), data02)
      })
      .catch(e => {
        console.log(e)
        return e
      })
  }
  useEffect(() => {run()},[])
  if(!loading){
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
              <Box mt="4" size="4" style={{ gridColumn: "1/4", alignItems: "center", height: "90rem", maxHeight: '500', width: '90%', maxWidth: '500' }}>
                <BarChart />
              </Box>
            </Suspense>
            <Suspense fallback={<FlexAlignCenter style={{ gridColumn: "1/4", height: "50vh" }} justify="center">..loading...</FlexAlignCenter>}>
              <Box style={{ gridColumn: "1/4", height: '95%', maxHeight: '500', width: '90%', maxWidth: '500' }}>
                <PieChart />
              </Box>
            </Suspense>
          </Grid>
      </Grid>
      </>
    )
  }
  return(
    <div style={{background:'var(--color-white)', height:'100vh', width:'100%', display:'flex', justifyContent:'center', alignItems: 'center'}}>
      <h1 style={{color:'white', fontSize:'2rem'}}>wtf</h1>
    </div>
  )
}

export default Home