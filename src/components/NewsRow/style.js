import styled from 'styled-components'
import tw from 'twin.macro'

const StyledNewsRow = styled.div.attrs({
  className: `news-row flex`
})`
  .no-data {
    ${tw`font-semibold py-4 text-2xl text-center`}
  }

`

export default StyledNewsRow