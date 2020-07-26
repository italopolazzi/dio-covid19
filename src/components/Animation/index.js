import React from "react"
import Lottie from 'lottie-react-web'
import AnimationStyled from './style'
import animationData from 'commons/animations/26428-covid-19-protect.json'

const Animation = () => {
  return (
    <AnimationStyled>
      <Lottie
        options={{
          animationData: animationData,
          loop: true,
        }}
      />
    </AnimationStyled>
  )
}

export default Animation