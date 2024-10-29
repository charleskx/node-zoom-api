import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.zoom.us/v2',
})

export { api }
