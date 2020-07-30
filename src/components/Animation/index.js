import React from "react"
import Lottie from 'lottie-react-web'
import AnimationStyled from './style'

const Animation = ({ animationData }) => {
  return (
    <AnimationStyled>
      <Lottie
        options={{
          animationData,
          loop: true,
        }}
      />
    </AnimationStyled>
  )
}

export default Animation