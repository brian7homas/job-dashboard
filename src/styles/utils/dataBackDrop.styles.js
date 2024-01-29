import styled from '@emotion/styled'
import { calc } from './calc'

export const DataBackDrop  = styled.div(props => ({
  borderRadius:'9px',
  backgroundColor: props.color !== 'red'? 'rgba(97, 230, 30, 0.7)' : 'rgba(230, 57, 30, .7)',
  display:'flex',
  justifyContent:'center',
  padding:'.09em .5em',
  alignItems:'center',
  width:'max-content'
}))