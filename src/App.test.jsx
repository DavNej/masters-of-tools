import { render } from '@testing-library/react';
import { testHome } from 'views/Home.test';

import App from './App';

describe('App tests', () => {
  test('renders Home view', () => {
    render(<App />);
    testHome();
  });
});
