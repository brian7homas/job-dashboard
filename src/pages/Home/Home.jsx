import React, { useEffect } from "react"
import Sidebar from "../../components/Sidebar/Sidebar"
import { MainContainer } from "./Home.styles"
function Home() {
  return (
    <>
    <MainContainer>
      <Sidebar/>
      <div>
        <p>main</p>
      </div>
    </MainContainer>
    </>
  )
}

export default Home