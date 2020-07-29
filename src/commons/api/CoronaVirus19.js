const { REACT_APP_NEWS_API_KEY } = process.env

const newsApiPath = country => `https://newsapi.org/v2/top-headlines?q=COVID&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_API_KEY}&pageSize=20&page=1&country=${country}`
const reportsApiPath = country => `https://coronavirus-19-api.herokuapp.com/countries/${encodeURI(country)}`


const headers = {
  method: 'get',
  mode: 'cors',
  cache: 'default'
}

const getCountryReports = async (country) => {
  const response = await fetch(reportsApiPath(country), headers)
  const json = await response.json()
  return json
}

const getCountryNews = async (country) => {
  const response = await fetch(newsApiPath(country), headers)
  const json = await response.json()
  return json.articles
}

export default {
  getCountryReports, getCountryNews
}