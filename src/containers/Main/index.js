import React, { useState, useRef, useEffect } from "react"
import StyledMain from "./style"
import Animation from 'components/Animation'
import CountriesData from 'components/CountriesData'
import countries from 'commons/constants/countries'


function Main(props) {
  const [country, setCountry] = useState(countries.gb)
  const countryCodeRef = useRef()
  
  useEffect(() => {
    countryCodeRef.current.focus()
  }, [])

  const handleChange = event => {
    const code = event.target.value
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

        <div className="col lg:order-1">
          <div className="card">
            <h1>Covid-19</h1>
            <p>Search here for Reports and News about a country</p>
            <div className="input">
              <label htmlFor="country-code" className="sr-only">Country code</label>
              <input ref={countryCodeRef} id="country-code" className="font-mono outline-none p-4 rounded-full shadow-2xl shadow-xl text-3xl uppercase w-full" onChange={handleChange} />
            </div>
            {/* <a className="button" href="#">See reports</a> */}
          </div>
        </div>

        <div className="col lg:order-2 p-20 lg:p-0">
          <Animation />
        </div>

      </header>

      <main className="flex flex-col">

        <CountriesData country={country} />

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