import React from 'react';
import { element, instanceOf } from 'prop-types';
import { MemoryRouter, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

jest.mock('api');

export function ReactQueryProvider({ client, children }) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

ReactQueryProvider.propTypes = {
  children: element.isRequired,
  client: instanceOf(QueryClient),
};

ReactQueryProvider.defaultProps = {
  client: new QueryClient(),
};

export function ReactRouterProvider(initialEntries = [], path) {
  return function wrapper({ children }) {
    return (
      <MemoryRouter initialEntries={initialEntries}>
        <Route path={path} element={children} />
      </MemoryRouter>
    );
  };
}

export function ReactRouterReactQueryProvider(initialEntries, path, client) {
  return function wrapper({ children }) {
    const queryClient = new QueryClient();

    return (
      <MemoryRouter initialEntries={initialEntries}>
        <Route exact path={path}>
          <QueryClientProvider client={client || queryClient}>{children}</QueryClientProvider>
        </Route>
      </MemoryRouter>
    );
  };
}
