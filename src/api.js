import axios from "axios";
const base = "http://localhost:3000";
const axiosBase = axios.create({
  baseURL: base,
  withCredentials: false,
  crossDomain: true,
  headers: {
    "Content-Type": "application/json",
    "accept-language": "en",
    "Access-Control-Allow-Origin": "true",
  },
});

export default axiosBase;
