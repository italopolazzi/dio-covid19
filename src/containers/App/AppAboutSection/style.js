import styled from 'styled-components'
import tw from 'twin.macro'

const StyledAppAboutSection = styled.section.attrs({
  id: "about-section"
})`
  .about-section {
    ${tw`h-screen w-full flex justify-center items-center`}
  }
  .about-exclamation {
	   ${tw`text-red-500 lowercase text-center`}
  }

  --percent: 0.23;
  .about-exclamation .l1 {
    transform: scale(calc(var(--percent) * 20));
    margin-top: 0
  }

  .about-exclamation .l2 {
    transform: scale(calc(var(--percent) * 16));
    margin-top: 2.3em
  }

  .about-exclamation .l3 {
    transform: scale(calc(var(--percent) * 14));
    margin-top: 0.9em
  }
  .about-exclamation .l4 {
    transform: scale(calc(var(--percent) * 10));
    margin-top: 0.5em
  }
  .about-exclamation .l5 {
    transform: scale(calc(var(--percent) * 6));
    margin-top: 0.3em
  }
  .about-exclamation .l6 {
    transform: scale(calc(var(--percent) * 14));
    margin-top: 1em
  }
`

export default StyledAppAboutSection