import React, { useState, useRef, useEffect } from "react"
import StyledMain from "./style"
import Animation from 'components/Animation'
import CodeList from 'components/CodeList'
import CountriesData from 'components/CountriesData'
import countries from 'commons/constants/countries'

import { motion } from "framer-motion"



function Main(props) {
  const [dialog, setDialog] = useState(false)
  const [country, setCountry] = useState(countries.gb)
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
      setCountry(countries[code])
    }
  }

  return (
    <StyledMain>

      <nav className="bg-white fixed flex font-semibold h-16 items-center justify-center shadow-xs text-2xl w-full z-10">
        <ul className="flex">
          <li className="p-4"><a href="#news">News</a></li>
          <li className="p-4"><a href="#reports">Reports</a></li>
          <li className="p-4"><a href="#about">About</a></li>
        </ul>
      </nav>

      <header className="mt-16">


        <motion.div
          className="col lg:order-1"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 0.3, type: 'spring', stiffness: 50 }}
        >
          <div className="card">
            <h1>Covid-19</h1>
            <p>Search here for Reports and News about a country</p>
            <div className="input my-4">
              <label htmlFor="country-code" className="sr-only">Country code</label>
              <input maxLength="2" minLength="2" onInput={handleInput} ref={countryCodeRef} id="country-code" className="font-mono outline-none p-4 rounded-full shadow-2xl text-3xl uppercase w-full" onChange={handleChange} />
            </div>
            <button onClick={() => setDialog(true)} className="block font-semibold text-blue-400 text-right" href="#">See the available codes list</button>
          </div>
        </motion.div>

        <motion.div className="col lg:order-2 p-20 lg:p-0"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: 'easeOut', delay: 1, duration: 2, type: 'spring', stiffness: 50 }}
        >
          <Animation />
        </motion.div>

      </header>

      <main className="flex flex-col">

        <CodeList open={dialog} closeCallback={() => setDialog(false)} />
        {/* <CountriesData country={country} /> */}

        <section id="about">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sequi non, quo similique, consequatur enim ducimus voluptatum repellendus libero expedita totam maxime recusandae error impedit facilis aut. Minima, asperiores saepe?
          </p>
        </section>

      </main>
    </StyledMain>
  )
}

export default Main