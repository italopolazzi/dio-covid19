import styled from 'styled-components'
import tw from 'twin.macro'

const StyledInfoCard = styled.div.attrs({
  className: `info-card`
})`

  .even-row > :first-child {
    order: 1
  }

`

export default StyledInfoCard