import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/ContactUs';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import About from './components/About';
import FAQ from './components/FAQ';
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Himalayan Whispers | Explore Bhutan with Us</title>
        <meta name="description" content="Plan your next trip to Bhutan with Himalayan Whispers. Customized tour packages, expert guides, and unforgettable experiences await you." />
        <meta name="keywords" content="Bhutan travel, Himalayan tours, Bhutan holiday packages, Bhutan travel agency, Himalayan Whispers" />
        <meta name="author" content="Himalayan Whispers" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Himalayan Whispers | Bhutan Tours" />
        <meta property="og:description" content="Discover the best of Bhutan with Himalayan Whispers. Plan your spiritual, adventure or cultural tour today!" />
        <meta property="og:image" content="https://www.himalayanwhispers.com/logo.jpg" />
        <meta property="og:url" content="https://www.himalayanwhispers.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Himalayan Whispers | Bhutan Tours" />
        <meta name="twitter:description" content="Travel to Bhutan with expert-curated packages from Himalayan Whispers." />
        <meta name="twitter:image" content="https://www.himalayanwhispers.com/logo.jpg" />

    
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Himalayan Whispers",
            "url": "https://www.himalayanwhispers.com",
            "logo": "https://www.himalayanwhispers.com/logo.jpg",
            "sameAs": [
              "https://www.facebook.com/himalayanwhispers",
              "https://www.instagram.com/himalayanwhispers"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+97577765137",
              "contactType": "Customer Service",
              "areaServed": ["IN", "US", "UK", "CA", "AU", "FR", "DE", "IT", "ES", "SG", "NZ", "AE", "ZA", "JP", "CN", "TH", "MY", "NL", "CH"]

            }
          }
        `}</script>
      </Helmet>

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
    </>
  );
}

export default App;
