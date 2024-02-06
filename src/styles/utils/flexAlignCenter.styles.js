import styled from '@emotion/styled'
import { calc } from './calc'

export const FlexAlignCenter  = styled.div(props => ({
  display: "flex",
  alignItems: "center",
  justifyContent: props.justify ? props.justify : 'end',
  gridArea: !props.gridArea ? '' : props.gridArea,
  paddingLeft:!calc(props.padding) ? 'auto' : calc(props.padding),
}))