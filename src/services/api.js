import axios from 'axios'

export const api = axios.create({
  baseURL: "https://food-explorer-u7ik.onrender.com"
})