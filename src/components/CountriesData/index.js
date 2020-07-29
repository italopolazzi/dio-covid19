import React from 'react'
import StyledCountriesData from './style'
import NewsRow from 'components/NewsRow'
import ReportsRow from 'components/ReportsRow'


const CountriesData = ({ country }) => {
  return (
    <StyledCountriesData>
      <section>
        <div className="flex pl-8 items-center">
          <img src={`https://www.countryflags.io/${country.code}/flat/64.png`}></img>
          <h1 className="text-6xl font-thin font-serif">{country.name}</h1>
        </div>
        <NewsRow country={country} />
        <ReportsRow country={country} />
      </section>
    </StyledCountriesData>
  )
}

export default CountriesData