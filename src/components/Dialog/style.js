import styled from 'styled-components'
import tw from 'twin.macro'

const StyledDialog = styled.div.attrs({})`
  & {
      [role="dialog"] {
        ${tw`bg-white text-2xl`}
      }

      .dialog-header {
        ${tw`flex justify-between`}
      }

      .dialog-title {
        ${tw`font-bold`}
      }

      .dialog-close-button {
        ${tw`border-4 font-semibold px-4 rounded-full uppercase hover:border-red-400`}
      }
      

      .dialog-backdrop {
        will-change: transform;
        transform: translateY(100%);
        transition: transform .3s ease-out;
      }

      .dialog-backdrop.active {
        ${tw`bg-black fixed h-full left-0 overflow-y-auto p-8 top-0 z-50 w-full`}
         transform: translateY(0);
      }
  }
`

export default StyledDialog