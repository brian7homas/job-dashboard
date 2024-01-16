import React, { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faEllipsisVertical, faBox, faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FlexAlignCenter } from "../../styles/utils/flexAlignCenter.styles"
import { css } from "@emotion/react"
import {
  NavbarContainer,
  NavbarSearch,
  NavbarForm,
  NavbarMobileMenuButton,
  NavbarButtonSVGs,
  NavbarLogoText,
  NavbarDarkModeToggle,
  ProfileImageContainer,
  ProfileImage
  } from "./Navbar.styles"
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
      console.log('set to: ' + localStorage.getItem('dashboard-theme'))
      setTheme({
        type: 'DARK',
        payload: { theme: 'dark' }
      })
    }
  },[])
  return (
    <>
      <NavbarContainer>
        <FlexAlignCenter justify="start" gridArea="logo">
          <FontAwesomeIcon icon={faBox} css={css`padding-right: 1em`} />
          <NavbarLogoText>Jobs</NavbarLogoText>
        </FlexAlignCenter>

        <FlexAlignCenter
          justify="start"
          gridArea="search"
        // css={css`width: auto;@media (max-width: 768px) {width: 100vw;}`}
        >
          <NavbarForm action="#" method="get">
            <NavbarSearch type="text" placeholder="Search" />
          </NavbarForm>
        </FlexAlignCenter>

        <FlexAlignCenter
          justify="space-between"
          gridArea="profile"
          padding="9em"
        >
          <NavbarDarkModeToggle onClick={() => darkModeToggleHandler()}>
            {
              state.theme !== 'light' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />
            }
          </NavbarDarkModeToggle>
          <div>
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
          <ProfileImageContainer style={{backgroundImage: `url(${Profile})`}}/>
          <NavbarMobileMenuButton className="mobile-button" onClick={(e) => menuHandler(e)}>
            <NavbarButtonSVGs top=".7em" className="mobile-button-top" />
            <NavbarButtonSVGs top="1.3em" className="mobile-button-mid" />
            <NavbarButtonSVGs top="1.9em" className="mobile-button-bottom" />
          </NavbarMobileMenuButton>
        </FlexAlignCenter>

      </NavbarContainer>
    </>
  )
}

export default Navbar