import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.7.55.231:5000",
});

export default instance;
