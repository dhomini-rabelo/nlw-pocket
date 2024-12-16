import axios from "axios"

export const api = axios.create({
  baseURL: " https://28f16a60f4cdb6.lhr.life/",
  timeout: 5000,
})
