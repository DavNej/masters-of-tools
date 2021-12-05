import { screen } from '@testing-library/react';

import { renderWithRouter } from 'test-utils';
import { testHome } from 'views/Home.test';

import Router from './Router';

describe('Router tests', () => {
  test('renders 404 element', () => {
    const route = '/unexisting-path';
    renderWithRouter(<Router />, { route });

    const notFoundText = screen.getByText('The page you are looking for does not seem to exist');
    expect(notFoundText).toBeInTheDocument();
  });

  test('redirects "/" to "/home"', () => {
    const route = '/';
    renderWithRouter(<Router />, { route });

    testHome();
  });

  test('renders Home view', () => {
    const route = '/home';
    renderWithRouter(<Router />, { route });

    testHome();
  });
});
