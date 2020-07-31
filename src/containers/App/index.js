import React, { useState } from "react"
import StyledApp from "./style"


import AppNav from './AppNav'
import AppHeader from './AppHeader'
import AppAboutSection from './AppAboutSection'
import AppCountriesDataSection from './AppCountriesDataSection'
import countries from 'commons/constants/countries'

import { ResponsiveProvider } from 'commons/contexts/responsive'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from 'tailwind.config.js'
const fullConfig = resolveConfig(tailwindConfig)

function App(props) {
  const [country, setCountry] = useState(countries.br)
  return (
    <ResponsiveProvider breakpointsConfig={fullConfig.theme.screens}>
      <StyledApp>
        <AppNav />
        <AppHeader onCountryCodeInput={v => setCountry(v)} />

        <main className="flex flex-col">
          <AppCountriesDataSection country={country} />
          <AppAboutSection />
        </main>
      </StyledApp>
    </ResponsiveProvider>
  )
}

export default App