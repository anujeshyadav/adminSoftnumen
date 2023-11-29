import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.7.55.231:5000/",
  // baseURL: "http://65.0.96.247:8000/",
});

export default instance;
