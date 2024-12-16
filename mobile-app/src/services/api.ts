import axios from "axios"

export const api = axios.create({
  baseURL: "https://18adc6ce9aac84.lhr.life",
  timeout: 5000,
})
