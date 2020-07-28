import React, { useEffect, useState } from 'react'
import StyledNewsCard from './style'
import Api from 'commons/api/CoronaVirus19'


const NewsCard = ({ country }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    Api.getCountryNews(country).then(data => {
      console.log(data);
      setData(data)
    })
  }, [])

  const ApiData = () => {

    if (data) {
      return (
        data.map((datum, index) => {
          const { title, url, src: urlToImage, author, description } = datum
          return (
            <article key={index} class="api-data">
              <header><h1>{title}</h1></header>
              <main>
                <p>{description}</p>
              </main>
              <footer>
                {author}
              </footer>
            </article>
          )
        })
      )
    }


    /**
    author: "https://www.facebook.com/bbcnews"
    content: "Image copyrightReuters
    ↵The UK government decision to impose a two week quarantine on everyone arriving from Spain was "unjust", the country's prime minister has said.
    ↵Pedro Sánchez said tourists in… [+5408 chars]"
    description: "Pedro Sánchez says most areas are safer than the UK, and he hopes for a rethink on the Covid rules."
    publishedAt: "2020-07-28T02:52:07Z"
    source: {id: null, name: "BBC News"}
    title: "Coronavirus: UK quarantine restrictions unjust - Spain PM - BBC News"
    url: "https://www.bbc.com/news/uk-53562603"
    urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/1825B/production/_113670989_mediaitem113670988.jpg"
     */

    return (
      <>
        No available data
      </>
    )
  }

  return (
    <StyledNewsCard>
      <ApiData />
    </StyledNewsCard>
  )
}

export default NewsCard