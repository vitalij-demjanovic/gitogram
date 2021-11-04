import axios from 'axios'

const baseUrl = 'https://api.github.com'

export const makeRequest = ({
  url, method = 'get', data = {}, headers = {}
}) => axios({
  url,
  method,
  data,
  baseUrl,
  headers
})
