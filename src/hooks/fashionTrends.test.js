test.skip('to delete', () => {});

// import React, { useEffect } from 'react';
// import { render, waitFor } from '@testing-library/react';

// import { ReactRouterReactQueryProvider, ReactQueryProvider } from 'mocks/providers';
// import { mongoId, md5 } from 'mocks/misc';

// import api from 'api';

// import {
//   useGetFashionTrendsFilters,
//   useGetFashionTrends,
//   useGetSingleFashionTrend,
//   usePatchFashionTrends,
//   usePatchFashionTrendsImages,
//   usePostFashionTrends,
// } from './fashionTrends';

// jest.mock('api');

// describe('Fashion trends hooks', () => {
//   test('useGetFashionTrendsFilters', async () => {
//     function TestComp() {
//       const { data: filters } = useGetFashionTrendsFilters();
//       expect(filters).toBeInstanceOf(Object);
//       return null;
//     }

//     render(<TestComp />, { wrapper: ReactQueryProvider });

//     await waitFor(() => {
//       expect(api.get.fashionTrendsFilters).toHaveBeenCalledTimes(1);
//     });
//   });

//   test('useGetFashionTrends', async () => {
//     const params = { projection: ['_id', 'name'] };

//     function TestComp() {
//       useGetFashionTrends(params);
//       return null;
//     }

//     render(<TestComp />, { wrapper: ReactQueryProvider });

//     await waitFor(() => {
//       expect(api.get.fashionTrends).toHaveBeenCalledTimes(1);
//       expect(api.get.fashionTrends).toHaveBeenCalledWith(params);
//     });
//   });

//   test('useGetSingleFashionTrend', async () => {
//     const wrapper = ReactRouterReactQueryProvider(
//       [`/fashion_trends/${mongoId}`],
//       '/fashion_trends/:singleTrendId',
//     );

//     const params = { projection: ['_id', 'name'] };

//     function TestComp() {
//       useGetSingleFashionTrend(mongoId, params);
//       return null;
//     }

//     render(<TestComp />, { wrapper });

//     await waitFor(() => {
//       expect(api.get.singleFashionTrend).toHaveBeenCalledTimes(1);
//       expect(api.get.singleFashionTrend).toHaveBeenCalledWith(mongoId, params);
//     });
//   });

//   test('usePatchFashionTrends', async () => {
//     const wrapper = ReactRouterReactQueryProvider(
//       [`/fashion_trends/${mongoId}`],
//       '/fashion_trends/:singleTrendId',
//     );

//     const payload = { md5 };

//     function TestComp() {
//       const { mutate } = usePatchFashionTrends();
//       useEffect(() => {
//         mutate(payload);
//       }, []);
//       return null;
//     }

//     render(<TestComp />, { wrapper });

//     await waitFor(() => {
//       expect(api.patch.singleFashionTrend).toHaveBeenCalledTimes(1);
//       expect(api.patch.singleFashionTrend).toHaveBeenCalledWith(mongoId, payload);
//     });
//   });

//   test('usePatchFashionTrendsImages', async () => {
//     const wrapper = ReactRouterReactQueryProvider(
//       [`/fashion_trends/${mongoId}`],
//       '/fashion_trends/:singleTrendId',
//     );

//     const payload = { md5 };

//     function TestComp() {
//       const { mutate } = usePatchFashionTrendsImages();
//       useEffect(() => {
//         mutate(payload);
//       }, []);
//       return null;
//     }

//     render(<TestComp />, { wrapper });

//     await waitFor(() => {
//       expect(api.patch.singleFashionTrendImages).toHaveBeenCalledTimes(1);
//       expect(api.patch.singleFashionTrendImages).toHaveBeenCalledWith(mongoId, payload);
//     });
//   });

//   test('usePostFashionTrends', async () => {
//     const payload = {
//       fashionTrends: [{ name: 'name', category: 'dress', gender: 'female', image: md5 }],
//     };

//     function TestComp() {
//       const { mutate } = usePostFashionTrends();
//       useEffect(() => {
//         mutate(payload);
//       }, []);
//       return null;
//     }

//     render(<TestComp />, { wrapper: ReactQueryProvider });

//     await waitFor(() => {
//       expect(api.post.fashionTrends).toHaveBeenCalledTimes(1);
//       expect(api.post.fashionTrends).toHaveBeenCalledWith(payload);
//     });
//   });
// });
