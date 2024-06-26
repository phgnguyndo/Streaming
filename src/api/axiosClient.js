import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://192.168.95.37:8888",
  headers: {
    "Content-Type": "application/json",
  },
});
// export const axiosFormData= axios.create({
//   baseURL: 'https://localhost:7278/api',
//   headers: {
//       'Content-Type': 'multipart/form-data', // Thay đổi content type cho FormData
//   },
// });
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
