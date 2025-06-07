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
        <title>DrukQuest | Explore Bhutan with Us</title>
        <meta
          name="description"
          content="Plan your next trip to Bhutan with DrukQuest. Customized tour packages, expert guides, and unforgettable experiences await you."
        />
        <meta
          name="keywords"
          content="Bhutan travel, Bhutan tours, Bhutan holiday packages, Bhutan travel agency, DrukQuest"
        />
        <meta name="author" content="DrukQuest" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="DrukQuest | Bhutan Tours" />
        <meta
          property="og:description"
          content="Discover the best of Bhutan with DrukQuest. Plan your spiritual, adventure or cultural tour today!"
        />
        <meta property="og:image" content="https://www.drukquest.com/logo.jpg" />
        <meta property="og:url" content="https://www.drukquest.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DrukQuest | Bhutan Tours" />
        <meta
          name="twitter:description"
          content="Travel to Bhutan with expert-curated packages from DrukQuest."
        />
        <meta name="twitter:image" content="https://www.drukquest.com/logo.jpg" />

        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "DrukQuest",
            "url": "https://www.drukquest.com",
            "logo": "https://www.drukquest.com/logo.jpg",
            "sameAs": [
              "https://www.facebook.com/drukquest",
              "https://www.instagram.com/drukquest"
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

      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6221994646684060"
        crossorigin="anonymous"></script>

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
