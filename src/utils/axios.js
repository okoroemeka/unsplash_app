import axios from 'axios';

const instance = axios.create({
  baseURL: `https://api.unsplash.com/photos/`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
  },
});

// instance.interceptors.request.use(
//   (config) => {
//     const configInstance = { ...config };
//     configInstance.headers.Authorization = authUtils.getUserToken();
//     return configInstance;
//   },
//   (error) => Promise.reject(error)
// );
export default instance;
