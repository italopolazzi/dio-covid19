import news_response from 'commons/constants/news_response'
import reports_response from 'commons/constants/reports_response'

const isDevelopment = process.env.NODE_ENV === 'development'
const { REACT_APP_NEWS_API_KEY } = process.env


const newsApiPath = country => `https://newsapi.org/v2/top-headlines?q=COVID&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_API_KEY}&pageSize=20&page=1&country=${country}`
const reportsApiPath = country => `https://coronavirus-19-api.herokuapp.com/countries/${encodeURI(country)}`


const headers = {
  method: 'get',
  mode: 'cors',
  cache: 'default'
}


const giveIsEmptyResponse = () => ({ type: "is-empty" })
const giveIsCompletedResponse = payload => ({ type: "is-completed", payload })
const giveIsErrorResponse = error => ({ type: "is-error", payload: error })

const giveResponse = (payload = null) => {
  if (!payload) return giveIsEmptyResponse()
  if (Array.isArray(payload) && payload.length) return giveIsCompletedResponse(payload)
  if (Object.keys(payload).length) return giveIsCompletedResponse(payload)
  return giveIsEmptyResponse()
}

const getCountryReports = async (country) => {
  if (isDevelopment) {
    return giveResponse(reports_response)
  }
  try {
    const response = await fetch(reportsApiPath(country), headers)
    const json = await response.json()
    return giveResponse(json)

  } catch (error) {
    return giveIsErrorResponse(error)
  }
}

const getCountryNews = async (country) => {
  if (isDevelopment) {
    return giveResponse(news_response.articles)
  }

  try {
    const response = await fetch(newsApiPath(country), headers)
    const json = await response.json()
    return giveResponse(json.articles)
  } catch (error) {
    return giveIsErrorResponse(error)
  }
}

export default {
  getCountryReports, getCountryNews
}