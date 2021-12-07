import { ReactComponent as InstagramLogo } from 'assets/instagram-logo.svg';
import { ReactComponent as FacebookLogo } from 'assets/facebook-logo.svg';
import { ReactComponent as TwitterLogo } from 'assets/twitter-logo.svg';
import { ReactComponent as YoutubeLogo } from 'assets/youtube-logo.svg';

import './index.css';

// eslint-disable-next-line react/prop-types
export function SocialMediaLink({ href, logo, name }) {
  return (
    <div className="SocialMediaLink">
      <a className="Tile" target="_blank" rel="noreferrer" href={href} alt={name} title={name}>
        {logo}
      </a>
    </div>
  );
}

export default function SocialMedia() {
  return (
    <div className="SocialMedia">
      <SocialMediaLink
        name="Instagram"
        href="https://www.instagram.com/mastersoftools/"
        logo={<InstagramLogo />}
      />
      <SocialMediaLink
        name="Facebook"
        href="https://www.facebook.com/profile.php?id=100073636592253"
        logo={<FacebookLogo />}
      />
      <div className="title">
        <div>
          <h2>Masters of tools</h2>
          <p>
            Peace starts from within. A great future is at our reach if we focus and envision it
          </p>
        </div>
      </div>
      <SocialMediaLink
        name="Twitter"
        href="https://twitter.com/mastersoftools"
        logo={<TwitterLogo />}
      />
      <SocialMediaLink
        name="Youtube"
        href="https://www.youtube.com/channel/UCDgz0S69_enqPZW1ODG6lSQ"
        logo={<YoutubeLogo />}
      />
    </div>
  );
}
