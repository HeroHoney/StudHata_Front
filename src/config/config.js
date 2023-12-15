import axios from "axios";
export const url = "https://studhata.kz/api";
export const axiosInstance = axios.create({
  baseURL: url,
});
