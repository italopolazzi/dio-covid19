import styled from 'styled-components'
import tw from 'twin.macro'

const StyledNewsCard = styled.div.attrs({
  className: `news-card`
})`

  & {
    .news-card__article {
      ${tw`relative p-8`}
    }

    .news-card__image-container {
      ${tw`rounded-lg overflow-hidden`}
      transition: transform .4s .25s cubic-bezier(0,1,.3,1),
                  opacity .5s .3s ease-out;
      opacity: 0;
      transform:  translateY(-100%);
      transform-origin: bottom center;
      will-change: opacity, transform;
    }
    
    .news-card__image {
      ${tw`w-full h-full object-cover`}
    }

    .news-card__header {
      ${tw`m-6 p-6 shadow-xl relative z-10 bg-white`}
      transition: transform .4s .25s cubic-bezier(0,1,.3,1),
                  opacity .2s .25s ease-out;
      opacity: 0;
      transform:  rotateX(90deg) scale(0);
      transform-origin: bottom center;
      will-change: opacity, transform;
    }


    .news-card__title {
      ${tw` font-semibold mb-4 whitespace-normal`}
    }

    .news-card__source {
      ${tw`w-full text-right`}

      span {
        ${tw`font-thin`}
      }
    }
    
    // ****************************
    // TRANSITIONS
    // ****************************

    &.is-visible {
      .news-card__image-container {
        opacity: 1;
        transform: translateY(0);
      }
      .news-card__header {
        opacity: 1;
        transform: rotateX(0) scale(1);
      }
    }
  }

  .news-card__article {
    width: 400px;
    
    .news-card__image-container {
      width: 100%;
      height: 300px;
      filter: grayscale(1)
    }

    &:hover .news-card__image-container {
      filter: grayscale(0)
    }

    .news-card__header {
      margin-top: -2rem
    }

    &:hover .news-card__title {
      box-shadow: inset 0 -2rem 0 -1rem yellow;
    }
  }




`

export default StyledNewsCard