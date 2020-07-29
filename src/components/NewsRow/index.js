import React, { useEffect, useState } from 'react'
import StyledNewsRow from './style'
import Api from 'commons/api/CoronaVirus19'
import NewsCard from 'components/NewsCard'


const NewsRow = ({ country }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    Api.getCountryNews(country.code).then(data => setData(data))
  }, [country.code])

  const ApiData = () => {

    if (!data) return <span>No available data</span>

    return data.map((datum, index) => <NewsCard key={index} datum={datum} />)

  }

  return (
    <StyledNewsRow>
      <ApiData />
    </StyledNewsRow>
  )
}

export default NewsRow
