import { render } from '@testing-library/react';
import { testHome } from 'views/Home.test';

import App from './App';

describe('App tests', () => {
  test.skip('has correct document title', () => {
    expect(document.title).toBe('Masters of tools');
  });

  test('renders Home view', () => {
    render(<App />);
    testHome();
  });
});
