import React from 'react'
import StyledNewsCard from './style'

const NewsCard = ({ datum }) => {
  const { title, url, urlToImage, source, publishedAt } = datum

  const getDate = date => {
    let dd, mm, yyyy, _ = new Date(date)

    dd = _.getDate()
    mm = _.getMonth()
    yyyy = _.getFullYear()

    return `${dd}/${mm}/${yyyy}`
  }

  return (
    <StyledNewsCard>
      <a href={url} target="blank">
        <article className="relative p-8">

          <div className="image shadow rounded-lg overflow-hidden">
            <img src={urlToImage} alt="" className="w-full h-full object-cover" />
          </div>

          <header className="m-6 p-6 shadow-2xl relative z-10 bg-white">
            <div className="flex justify-between">
              <time className="font-thin" datatime={publishedAt}>{getDate(publishedAt)}</time>
              <span className="font-thin">{source.name}</span>
            </div>
            <h1 className="font-semibold mt-4 whitespace-normal">{title}</h1>
          </header>
        </article>
      </a>
    </StyledNewsCard>
  )
}

export default NewsCard

