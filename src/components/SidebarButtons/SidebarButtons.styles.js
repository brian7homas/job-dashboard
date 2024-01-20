import styled from "@emotion/styled"

export const SidebarButton = styled.div`
  padding:.75em .45em 0.75em .45em;
  border-radius:9px;
  background:none;
  border: .4px solid var(--color-dark);
  cursor:pointer;
  transition: .45s background;
  color:var(--color-dark);
  display:flex;
  align-items: center;
  justify-content: flex-start;
  max-width:15.2rem;
  font-weight: 300;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover{
    color: var(--color-white);
    background: var(--color-link-hover);
  }
`
export const SidebarIconContainer = styled.span`
  margin-right: .5em;
  
`