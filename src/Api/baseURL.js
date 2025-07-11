import axios from "axios";

const baseURL = axios.create({
  // baseURL: "http://127.0.0.1:8000",
  // baseURL: "http://192.168.100.180:8000",
  // baseURL: "http://192.168.100.214:8000",
  // baseURL: "http://localhost:8000",
  // baseURL: "http://192.168.100.18:8000",
  // baseURL: "http://192.168.100.201:4000/",
  baseURL: "https://fingerprint-backend-1.onrender.com/",

  // baseURL: "https://test2-3-aetx.onrender.com/",
  // baseURL: "https://jsonplaceholder.typicode.com/posts",
});

export default baseURL;
