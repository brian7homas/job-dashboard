import styled from '@emotion/styled'
import { MaxWidth_1024 } from '../../styles/media-queries/large'
import { MaxWidth_414 } from '../../styles/media-queries/small'
export const NavbarContainer = styled.header`
  padding: var(--padding-navbar);
  background-color: var(--color-white);
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "logo search profile";
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px var(--color-white);
  ${MaxWidth_1024[1]} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 
    "logo profile profile"
    "search search search";
  };
`

export const NavbarSearch = styled.input`
  font-size: 1.1rem;
  padding: .25em 1.6rem;
  border-radius: 50px;
  width:100%;
  ${MaxWidth_1024[1]} {
    margin: 1.2em 0;
  }
`

export const NavbarForm = styled.form`
  width: 100%;
  ${MaxWidth_1024[1]} {
    display:flex;
    justify-content: center;
  }
  
`
export const NavbarMobileMenuButton = styled.button`
  display:none;
  ${MaxWidth_1024[1]} {
    height: 40px;
    width: 40px;
    border-radius: 10px;
    background: var(--color-white);
    display:block;
    margin: 1.2em 0;
    position:relative;
    cursor: pointer;
  }
`

export const NavbarButtonSVGs = styled.span`
  background: var(--color-dark);
  width: 1.5em;
  height: .15em;
  position: absolute;
  top: ${props => props.top};
  left: .6em;
  transition: 1s transform, opacity;
`

export const NavbarLogoText = styled.h1`
  font-size:1.6rem;
  transition: font-size .5s;
  ${MaxWidth_414[3]} {
    font-size: 1rem;
  }
`
export const NavbarDarkModeToggle = styled.div`
  cursor: pointer;
`