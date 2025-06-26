import axios from "axios";
import { getItem } from "../utils/persistanceStorage";

axios.defaults.baseURL = "http://localhost:3000/api";

axios.interceptors.request.use(
  (config) => {
    const token = getItem("token");
    if (token) config.headers["Authorization"] = `Token ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios