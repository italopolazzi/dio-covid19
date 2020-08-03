import styled from 'styled-components'
import tw from 'twin.macro'

const StyledLayoutMedium = styled.div.attrs({
  className: "md:h-screen grid md:grid-cols-2 grid-rows-2 md:grid-rows-1"
})`
  & {

    .header-content {
      ${tw`bg-blue-400 flex items-center justify-center w-full h-full overflow-hidden lg:order-1`}

      opacity: 0;
      will-change: opacity;
      transform: translateY(-100%);
      transition: transform .5s .25s ease-out,
                  opacity .5s .25s ease-out;
      &.is-visible {
        transform: translateY(0);
        opacity: 1;
      }

      .header-title {
        ${tw`text-6xl font-black font-serif`}
      }
      
      .header-code-list-activator {
        ${tw`block font-semibold text-right text-white`}
      }

      .header-code-list-input {
        ${tw`font-mono outline-none p-4 rounded-full shadow-2xl text-3xl uppercase w-full`}
      } 
    }

    .header-image {
      ${tw`flex items-center h-screen md:h-auto justify-center lg:order-2 p-20 lg:p-0`}
      transform: scale(-1.5) rotateX(180deg);

      img {
        object-fit: cover;
        width: 100%;
      }
    }
  }
`

export default StyledLayoutMedium