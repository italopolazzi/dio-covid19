import styled from 'styled-components'
import tw from 'twin.macro'

const StyledReportsRow = styled.div.attrs({
  className: `reports-row bg-yellow-400 cursor-pointer grid grid-flow-col grid-rows-1`
})`
  .no-data {
    ${tw`font-semibold py-4 text-2xl text-center`}
  }
`

export default StyledReportsRow