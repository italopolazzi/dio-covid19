import styled from 'styled-components'
import tw from 'twin.macro'

const StyledAppNav = styled.nav.attrs({
  className: "flex font-serif h-16 items-end justify-center text-2xl w-full fixed bottom-0 z-20",
  id: "app-nav"
})`
  & {
    will-change: transform;
    transform: translateY(0);
    transition: transform .3s ease-out;
    
    &.is-active {
      transform: translateY(100vh);
    }
  }

`

export default StyledAppNav