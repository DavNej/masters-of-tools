import api from './axiosInstance';

export function resources(resourceId, params) {
  const url = 'https://davnej.com/api-1';
  return api.get(url, { params });
}

// export function resources(resourceId, params) {
//   const url = resourceId ? `/resources/${resourceId}` : '/resources'
//   return api.get(url, { params });
// }

export default {
  resources,
};
