// App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
import Home from './screens/home/Home';
import Ads from './screens/ads/Ads';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ads" element={<Ads />} />
    </Routes>
  );
};

export default App;