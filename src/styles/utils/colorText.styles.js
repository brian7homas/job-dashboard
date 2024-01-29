import styled from '@emotion/styled'

export const ColorText  = styled.p(props => ({
  color: props.color === 'green' ? 'rgba(97, 230, 30, 0.7)' : 'rgba(230, 57, 30, .7)',
}))