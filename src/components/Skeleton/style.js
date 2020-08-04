import styled from 'styled-components'
import tw from 'twin.macro'

const StyledSkeleton = styled.div.attrs({
  className: 'skeleton'
})`

  & > * {
    position: relative;
  }

  & > *:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    animation-name: loading;
    animation-duration: 3s;
    animation-delay: 0;
    animation-fill-mode: both;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    background: linear-gradient(to right, rgba(227,227,227,1) 0%, rgba(214,214,214,1) 25%, rgba(227,227,227,1) 50%);
    background-size: 50%;
    mix-blend-mode: overlay;
  }

  @keyframes loading {
    from {
      background-position: -100% 0;
    }
    to {
      background-position: 100% 0;
    }
  }

`

export default StyledSkeleton