import styled from 'styled-components'
import tw from 'twin.macro'

const StyledLayoutSmall = styled.div.attrs({
  className: ""
})`
  & {
    .header-content {
      ${tw`relative w-full h-screen flex flex-col items-center justify-start`}
    }
    .header-image {
      width: 300px;
      height: 200px;
      transform: scale(-1.2) rotateX(180deg);
    }
    .header-card {
      ${tw`bg-blue-400 p-8 shadow-2xl`}
    }
    .header-title {
      ${tw`text-4xl font-black font-serif`}
    }
    .header-code-list-activator {
      ${tw`block font-semibold text-right text-white`}
    }
    .header-code-list-input {
      ${tw`font-mono outline-none p-2 rounded-full shadow-2xl text-xl uppercase w-full`}
    } 
  }
`

export default StyledLayoutSmall