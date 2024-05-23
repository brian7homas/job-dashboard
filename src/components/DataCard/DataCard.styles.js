import { css } from '@emotion/react'
import { fontSize } from '../../styles/utils/fontSize.styles'



export const DataCardStyles = {
  container: (props) => css({
    maxWidth:350,
    border: `2.5px solid ${props.color}`,
    alignSelf: 'flex-start',
    backgroundColor: 'hsl(0, 0%, 14.196078431372548%)',
    
    borderRadius: '9px',
  }),
  subTitle: css({
    opacity:.8
  }),
  heading: (props) => css({
    color: props.color
  })
}