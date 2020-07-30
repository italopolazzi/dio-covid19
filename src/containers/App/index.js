import React, { useState } from "react"
import StyledApp from "./style"
import AppNav from './AppNav'
import AppHeader from './AppHeader'
import CountriesData from 'components/CountriesData'
import countries from 'commons/constants/countries'
import InfoCard from 'components/InfoCard'

import AnimationWearMask from 'commons/animations/17895-wear-mask.json'

function App(props) {
  const [country, setCountry] = useState(countries.br)

  return (
    <StyledApp>
      <AppNav />
      <AppHeader onCountryCodeInput={v => setCountry(v)} />

      <main className="flex flex-col">


        <CountriesData country={country} />

        <section id="about">
          <h2>About</h2>


          <div className="grid grid-cols-3 w-full">
            <InfoCard animationData={AnimationWearMask} />
            <InfoCard animationData={AnimationWearMask} />
            <InfoCard animationData={AnimationWearMask} />
            <InfoCard animationData={AnimationWearMask} />
            <InfoCard animationData={AnimationWearMask} />
            <InfoCard animationData={AnimationWearMask} />
            <InfoCard animationData={AnimationWearMask} />
            <InfoCard animationData={AnimationWearMask} />
            <InfoCard animationData={AnimationWearMask} />
            <InfoCard animationData={AnimationWearMask} />
            <InfoCard animationData={AnimationWearMask} />
            <InfoCard animationData={AnimationWearMask} />
            <InfoCard animationData={AnimationWearMask} />
          </div>

        </section>

      </main>
    </StyledApp>
  )
}

export default App