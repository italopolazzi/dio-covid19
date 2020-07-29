import styled from 'styled-components'
import tw from 'twin.macro'

const StyledNewsCard = styled.div.attrs({
  className: `news-card`
})`



  article {
    width: 400px;

    .image {
      width: 100%;
      height: 300px;
      filter: grayscale(1)
    }

    &:hover .image {
      filter: grayscale(0)
    }

    header {
      margin-top: -2rem
    }

    &:hover h1 {
      box-shadow: inset 0 -2rem 0 -1rem yellow;
    }
  }




`

export default StyledNewsCard