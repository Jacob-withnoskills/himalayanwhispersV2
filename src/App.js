
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/ContactUs';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import About from './components/About';
import FAQ from './components/FAQ';


function App() {
  return (
    <Router>
      <Navbar />
 
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/faq" element={<FAQ />} />

      </Routes>
    </Router>
  );
}

export default App;
