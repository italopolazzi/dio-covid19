import React, { useEffect, useState } from 'react'
import StyledReportCard from './style'

import useScrollAnimation from 'commons/hooks/useScrollAnimation'

const ReportCard = ({ datum }) => {
  const { key, value } = datum

  const keyNameCorrector = key => {
    const items = {
      country: "Local",
      cases: "Cases",
      todayCases: "Today cases",
      deaths: "Deaths",
      todayDeaths: "Today deaths",
      recovered: "Recovered",
      active: "Active",
      critical: "Critical",
      casesPerOneMillion: "Cases per one million",
      deathsPerOneMillion: "Deaths per one million",
      totalTests: "Total tests",
      testsPerOneMillion: "Tests per one million"
    }
    return items[key]
  }

  const correctName = keyNameCorrector(key)
  const correctValue = !!value ? value : "-"

  const elementRef = useScrollAnimation()
  return (
    <StyledReportCard ref={elementRef}>
      <div className="report-card__header">
        <div className="report-card__pin"></div>
        <div className="report-card__key">{correctName}</div>
      </div>
      <div className="report-card__value">{correctValue}</div>
    </StyledReportCard>
  )
}

export default ReportCard