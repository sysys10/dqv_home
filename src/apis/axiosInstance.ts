import axios from 'axios'

export const dqvHomeApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
})
