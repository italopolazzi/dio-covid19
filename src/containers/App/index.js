import React, { useState } from "react"
import StyledApp from "./style"
import AppNav from './AppNav'
import AppHeader from './AppHeader'
import CountriesData from 'components/CountriesData'
import countries from 'commons/constants/countries'


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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sequi non, quo similique, consequatur enim ducimus voluptatum repellendus libero expedita totam maxime recusandae error impedit facilis aut. Minima, asperiores saepe?
          </p>
        </section>

      </main>
    </StyledApp>
  )
}

export default App