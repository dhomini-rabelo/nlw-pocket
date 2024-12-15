import axios from "axios"

export const api = axios.create({
  baseURL: "https://bc2ea6df5a3c9f.lhr.life",
  timeout: 500,
})
