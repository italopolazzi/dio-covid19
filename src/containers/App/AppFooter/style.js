import styled from 'styled-components'
import tw from 'twin.macro'

const StyledAppAboutSection = styled.footer.attrs({
  id: "app-footer",
  className: "bg-black text-white"
})`

  & {
    .footer-logo {
      ${tw`w-16`}
    }
    .footer-card {
      ${tw`flex flex-col p-4`}
    }

    .footer-card__header {
      ${tw``}
    }

    .footer-card__title {
      ${tw`text-2xl mt-8 mb-2 font-serif font-black`}
    }

    .footer-card__content {
      ${tw``}
    }

    .footer-copyright {
      ${tw`font-semibold text-center py-4`}
    }

    .footer-card__badge-group {
      margin: 0 -0.5rem;
    }

    .footer-card__badge {
      ${tw`font-semibold border-4 inline-block m-2 px-4 rounded-full`}
    }

  }

`

export default StyledAppAboutSection