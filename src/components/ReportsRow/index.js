import React, { useState, useEffect } from 'react'
import StyledReportsRow from './style'
import ReportCard from 'components/ReportCard'
import Api from 'commons/api/CoronaVirus19'

const ReportsRow = ({ country }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    Api.getCountryReports(country.name).then(data => setData(data))
  }, [country])

  const ApiData = () => {

    if (!data) return <span>No available data</span>
    
    return Object.keys(data).map(key => <ReportCard key={key} datum={{ key, value: data[key] }} />)

  }

  return (
    <StyledReportsRow>
      <ApiData />
    </StyledReportsRow>
  )
}

export default ReportsRow