import styled from 'styled-components'
import tw from 'twin.macro'

const StyledNewsCard = styled.div.attrs({
  className: `news-card`
})`

  & {
    .news-card-image {
      transition: transform .4s .25s cubic-bezier(0,1,.3,1),
                  opacity .5s .3s ease-out;
      opacity: 0;
      transform:  translateY(-100%);
      transform-origin: bottom center;
      will-change: opacity, transform;
    }
    .news-card-header {
      transition: transform .4s .25s cubic-bezier(0,1,.3,1),
                  opacity .2s .25s ease-out;
      opacity: 0;
      transform:  rotateX(90deg) scale(0);
      transform-origin: bottom center;
      will-change: opacity, transform;
    }

    &.is-visible {
      .news-card-image {
        opacity: 1;
        transform: translateY(0);
      }
      .news-card-header {
        opacity: 1;
        transform: rotateX(0) scale(1);
      }
    }
  }

  article {
    width: 400px;
    .news-card-image {
      width: 100%;
      height: 300px;
      filter: grayscale(1)
    }

    &:hover .news-card-image {
      filter: grayscale(0)
    }

    .news-card-header {
      margin-top: -2rem
    }

    &:hover .news-card-title {
      box-shadow: inset 0 -2rem 0 -1rem yellow;
    }
  }




`

export default StyledNewsCard