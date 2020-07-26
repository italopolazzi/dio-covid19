import styled from 'styled-components'
import tw from 'twin.macro'

const AnimationStyled = styled.div.attrs({
  className: "animation"
})`
  & {
    transform: scale(-1) rotateX(180deg);
  }

`

export default AnimationStyled