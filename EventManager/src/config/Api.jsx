import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  })

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token invalide ou expiré → on le supprime
      localStorage.removeItem('token');
      // Optionnel : rediriger l'utilisateur vers /login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);



export default axiosInstance;