import React from 'react'
import StyledNewsCard from './style'

import useScrollAnimation from 'commons/hooks/useScrollAnimation'

const NewsCard = ({ datum: { title, url, urlToImage, source } }) => {

  const elementRef = useScrollAnimation()

  return (
    <StyledNewsCard ref={elementRef}>
      <a href={url} target="blank">
        <article className="news-card__article">

          <div className="news-card__image-container">
            <img src={urlToImage} alt="" className="news-card__image" />
          </div>

          <header className="news-card__header">
            <h1 className="news-card__title">{title}</h1>
            <div className="news-card__source">
              <span>{source.name}</span>
            </div>
          </header>
        </article>
      </a>
    </StyledNewsCard>
  )
}

export default NewsCard

