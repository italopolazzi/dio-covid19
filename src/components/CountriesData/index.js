import React, { useState } from 'react'
import StyledCountriesData from './style'
import NewsRow from 'components/NewsRow'
import ReportsRow from 'components/ReportsRow'

const initialState = [
  { code: 'br', name: 'Brazil' },
  // { code: 'it', name: 'Italy' },
  // { code: 'us', name: 'United States' }
]
const CountriesData = () => {
  const [countries, setCountries] = useState(initialState)

  return (
    <StyledCountriesData>
      {
        countries.map((country, index) => {
          return (
            <section key={index}>
              <h1 className="text-6xl font-thin font-serif pl-8">{country.name}</h1>
              <NewsRow country={country} />
              <ReportsRow country={country} />
            </section>
          )
        })
      }

    </StyledCountriesData>
  )
}

export default CountriesData