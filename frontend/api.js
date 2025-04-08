// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api', // Cambia esto si tienes otro URL para el backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;