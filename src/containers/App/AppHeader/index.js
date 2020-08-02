
import React, { useState, useRef, useEffect } from "react"
import StyledAppHeader from './style'
import Animation from 'components/Animation'
import Dialog from 'components/Dialog'
import CodeList from 'components/CodeList'
import countries from 'commons/constants/countries'
import animationData from 'commons/animations/18795-coronavirus.json'

import useScrollAnimation from 'commons/hooks/useScrollAnimation'

function AppHeader({ onCountryCodeInput }) {

  const countryCodeRef = useRef()
  const headerCardRef = useScrollAnimation({ direction: "vertical" })
  const headerAnimationRef = useScrollAnimation({ direction: "vertical" })

  useEffect(() => {
    countryCodeRef.current.focus()
  }, [])

  const dialogActivator = label => callback => (
    <button
      onClick={event => callback(event)}
      className="block font-semibold text-blue-400 text-right"
    >{label}</button>
  )

  const handleInput = event => {
    const code = event.target.value
    if (!code.match(/[A-Za-z]/g)) {
      event.target.value = ''
    }
  }

  const handleChange = event => {
    const code = event.target.value.toLowerCase()
    if (code.length === 2 && countries[code]) {
      onCountryCodeInput(countries[code])
    }
  }

  return (
    <StyledAppHeader>

      <div ref={headerCardRef} className="header-card col lg:order-1" >
        <div className="card">
          <h1>Covid-19</h1>
          <p>Search here for Reports and News about a country</p>
          <div className="input my-4">
            <label
              htmlFor="country-code"
              className="sr-only">Country code</label>
            <input
              maxLength="2"
              minLength="2"
              onInput={handleInput}
              ref={countryCodeRef}
              id="country-code"
              className="font-mono outline-none p-4 rounded-full shadow-2xl text-3xl uppercase w-full"
              onChange={handleChange} />
          </div>

          <Dialog activator={dialogActivator("See the available codes list")} >
            <CodeList />
          </Dialog>

        </div>
      </div>

      <div ref={headerAnimationRef} className="header-animation col lg:order-2 p-20 lg:p-0" >
        <Animation animationData={animationData} />
      </div>

    </StyledAppHeader>
  )
}

export default AppHeader