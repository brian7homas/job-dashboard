import React from "react"
import SidebarButtons from "../SidebarButtons/SidebarButtons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faBriefcase, faPerson, faGear, faQuestion } from "@fortawesome/free-solid-svg-icons"
import {
  SidebarContainer,
  SidebarInnerContainer
  } from "./Sidebar.styles"
import { Text, Button, Flex } from '@radix-ui/themes'
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
              <Flex key={item.text}>
              <Button 
                size="3" 
                variant="outline" 
                highContrast>
                <FontAwesomeIcon icon={item.icon} /> 
                {item.text}
              </Button>
              </Flex>
            )
          })
        }
      </SidebarInnerContainer>
    </SidebarContainer>
  )
}

export default Sidebar