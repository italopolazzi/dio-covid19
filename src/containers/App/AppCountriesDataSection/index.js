import React from 'react'
import StyledAppCountriesDataSection from './style'
import NewsRow from 'components/NewsRow'
import ReportsRow from 'components/ReportsRow'

const AppCountriesDataSection = ({ country }) => {
  const getDate = () => {
    let dd, mm, yyyy, newDate = new Date()

    dd = newDate.getDate()
    mm = newDate.getMonth()
    yyyy = newDate.getFullYear()

    return `${dd}/${mm}/${yyyy}`
  }

  const countryFlagSrc = `https://www.countryflags.io/${country.code}/flat/64.png`
  const countryFlagAlt = `${country.name}'s flag`

  return (
    <StyledAppCountriesDataSection>

      <section id="reports" className="reports-section">
        <div className="reports-section__header">
          <div className="reports-section__header-element">
            <img className="reports-section__flag" src={countryFlagSrc} alt={countryFlagAlt} />
            <h1 className="reports-section__title">Reports</h1>
          </div>
          <div className="reports-section__header-element">
            <div className="reports-section__title">Last data</div>
          </div>
        </div>
        <ReportsRow place={country} />
        <ReportsRow place={{ name: "World", code: "earth" }} />
      </section>

      <section id="news" className="news-section">
        <div className="news-section__header">
          <div className="news-section__header-element">
            <div className="news-section__title">Today news</div>
            <div className="news-section__dot"></div>
            <time className="news-section__title" datatime={Date.now()}>{getDate(Date.now())}</time>
          </div>
        </div>
        <NewsRow country={country} />
      </section>


    </StyledAppCountriesDataSection>
  )
}

export default AppCountriesDataSection