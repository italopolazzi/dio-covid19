import styled from 'styled-components'
import tw from 'twin.macro'

const StyledInfoSection = styled.section.attrs({
  className: `info-section`
})`
  
  .info-section__title {
    ${tw`text-4xl mt-8 font-bold font-serif`}
  }
  
  .info-section__sheet {
    ${tw`flex flex-col items-center justify-center`}

    &--sm {
      ${tw`w-full`}
    }

    &--md {
      ${tw`w-1/2 bg-white p-8`}
    }

    will-change: opacity;
    transition: opacity .3s .25s ease-out;
    opacity: 0;
  }

  .info-section__content {  
    ${tw`my-4`}
  }

  --arrow-size: 4rem;
  @media (max-height: 600px) {
    --arrow-size: 2rem;

    .info-section__animation {
      flex: 1 0 auto;
    }

    .info-section__article {
      height: auto!important
    }
  }

  .info-section__article {
    ${tw`relative h-screen p-8 flex flex-col justify-center items-center`}

    &:before {
      content: "";
      width: var(--arrow-size);
      height: var(--arrow-size);
      position: absolute;
      top: 0;
      margin: 0 auto;
      background: transparent;
      border-top: var(--arrow-size) solid ${props => props.prevColor || 'transparent'};
      border-right: var(--arrow-size) solid transparent;
      border-bottom: var(--arrow-size) solid transparent;
      border-left: var(--arrow-size) solid transparent;
    }
  }

  .info-section__row {
    ${tw`flex items-center`}

    &--even > :first-child {
      order: 1
    }

    &--odd {

    }
  }

  .info-section__animation-container {
    ${tw`w-1/2 flex items-center justify-center`}
  }

  .info-section__animation {
    ${tw`shadow-2xl p-4 rounded-full w-64 h-64 overflow-hidden`}
    will-change: transform, opacity;
    transition: transform .3s .55s ease-out,
                opacity .3s .55s ease-out;
    transform: scale(0) translateX(0); // default
    opacity: 0;
  }

  .even-row {
    .info-section__animation {
      transform: scale(1) translateX(-100%);
    }
  }

  .odd-row {
    .info-section__animation {
      transform: scale(1) translateX(100%);
    }
  }

  .info-section__dot {
    ${tw`w-8 h-8 rounded-full mx-8`}
  }

  &.is-visible {
    .info-section__animation {
      transform: scale(1) translateX(0);
      opacity: 1;
    }

    .info-section__sheet {
      opacity: 1;
    }
  }

`

export default StyledInfoSection