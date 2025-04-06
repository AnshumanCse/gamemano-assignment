// lib/axiosInstance.ts
import axios, { AxiosInstance } from "axios";

const baseURL = "https://dummyjson.com";

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, 
});

// Optional: Add interceptors for request and response
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Add auth token if required
//     const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
//     if (token && config.headers) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Optionally handle global errors here
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
