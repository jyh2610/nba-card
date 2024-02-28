import axios from "axios";

const instanceAPI = axios.create({
  baseURL: "https://api.balldontlie.io/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: "0b033bf6-33e4-4fce-a96c-71fef893c250",
  },
});
const interceptors = instanceAPI.interceptors;
interceptors.request.use((config) => {
  return config;
});

interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.message),
);
export default instanceAPI;
