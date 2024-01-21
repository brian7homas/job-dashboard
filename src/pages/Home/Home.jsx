import React, { useEffect } from "react"
import Sidebar from "../../components/Sidebar/Sidebar"
import {
  MainContainer, 
  MainContent, 
  MainContentHeader,
  MainContentOverView 
  } from "./Home.styles"
function Home() {
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
            <h1>Jobs tracked: 30</h1>
            <p>Jobs applied to: 12</p>
          </MainContentOverView>
        </MainContent>
    </MainContainer>
    </>
  )
}

export default Home