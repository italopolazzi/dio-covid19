import React, { useEffect, useState, useRef } from 'react'
import StyledNewsRow from './style'
import Api from 'commons/api/CoronaVirus19'
import NewsCard from 'components/NewsCard'
import useHorizontalSlider from 'commons/hooks/useHorizontalSlider'
import Skeleton from 'components/Skeleton'

const NewsRow = ({ country }) => {
  const [response, setResponse] = useState(null)

  useEffect(() => {
    Api.getCountryNews(country.code).then(response => setResponse(response))
  }, [country.code])

  const ApiData = () => {

    if (response === null) {
      return [...Array(5)].map(index => <Skeleton key={index} type={'card'} />)
    }

    if (response.type === "is-empty") {
      return <span class="no-response">No available news for "{country.name}"</span>
    }

    const data = response.payload
    return data.map((datum, index) => <NewsCard key={index} datum={datum} />)
  }

  const newsRowRef = useHorizontalSlider()

  return (
    <div className="flex flex-col">
      <StyledNewsRow ref={newsRowRef}>
        <ApiData />
      </StyledNewsRow>
    </div>
  )
}

export default NewsRow
