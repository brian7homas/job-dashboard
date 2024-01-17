import React from "react"
function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarInnerContainer>
        <SidebarButton>
          <SidebarIconContainer>
            <FontAwesomeIcon icon={faHome} />
          </SidebarIconContainer>
          Home
        </SidebarButton>
        
        <SidebarButton>
          <SidebarIconContainer>
            <FontAwesomeIcon icon={faHome} />
          </SidebarIconContainer>
          My Jobs
        </SidebarButton>
        
        <SidebarButton>
          <SidebarIconContainer>
            <FontAwesomeIcon icon={faHome} />
          </SidebarIconContainer>
          Profile
        </SidebarButton>
        
        <SidebarButton>
          <SidebarIconContainer>
            <FontAwesomeIcon icon={faHome} />
          </SidebarIconContainer>
          Settings
        </SidebarButton>
        
        <SidebarButton>
          <SidebarIconContainer>
            <FontAwesomeIcon icon={faHome} />
          </SidebarIconContainer>
          Help Center
        </SidebarButton>
        
      </SidebarInnerContainer>
    </SidebarContainer>
  )
}

export default Sidebar