import styled from 'styled-components'
import tw from 'twin.macro'

const StyledCountriesData = styled.section.attrs({
  className: `news`
})`
  & {
    
    #news-row,
    #reports-row {
      &::-webkit-scrollbar {
        display: none
      }
    }
  }

`

export default StyledCountriesData