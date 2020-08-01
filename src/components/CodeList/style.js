import styled from 'styled-components'
import tw from 'twin.macro'

const StyledCodeList = styled.div.attrs({
  id: "code-list",
  className: "bg-black flex items-center justify-center"
})`
    & > .container {
      ${tw`p-8 bg-white`}
    }
`

export default StyledCodeList