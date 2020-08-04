class InvalidCountryCodeError extends Error {
  constructor() {
    super(`The country code inserted is not valid or is not supported. Please check out our "Countries' Code List" to see the available countries.`)
    this.name = 'InvalidCountryCodeError'
  }
}
class NoConnectionError extends Error {
  constructor() {
    super(`No internet connection`)
    this.name = 'NoConnectionError'
  }
}

export default {
  InvalidCountryCodeError,
  NoConnectionError
}