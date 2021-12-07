import axios from 'axios';

import { API_BASE_URL as baseURL } from 'utils/env';

const api = axios.create({
  baseURL,
  responseEncoding: 'utf8',
  headers: {
    post: { 'Content-Type': 'application/json' },
  },
});

api.interceptors.response.use(
  response => response,
  // response => keysToCase(response.data, snakeToCamel),
  error => {
    const message = error.response?.data?.detail || error.message;
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({ message });
  },
);

export default api;
