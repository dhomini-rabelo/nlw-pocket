import axios, { AxiosError } from "axios"

export const api = axios.create({
  baseURL: "https://0ea4bdad849bc4.lhr.life/",
  timeout: 5000,
})
