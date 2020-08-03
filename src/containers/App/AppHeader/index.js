
import React, { useState, useRef, useEffect } from "react"
import StyledAppHeader from './style'
import Dialog from 'components/Dialog'
import CodeList from 'components/CodeList'
import countries from 'commons/constants/countries'
import image from 'assets/img/header-image.svg'

import LayoutSmall from './LayoutSmall'
import LayoutMedium from './LayoutMedium'

import useScrollAnimation from 'commons/hooks/useScrollAnimation'

import { ResponsiveConditional } from 'commons/contexts/responsive'

function AppHeader({ onCountryCodeInput }) {

  const countryCodeRef = useRef()
  const headerCardRef = useScrollAnimation({ direction: "vertical" })

  useEffect(() => {
    countryCodeRef.current.focus()
  }, [])

  const dialogActivator = label => callback => (
    <button
      onClick={event => callback(event)}
      className="header-code-list-activator"
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
      document.querySelector("#reports").scrollIntoView(true)
    }
  }

  const layoutsProps = {
    handleInput,
    handleChange,
    countryCodeRef,
    headerCardRef,
    dialogActivator,
    Dialog,
    CodeList,
    image,
    dialogTitle: "Countries' Code List"
  }


  return (
    <StyledAppHeader>

      <ResponsiveConditional medias={['mdAndUp']}>
        <LayoutMedium {...layoutsProps} />
      </ResponsiveConditional>

      <ResponsiveConditional medias={['smAndDown']}>
        <LayoutSmall {...layoutsProps} />
      </ResponsiveConditional>

    </StyledAppHeader>
  )
}

export default AppHeader