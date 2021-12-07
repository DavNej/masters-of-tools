import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './views/Home';
import SocialMedia from './views/SocialMedia';

export default function Router() {
  return (
    <Routes>
      <Route path="*" element={<p>The page you are looking for does not seem to exist</p>} />

      <Route path="/" element={<Navigate to="/social-media" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/social-media" element={<SocialMedia />} />
    </Routes>
  );
}
