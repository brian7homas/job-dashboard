import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { MaxWidth_1024 } from '../../styles/media-queries/large'
import { MaxWidth_414 } from '../../styles/media-queries/small'
const config = 'logo search profile'
const top = 'logo profile profile'
const bottom = 'search search search'

export const NavbarStyles = {
  container: css({
    zIndex: '10',
    width:'100%',
    position:'fixed',
    padding: 'var(--padding-navbar)',
    backgroundColor: 'var(--color-white)',
    display:'grid',
    gridTemplateColumns: 'calc((10px + 24.4rem)/1.1) 1fr 1fr',
    gridTemplateAreas: `"${config}"`,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: 'solid .014px var(--color-dark)',
    [MaxWidth_1024[1]] : {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateAreas: 
      `"${top}"
      "${bottom}"
      `
    }
  }),
  icon: css({
    paddingRight:'1em',
  }),

  title: css({
    fontSize: '1.6rem',
    transition: 'font-size .5s',
    [MaxWidth_414[3]] : {
      fontSize: '1rem'
    }
  }),

  search:({
    fontSize: '1.6rem',
    padding: '.25em 1.6rem',
    borderRadius: '50px',
    width: '100%',
    [MaxWidth_1024[1]] : {
      margin: '1.2em 0'
    }
  }),

  form:({
    width: '100%',
    [MaxWidth_1024[1]]: {
      display:'flex',
      justifyContent:'center'
    }
  }),
  
  darkMode:({
    cursor: 'pointer'
  }),

  image: ({
    height:'30px',
    width: '30px',
    overflow:'hidden',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '9px',
  }),

  mobileMenu: ({
    display:'none',
    [MaxWidth_1024[1]]:{
      height: '40px',
      width: '40px', 
      borderRadius: '10px',
      background:'var(--color-white)',
      display:'block',
      margin:'1.2em 0',
      position: 'relative', 
      cursor: 'pointer'
    }
  })
}

export const NavbarButtonSVGs = styled.span`
  background: var(--color-dark);
  width: 1.5em;
  height: .15em;
  position: absolute;
  top: ${props => props.top};
  left: .6em;
  transition: 1s transform, opacity;
`