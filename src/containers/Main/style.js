import styled from 'styled-components'
import tw from 'twin.macro'

const background_color = 'bg-green-800'

const StyledMain = styled.main.attrs({
  className: ""
})`
  & {
    height: 100vh;

    header {
      ${tw`${background_color} overflow-hidden h-full grid lg:grid-cols-2`}
    }

    .col {
      ${tw`flex items-center justify-center`}
    }

    .card {
      z-index: 1;
      ${tw`bg-green-700 rounded shadow-lg p-8 m-8`}
    }

    h1{
      ${tw`text-4xl font-bold`}
    }

    .animation {
      z-index: 0;
      transform: scale(-2) rotateX(180deg);
      * {
        ${tw`select-none cursor-default`}
      }
    }

    p {
      ${tw`text-xl my-4`}
    }

    .button {
      ${tw`inline-block uppercase rounded-lg font-bold shadow-lg hover:shadow-xs p-4`}
    }
  }
`

export default StyledMain