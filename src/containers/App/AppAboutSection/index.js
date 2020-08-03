import React from "react"
import StyledAppAboutSection from './style'

import InfoSection from 'components/InfoSection'

import AnimationWorkFromHome from 'commons/animations/17893-work-from-home.json'
import AnimationWearMask from 'commons/animations/17895-wear-mask.json'
import AnimationWashYourHands from 'commons/animations/17896-wash-your-hands.json'
import AnimationTemperatureMeter from 'commons/animations/17897-temperature-meter.json'
import AnimationSneezing from 'commons/animations/17898-sneezing.json'
import AnimationHandSanitizer from 'commons/animations/17899-hand-sanitizer.json'
import AnimationNamasteNoShakeHands from 'commons/animations/17900-namaste-no-shake-hands.json'
import AnimationForeheadTester from 'commons/animations/17901-forehead-tester.json'
import AnimationCovid19 from 'commons/animations/17902-covid19.json'

const infoCardsData = [
  {
    backgroundColor: "#DCDBFF",
    animationData: AnimationWorkFromHome,
    title: <h1>Lorem ipsum dolor it erlo!</h1>
  },
  {
    backgroundColor: "#FFC416",
    animationData: AnimationSneezing,
    title: <h1>Ipsum dolor sit amet consectetur adipisicing elit</h1>
  },
  {
    backgroundColor: "#FFDEC5",
    animationData: AnimationWashYourHands,
    title: <h1>Temporibus eius distinctio et explicabo odio delectus?</h1>
  },
  {
    backgroundColor: "#FF4F7B",
    animationData: AnimationTemperatureMeter,
    title: <h1>Totam, nobis? </h1>
  },
  {
    backgroundColor: "#A3FBEE",
    animationData: AnimationWearMask,
    title: <h1>Impedit esse quod, porro dicta</h1>
  },
  {
    backgroundColor: "#F19FBD",
    animationData: AnimationHandSanitizer,
    title: <h1>Omnis autem eligendi repellat nostrum fugit</h1>
  },
  {
    backgroundColor: "#FFDC00",
    animationData: AnimationNamasteNoShakeHands,
    title: <h1>Ipsum dolor sit amet consectetur adipisicing elit</h1>
  },
  {
    backgroundColor: "#4ADF80",
    animationData: AnimationCovid19,
    title: <h1>Lorem ipsum dolor it erlo!</h1>
  },
  {
    backgroundColor: "#FFBD85",
    animationData: AnimationForeheadTester,
    title: <h1>Temporibus eius distinctio et explicabo odio delectus?</h1>
  },
]

function AppAboutSection(props) {

  const infoSectionList = (
    infoCardsData.map((datum, index) => {
      return <InfoSection
        key={index}
        prevColor={index > 0 && infoCardsData[index - 1].backgroundColor}
        index={index}
        {...datum}
      />
    })
  )


  return (
    <StyledAppAboutSection {...props}>
      <div className="about-section">

        <div className="text-4xl font-thin font-serif about-exclamation">
          <div className="l1">A</div>
          <div className="l2">b</div>
          <div className="l3">o</div>
          <div className="l4">u</div>
          <div className="l5">t</div>
          <div className="l6">●</div>
        </div>

      </div>
      <div className="w-full">
        {infoSectionList}
      </div>
    </StyledAppAboutSection>
  )
}

export default AppAboutSection