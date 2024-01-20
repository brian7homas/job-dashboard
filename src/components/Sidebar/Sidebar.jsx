import React from "react"
import SidebarButtons from "../SidebarButtons/SidebarButtons"
import { faHome, faBriefcase, faPerson, faGear, faQuestion } from "@fortawesome/free-solid-svg-icons"
import {
  SidebarContainer,
  SidebarInnerContainer
  } from "./Sidebar.styles"
const sidebar = [
  {text:'Home', icon: faHome},
  {text: 'My Jobs', icon: faBriefcase},
  {text: 'Profile', icon: faPerson},
  {text: 'Settings', icon: faGear},
  {text: 'Help Center', icon: faQuestion}
]
function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarInnerContainer>
        {
          sidebar.map((item) => {
            return (
              <SidebarButtons text={item.text} icon={item.icon} />
            )
          })
        }
      </SidebarInnerContainer>
    </SidebarContainer>
  )
}

export default Sidebar