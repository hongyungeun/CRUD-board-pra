import axios from 'axios'

// const baseurl = process.env.REACT_APP_LOCAL_HOST

const api = axios.create({
  baseURL:`http://localhost:8080/api/test`,
  headers:{'Content-type':'application/json'}
})
export default api