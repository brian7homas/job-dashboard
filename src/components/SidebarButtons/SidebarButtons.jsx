import React from "react"
import { SidebarButton, SidebarIconContainer } from "./SidebarButtons.styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function SidebarButtons({text, icon}) {
  return (
    <SidebarButton>
      <SidebarIconContainer>
        <FontAwesomeIcon icon={icon} />
      </SidebarIconContainer>
      {text}
    </SidebarButton>
  )
}

export default SidebarButtons