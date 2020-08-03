import React from 'react'
import StyledAppCountriesDataSection from './style'
import NewsRow from 'components/NewsRow'
import ReportsRow from 'components/ReportsRow'


const AppCountriesDataSection = ({ country }) => {
  const getDate = () => {
    let dd, mm, yyyy, _ = new Date()

    dd = _.getDate()
    mm = _.getMonth()
    yyyy = _.getFullYear()

    return `${dd}/${mm}/${yyyy}`
  }

  return (
    <StyledAppCountriesDataSection>

      <section id="reports">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center">
              <img src={`https://www.countryflags.io/${country.code}/flat/64.png`}></img>
              <h1 className="text-3xl font-serif  ml-8">Reports</h1>
            </div>
            <div className="flex items-center">
              <div className="font-thin text-2xl font-serif">Last data</div>
            </div>
          </div>
        </div>
        <ReportsRow place={country} />
        <ReportsRow place={"World"} />
      </section>

      <section id="news">
        <div className="container mx-auto mt-8 px-4">
          <div className="flex flex-wrap justify-start items-center">
            <div className="flex items-center">
              <div className="font-thin text-2xl font-serif">Today news</div>
              <div className="h-4 w-4 mx-4 rounded-full bg-green-400"></div>
              <time className="font-thin text-2xl font-serif" datatime={Date.now()}>{getDate(Date.now())}</time>
            </div>
          </div>
        </div>
        <NewsRow country={country} />
      </section>


    </StyledAppCountriesDataSection>
  )
}

export default AppCountriesDataSection