import { useQuery } from 'react-query';
// import { useMutation, useQuery } from 'react-query';
// import { useParams } from 'react-router-dom';

import api from 'api';

export function GETResources({ queryKey }) {
  const [, params] = queryKey;
  return api.get.resources(params);
}

// export function PATCHSingleFashionTrend(resourceId) {
//   return payload => api.patch.singleFashionTrend(resourceId, payload);
// }

/**
 * Resources hook
 */

export function useGetResources({ resourceId = null, queryParams = {}, options = {} } = {}) {
  const queryIdentifier = resourceId ? 'GET /resources' : `GET /resources/${resourceId}`;
  const initialData = { resources: [] };

  return useQuery([queryIdentifier, resourceId, queryParams], GETResources, {
    initialData,
    ...options,
  });
}

// export function usePostResources(options = {}) {
//   return useMutation(api.post.resources, options);
// }

// export function usePatchResources(options = {}) {
//   const { resourceId } = useParams();
//   return useMutation(PATCHSingleFashionTrend(resourceId), options);
// }
