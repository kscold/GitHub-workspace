import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './page/About';
import Home from './page/Home';
import Profile from './page/Profile';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profiles/:username" element={<Profile />} />
    </Routes>
  );
};

export default App;
