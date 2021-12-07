import api from './axiosInstance';

export function resources(resourceId, payload) {
  return api.patch(`/resources/${resourceId}`, payload);
}

export default {
  resources,
};
