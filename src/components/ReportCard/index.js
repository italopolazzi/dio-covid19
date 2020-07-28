import React, { useEffect, useState } from 'react'
import StyledReportCard from './style'
import Api from 'commons/api/CoronaVirus19'


const ReportCard = ({ country }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    Api.getCountryReports(country).then(data => setData(data))
  }, [])

  const ApiData = () => {

    if (data) {
      return (
        Object.keys(data).map(key => {
          return (
            <div key={key} class="api-data">
              <div className="text-3xl font-bold">{key}</div>
              <div className="text-xl">{data[key]}</div>
            </div>
          )
        })
      )
    }

    return (
      <>
        No available data
      </>
    )
  }

  return (
    <StyledReportCard>
      <ApiData />
    </StyledReportCard>
  )
}

export default ReportCard