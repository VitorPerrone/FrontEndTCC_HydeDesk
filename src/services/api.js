import axios from "axios";

console.log(import.meta.env.VITE_REACT_API)

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_API,
});

export default api;
