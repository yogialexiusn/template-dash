import axios from 'axios';

const getAuthToken = () => {
  return window.localStorage.getItem("auth_token");
};

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Jika respons status 401, hapus token dan redirect ke halaman login
      window.localStorage.removeItem("auth_token"); // Hapus token
      window.location.href = '/auth-login'; // Redirect ke halaman login
    }
    return Promise.reject(error); // Lanjutkan dengan error handling
  }
);
export default axiosInstance;