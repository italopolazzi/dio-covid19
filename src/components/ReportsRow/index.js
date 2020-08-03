import React, { useState, useEffect, useRef } from 'react'
import StyledReportsRow from './style'
import ReportCard from 'components/ReportCard'
import Api from 'commons/api/CoronaVirus19'
import useHorizontalSlider from 'commons/hooks/useHorizontalSlider'

const ReportsRow = ({ place }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    Api.getCountryReports(place.name).then(data => setData(data))
  }, [place])

  const ApiData = () => {

    if (!data) return <span>No available data</span>

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