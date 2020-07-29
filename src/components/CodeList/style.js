import styled from 'styled-components'
import tw from 'twin.macro'

const StyledCodeList = styled.div.attrs({
  id: "code-list",
  className: "absolute bg-black flex items-center justify-center left-0 top-0 w-full z-50"
})`
    & > .container {
      ${tw`p-8 bg-white`}
    }
`

export default StyledCodeList