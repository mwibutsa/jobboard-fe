import { default as Axios } from "axios";
import "dotenv/config";

const baseURL = process.env.REACT_APP_API_URL;

const axiosInstance = Axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("_token") || process.env.REACT_APP_TEST_TOKEN;
    if (token) {
      return {
        ...config,
        headers: {
          "x-token": `Bearer ${token}`,
        },
      };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => Promise.reject(error)
// );

export default axiosInstance;
