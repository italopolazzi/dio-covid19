const path = 'https://coronavirus-19-api.herokuapp.com/countries'

const headers = {
  method: 'get',
  mode: 'cors',
  cache: 'default'
}

const getCountry = async (country) => {
  const response = await fetch(`${path}/${encodeURI(country)}`, headers)
  const json = await response.json()
  return json
}

export default {
  getCountry
}