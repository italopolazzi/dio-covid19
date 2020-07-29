import styled from 'styled-components'
import tw from 'twin.macro'

const background_color = 'bg-white'

const StyledMain = styled.main.attrs({
  className: `main-content ${background_color}`
})`
  & {
    #country-code {
      position: relative;
      margin-top: -4rem;
      top: 4rem;
    }
    overflow-x: hidden;
    ${tw`h-full lg:h-screen`}

    & > header {
      ${tw`overflow-hidden h-full grid lg:grid-cols-2`}
    }

    .col {
      ${tw`flex items-center justify-center`}
    }

    .card {
      z-index: 1;
      ${tw`bg-white rounded shadow-2xl p-8 m-8`}

      h1 {
        ${tw`text-4xl font-bold`}
      }
      
      p {
        ${tw`text-xl my-4`}
      }

      .button {
        ${tw`inline-block uppercase rounded-lg font-bold shadow-lg hover:shadow-xs p-4`}
      }
    }

    .animation {
      z-index: 0;
      transform: scale(-2) rotateX(180deg);
      * {
        ${tw`select-none cursor-default`}
      }
    }
  }
`

export default StyledMain