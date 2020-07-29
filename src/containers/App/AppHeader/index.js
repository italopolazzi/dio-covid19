
import React, { useState, useRef, useEffect } from "react"
import StyledAppHeader from './style'
import Animation from 'components/Animation'
import CodeList from 'components/CodeList'
import countries from 'commons/constants/countries'

import { motion } from "framer-motion"

const cardVariants = {
  hidden: {
    x: '-100vw',
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 50,
      delay: 0.5,
      when: 'beforeChildren'
    }
  }
}

const textVariants = {
  hidden: {
    y: '-1rem',
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'twin',
      delay: 0.3,
      duration: 0.3
    }
  }
}

function AppHeader({ onCountryCodeInput }) {
  const [dialog, setDialog] = useState(false)

  const countryCodeRef = useRef()

  useEffect(() => {
    countryCodeRef.current.focus()
  }, [])

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
      <motion.div className="col lg:order-1" variants={cardVariants}>
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

          <button
            onClick={() => setDialog(true)}
            className="block font-semibold text-blue-400 text-right"
          >See the available codes list</button>

        </div>
      </motion.div>

      <motion.div
        className="col lg:order-2 p-20 lg:p-0"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: 'easeOut', delay: 1, duration: 2, type: 'spring', stiffness: 50 }}
      >
        <Animation />
      </motion.div>

      <CodeList open={dialog} closeCallback={() => setDialog(false)} />

    </StyledAppHeader>
  )
}

export default AppHeader