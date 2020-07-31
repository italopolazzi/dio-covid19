import styled from 'styled-components'
import tw from 'twin.macro'

const StyledAppCountriesDataSection = styled.section.attrs({
  id: "countries-data-section"
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

export default StyledAppCountriesDataSection