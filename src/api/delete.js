import api from './axiosInstance';

export function resources(resourceId) {
  return api.delete(`/resources/${resourceId}`);
}

export default {
  resources,
};
