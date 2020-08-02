import styled from 'styled-components'
import tw from 'twin.macro'

const StyledReportCard = styled.div.attrs({
  className: `report-card bg-white m-4 my-8 p-4 relative rounded-lg`
})`

  .report-card-pin {    
    animation-duration: .2s;
    animation-delay: .5s;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;
    animation-fill-mode: both;
    animation-direction: normal;
  }
  .report-card-key {
    background: transparent!important;
    opacity: 0;
    transform-origin: 50% auto;
    transform: translateX(-2rem) scale(0.8);
    will-change: opacity, transform;
    transition: transform .2s .9s ease-out,
                opacity .2s 1s ease-out;
  }

  .report-card-value {
    opacity: 0;
    transform: translateX(-2rem) scale(1);
    transition: transform .2s 1.2s ease-out,
                opacity .2s 1.4s ease-out;
    will-change: opacity, transform;
  }

  & {
    transition: transform .4s .25s cubic-bezier(0,1,.3,1),
                opacity .2s .25s ease-out;
    opacity: 0;
    transform:  translateY(100%);
    will-change: opacity, transform;

    &.is-visible {
      opacity: 1;
      transform: translateY(0);

      .report-card-pin {
        animation-name: blink;
      }

      .report-card-key {
        transform: translateX(0) scale(1);
        opacity: 1;
      }

      .report-card-value {
        opacity: 1;
        transform: translateX(0) scale(1);
      }
    }
  }

  @keyframes blink {
    0% {
      opacity: 0
    }
    33% {
      opacity: 1
    }
    66% {
      opacity: 0
    }
    99% {
      opacity: 1
    }
  }
`

export default StyledReportCard