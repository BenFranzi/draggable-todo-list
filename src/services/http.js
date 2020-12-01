import token from '@/services/token';
import axios from 'axios';

const instance = axios.create();
instance.defaults.baseURL = 'http://localhost:3000';
instance.interceptors.request.use((config) => {
  const jwt = token.get();
  config.headers.authorization = jwt ? `Bearer ${jwt}` : null;
  return config;
});

export default instance;
