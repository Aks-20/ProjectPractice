import axios from "axios"; 
import { COINGECKO_API_URL } from "./Constants.js";

const axiosInstance=axios.create({
    baseURL:COINGECKO_API_URL
})
export default axiosInstance;