import React from 'react'
import StyledNewsCard from './style'

import useScrollAnimation from 'commons/hooks/useScrollAnimation'

const NewsCard = ({ datum }) => {
  const { title, url, urlToImage, source } = datum

  const elementRef = useScrollAnimation()

  return (
    <StyledNewsCard ref={elementRef}>
      <a href={url} target="blank">
        <article className="relative p-8">

          <div className="news-card-image rounded-lg overflow-hidden">
            <img src={urlToImage} alt="" className="w-full h-full object-cover" />
          </div>

          <header className="news-card-header m-6 p-6 shadow-xl relative z-10 bg-white">
            <h1 className="news-card-title font-semibold mb-4 whitespace-normal">{title}</h1>
            <div className="news-card-footer w-full text-right">
              <span className="font-thin">{source.name}</span>
            </div>
          </header>
        </article>
      </a>
    </StyledNewsCard>
  )
}

export default NewsCard

