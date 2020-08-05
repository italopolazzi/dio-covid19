import styled from 'styled-components'
import tw from 'twin.macro'

const StyledAppNav = styled.nav.attrs({
  className: "app-nav",
  id: "app-nav"
})`
  & {
    ${tw`flex font-serif h-16 items-end justify-center text-2xl w-full fixed bottom-0 z-20`}

    will-change: transform;
    transform: translateY(0);
    transition: transform .3s ease-out;
    
    &.is-active {
      transform: translateY(100vh);
    }

    .app-nav__list {
      ${tw`bg-black text-white flex mb-2 p-4 rounded-full shadow-2xl`}
    }

    .app-nav__list-item {
      ${tw`mx-2`}
    }

    .app-nav__list-item:nth-child(n) {
      ${tw`hover:text-blue-400`}
    }
    .app-nav__list-item:nth-child(2n) {
      ${tw`hover:text-yellow-400`}
    }
    .app-nav__list-item:nth-child(3n) {
      ${tw`hover:text-green-400`}
    }
    .app-nav__list-item:nth-child(4n) {
      ${tw`hover:text-red-400`}
    }
  }

`

export default StyledAppNav