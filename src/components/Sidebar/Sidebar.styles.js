import { css } from '@emotion/react'
import { MaxWidth_1024 } from "../../styles/media-queries/large"
export const SidebarStyles = {
  container:css({
    padding:'4.5em 2.5em 19em 2em',
    borderRight: 'solid .014px var(--color-dark)',
    overflow:'hidden',
    [MaxWidth_1024[1]]:{
      display:'none'
    }
  }),
  innerContainer: css({
    position:'fixed',
    margin:'0 auto',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height:'100%',
    minHeight: '40rem',
    maxHeight: '40rem',
  }),
  item:css({
    listStyle:'none'
  }),
  button: css({
    cursor: 'pointer'
  })
}