import styled from "@emotion/styled"
import { MaxWidth_1024 } from "../../styles/media-queries/large"
export const SidebarContainer = styled.div`
  padding:4.5em 2.5em 19em 2em;
  border-right: solid .014px var(--color-dark);
  overflow:hidden;
  ${MaxWidth_1024[1]} {
    display:none;
  }
`
export const SidebarInnerContainer = styled.div`
  position:fixed;
  margin:0 auto;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  height:100%;
  min-height: 40rem;
  max-height: 40rem;
`