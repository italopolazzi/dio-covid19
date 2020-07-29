import styled from 'styled-components'
import tw from 'twin.macro'

const StyledNewsRow = styled.div.attrs({
  className: `news-row flex`
})`
 & {
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;

    & > * {
      display: inline-block;
    }
  }
`

export default StyledNewsRow