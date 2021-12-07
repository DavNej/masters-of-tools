import api from './axiosInstance';

export function resources(payload) {
  return api.post('/resources', payload);
}

export default {
  resources,
};
