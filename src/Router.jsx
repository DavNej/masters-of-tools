import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './views/Home';

export default function Router() {
  return (
    <Routes>
      <Route path="*" element={<p>The page you are looking for does not seem to exist</p>} />

      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
