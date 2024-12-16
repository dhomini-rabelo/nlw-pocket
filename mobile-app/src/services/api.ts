import axios from "axios"

export const api = axios.create({
  baseURL: "https://2e091ae36f03f2.lhr.life",
  timeout: 5000,
})
