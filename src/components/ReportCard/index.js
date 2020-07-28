import React, { useEffect, useState } from 'react'
import StyledReportCard from './style'
import Api from 'commons/api/CoronaVirus19'


const Reports = ({ country }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    Api.getCountry(country).then(data => setData(data))
  }, [])

  const ApiData = () => {

    if (data) {
      return (
        Object.keys(data).map(key => {
          return (
            <>
              <div className="text-3xl font-bold">{key}</div>
              <div className="text-xl">{data[key]}</div>
            </>
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

export default Reports