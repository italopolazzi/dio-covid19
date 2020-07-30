import styled from 'styled-components'
import tw from 'twin.macro'

const StyledCountriesData = styled.section.attrs({
  className: `news`
})`
  & {
    
    #news-row,
    #reports-row {
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none;  /* IE 10+ */
      &::-webkit-scrollbar {
        display: none;
        width: 0px;
        background: transparent; /* Chrome/Safari/Webkit */
      }
    }
  }

`

export default StyledCountriesData