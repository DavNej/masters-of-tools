import { render, screen } from '@testing-library/react';

import Home from './Home';

export function testHome() {
  const homeText = screen.getByText('Hello, this is home');
  expect(homeText).toBeInTheDocument();
}

describe('Home tests', () => {
  test('renders properly', () => {
    render(<Home />);
    testHome();
  });
});
