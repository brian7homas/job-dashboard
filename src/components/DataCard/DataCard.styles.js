import styled from '@emotion/styled'
import { fontSize } from '../../styles/utils/fontSize.styles'
export const JobsTracked = styled.h1(props => ({
  fontSize: fontSize(props.fontSize)
}))

export const JobsAppliedTo = styled.p`
  font-size:1.5rem;
  color:hsla(0, 0%, 60%, .55);
`
export const JobsRatio = styled.p``

export const MainContentOverView = styled.div(props => ({
  border: `1px solid ${props.color}`,
  alignSelf: 'flex-start',
  padding: '1.5em 1em .5em 1em',
  backgroundColor: 'var(--color-white)',
  borderRadius: '9px',
  width: '95%',
}))
export const DataText = styled.h1(props => ({
  fontSize: fontSize(props.fontSize),
  width:'100%'
}))
