import styled from 'styled-components'
import tw from 'twin.macro'

const StyledAppCountriesDataSection = styled.section.attrs({
  id: "countries-data-section"
})`
  & {
    
    .reports-section__header,
    .news-section__header {
      ${tw`container mx-auto px-4 flex flex-wrap justify-between items-center`}
    }

    .reports-section__header-element,
    .news-section__header-element {
      ${tw`flex items-center`}
    }
    
    .reports-section__flag {
      ${tw`mr-8`}
    }

    .news-section__header {
      ${tw`mt-8`}
    }

    .news-section__dot {
      ${tw`h-4 w-4 mx-4 rounded-full bg-green-400`}
    }

    .reports-section__title,
    .news-section__title {
      ${tw`font-bold text-3xl font-serif`}
    }

    .news-row,
    .reports-row {
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