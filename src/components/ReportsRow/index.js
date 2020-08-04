import React, { useState, useEffect, useRef } from 'react'
import StyledReportsRow from './style'
import ReportCard from 'components/ReportCard'
import Api from 'commons/api/CoronaVirus19'
import useHorizontalSlider from 'commons/hooks/useHorizontalSlider'
import Skeleton from 'components/Skeleton'

const ReportsRow = ({ place }) => {
  const [response, setResponse] = useState(null)

  useEffect(() => {
    Api.getCountryReports(place.name).then(response => setResponse(response))
  }, [place])

  const ApiData = () => {

    if (response === null) {
      return [...Array(5)].map(index => <Skeleton key={index} type={'mini-card'} />)
    }

    if (response.type === "is-empty") {
      return <span class="no-data">No available reports for "{place.name}"</span>
    }

    const data = response.payload
    return Object.keys(data).map((key, index) => <ReportCard key={key} datum={{ key, index, value: data[key] }} />)
  }

  const reportsRowRef = useHorizontalSlider()


  return (
    <StyledReportsRow ref={reportsRowRef}>
      <ApiData />
    </StyledReportsRow>
  )
}

export default ReportsRow