import React, { useState } from "react"
import StyledApp from "./style"
import AppNav from './AppNav'
import AppHeader from './AppHeader'
import CountriesData from 'components/CountriesData'
import countries from 'commons/constants/countries'
import InfoCard from 'components/InfoCard'

import AnimationWorkFromHome from 'commons/animations/17893-work-from-home.json'
import AnimationWearMask from 'commons/animations/17895-wear-mask.json'
import AnimationWashYourHands from 'commons/animations/17896-wash-your-hands.json'
import AnimationTemperatureMeter from 'commons/animations/17897-temperature-meter.json'
import AnimationSneezing from 'commons/animations/17898-sneezing.json'
import AnimationHandSanitizer from 'commons/animations/17899-hand-sanitizer.json'
import AnimationNamasteNoShakeHands from 'commons/animations/17900-namaste-no-shake-hands.json'
import AnimationForeheadTester from 'commons/animations/17901-forehead-tester.json'
import AnimationCovid19 from 'commons/animations/17902-covid19.json'

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

            <InfoCard animationData={AnimationWorkFromHome} />
            <InfoCard animationData={AnimationWearMask} />
            <InfoCard animationData={AnimationWashYourHands} />
            <InfoCard animationData={AnimationTemperatureMeter} />
            <InfoCard animationData={AnimationSneezing} />
            <InfoCard animationData={AnimationHandSanitizer} />
            <InfoCard animationData={AnimationNamasteNoShakeHands} />
            <InfoCard animationData={AnimationForeheadTester} />
            <InfoCard animationData={AnimationCovid19} />

          </div>

        </section>

      </main>
    </StyledApp>
  )
}

export default App