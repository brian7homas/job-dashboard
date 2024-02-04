/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faBriefcase, faPerson, faGear, faQuestion } from "@fortawesome/free-solid-svg-icons"
import {
  SidebarStyles
  } from "./Sidebar.styles"
import { Button, Flex } from '@radix-ui/themes'
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
const sidebar = [
  {text:'Home', icon: faHome},
  {text: 'My Jobs', icon: faBriefcase},
  {text: 'Profile', icon: faPerson},
  {text: 'Settings', icon: faGear},
  {text: 'Help Center', icon: faQuestion}
]
function Sidebar() {
  return (
    <NavigationMenu.Root css={SidebarStyles.container}>
      <NavigationMenu.List css={SidebarStyles.innerContainer}>
        {
          sidebar.map((item) => {
            return (
              <NavigationMenu.Item css={SidebarStyles.item}>
                <Flex key={item.text}>
                  <Button
                    css={SidebarStyles.button}
                    size="3"
                    variant="soft"
                    highContrast>
                    <FontAwesomeIcon icon={item.icon} />
                    {item.text}
                  </Button>
                </Flex>
              </NavigationMenu.Item>
            )
          })
        }
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

export default Sidebar