import React from 'react'
import StyledNews from './style'
import NewsCard from 'components/NewsCard'


const News = () => {
  return (
    <StyledNews>
      <NewsCard country="br" />
      <NewsCard country="it" />
      <NewsCard country="us" />
    </StyledNews>
  )
}

export default News