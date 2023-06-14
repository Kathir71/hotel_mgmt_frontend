import axios from "axios";
const api = axios.create({
    baseURL:"http://localhost:7777",
    setTimeout:1000000000,
})
export default api;