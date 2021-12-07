import { BrowserRouter } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';

// import NavBar from 'components/NavBar';
import Router from './Router';

import './App.css';

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//       retry: 0,
//     },
//   },
// });

export default function App() {
  return (
    <BrowserRouter>
      {/* <QueryClientProvider client={queryClient}> */}
      <main>
        {/* <NavBar /> */}
        {/* <div className="Content"> */}
        <Router />
        {/* </div> */}
      </main>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      {/* </QueryClientProvider> */}
    </BrowserRouter>
  );
}
