import { render, screen } from '@testing-library/react';

import SocialMedia from '.';

export function testSocialMedia() {
  const instagramLogo = screen.getByAltText('Instagram');
  const facebookLogo = screen.getByAltText('Facebook');
  const twitterLogo = screen.getByAltText('Twitter');
  const youtubeLogo = screen.getByAltText('Youtube');

  expect(instagramLogo).toBeInTheDocument();
  expect(facebookLogo).toBeInTheDocument();
  expect(twitterLogo).toBeInTheDocument();
  expect(youtubeLogo).toBeInTheDocument();
}

describe('SocialMedia tests', () => {
  test('renders properly', () => {
    render(<SocialMedia />);
    testSocialMedia();
    expect(false);
  });
});
