import axios from "axios";

const instanceAPI = axios.create({
  baseURL: "https://www.balldontlie.io/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
const interceptors = instanceAPI.interceptors;
interceptors.request.use((config) => {
  return config;
});

interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.message)
);
export default instanceAPI;
