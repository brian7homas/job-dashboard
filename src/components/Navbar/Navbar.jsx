/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useContext, useEffect } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faEllipsisVertical, faBox, faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FlexAlignCenter } from "../../styles/utils/flexAlignCenter.styles"
import {
  NavbarStyles,
  NavbarButtonSVGs,
  } from "./Navbar.styles"
import { Box, Button } from "@radix-ui/themes"
import * as Menubar from '@radix-ui/react-menubar';
import * as Form from '@radix-ui/react-form';
import Profile from "../../assets/profile.jpg"

function Navbar() {
  const { state, setTheme } = useContext(ThemeContext)
  const menuHandler = () => {
    let button = document.querySelector('.mobile-button')
    let top = document.querySelector('.mobile-button-top')
    let mid = document.querySelector('.mobile-button-mid')
    let bottom = document.querySelector('.mobile-button-bottom')
    if(button.classList.contains('mobile-menu-active')){
      top.style.transform = "rotate(0deg) translateY(0px) translateX(0px)"
      mid.style.opacity = 1
      bottom.style.transform = "rotate(0deg) translateY(0px) translateX(0px)"
      button.classList.remove('mobile-menu-active')
      return 
    }else{
      top.style.transform = "rotate(-50deg) translateY(5px) translateX(-5px)"
      mid.style.opacity = 0
      bottom.style.transform = "rotate(50deg) translateY(-7px) translateX(-5.5px)"
      button.classList.add('mobile-menu-active')
    }
    
  }
  const darkModeToggleHandler = (theme) => {
    if(state.theme === 'light'){
      return setTheme({
        type: 'DARK',
        payload: { theme: 'dark' }
      })
    }
    return setTheme({
      type: 'LIGHT',
      payload: { theme: 'light' }
    })
  }
  useEffect(() => {
    if(localStorage.getItem('dashboard-theme') === 'dark'){
      setTheme({
        type: 'DARK',
        payload: { theme: 'dark' }
      })
    }
  },[])
  return (
    <Menubar.Root css={NavbarStyles.container}>
      <Menubar.Menu>
        <FlexAlignCenter
          justify="start"
          gridArea="logo">
          <FontAwesomeIcon icon={faBox} css={NavbarStyles.icon}></FontAwesomeIcon>
          <h1 css={NavbarStyles.title}>Jobs</h1>
        </FlexAlignCenter>
      </Menubar.Menu>
      <Menubar.Menu>
        <FlexAlignCenter
          justify="start"
          gridArea="search">
          <Form.Root css={NavbarStyles.form} action="#" method="get">
            <Form.FormField>
              <Form.Control asChild>
                <input css={NavbarStyles.search} type="text" placeholder="Search" title="search" />
              </Form.Control>
            </Form.FormField>
          </Form.Root>
        </FlexAlignCenter>
      </Menubar.Menu>
      <Menubar.Menu>
        <FlexAlignCenter
          justify="space-between"
          gridArea="profile"
          padding="9em">
          <Box css={NavbarStyles.darkMode} onClick={() => darkModeToggleHandler()}>
            {state.theme !== 'light' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
          </Box>
          <Box>
            <FontAwesomeIcon icon={faBell} />
          </Box>
          <Box>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </Box>
          <Box css={NavbarStyles.image} style={{ backgroundImage: `url(${Profile})` }} />
          <Button css={NavbarStyles.mobileMenu} className="mobile-button" onClick={(e) => menuHandler(e)}>
            <NavbarButtonSVGs top=".7em" className="mobile-button-top" />
            <NavbarButtonSVGs top="1.3em" className="mobile-button-mid" />
            <NavbarButtonSVGs top="1.9em" className="mobile-button-bottom" />
          </Button>
        </FlexAlignCenter>
      </Menubar.Menu>
    </Menubar.Root>
  )
}

export default Navbar