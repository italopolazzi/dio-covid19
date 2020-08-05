import styled from 'styled-components'
import tw from 'twin.macro'

const StyledCodeList = styled.div.attrs({
  id: "code-list",
  className: "code-list"
})`
  & {
    ${tw`grid grid-cols-2 lg:grid-cols-3`}

    .code-list__item {
      ${tw`flex flex-col p-4`}
    }
    .code-list__item-name {
      ${tw`text-2xl`}
    }
    .code-list__item-code {
      ${tw`border-b-8 border-blue-400 inline font-bold uppercase text-4xl w-1/6`}
    }
  }
`

export default StyledCodeList