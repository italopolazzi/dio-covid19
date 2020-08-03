import styled from 'styled-components'
import tw from 'twin.macro'

const StyledDialog = styled.div.attrs({})`
  & {
      [role="dialog"] {}

      .dialog-backdrop.active {
        ${tw`bg-black fixed h-full left-0 overflow-y-auto p-8 top-0 z-50 w-full`}
      }
  }
`

export default StyledDialog