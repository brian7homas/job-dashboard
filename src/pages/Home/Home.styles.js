import styled from '@emotion/styled'
import { MaxWidth_1024 } from '../../styles/media-queries/large'
export const MainContainer = styled.main`
  height:100%;
  position:relative;
  top:2.9em;
  background-color: var(--color-white);
  color: var(--color-dark);
  display:grid;
  grid-template-columns: calc((10px + 24.4rem)/1.1) 2fr;
  ${MaxWidth_1024[1]} {
    grid-template-columns: 1fr;
    top:8.5em;
  }
`
export const MainContent = styled.div`
  display:grid;
  place-items: center center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: .2fr 1fr 1fr 1fr;
  background-color:var(--color-white);
  overflow-y: scroll;
  height:200vh;
`
export const MainContentHeader = styled.div`
  grid-row-start: 1;
  grid-column: 1/3;
  justify-self: flex-start;
  padding:1em 2.5em;
`

export const MainContentOverView = styled.div`
  align-self: center;
  padding: 4em 2.5em;
  background-color: var(--color-primary);
  border-radius: 9px;
  margin:.8em;
`