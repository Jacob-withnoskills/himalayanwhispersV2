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
        <title>DrukQuest | Govt-Verified Bhutan Tour Packages & Travel Deals</title>
        <meta name="description" content="Government-verified Bhutan travel packages with DrukQuest. Explore cheap, reliable, and curated Bhutan tours—better than MakeMyTrip. Book now!" />
        <meta name="keywords" content="Bhutan travel, Bhutan tour, cheap Bhutan packages, Bhutan trekking, government approved Bhutan travel, Paro tour, Thimphu, Himalayan adventure, DrukQuest" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook/LinkedIn) */}
        <meta property="og:title" content="DrukQuest | Govt-Verified Bhutan Tour Packages & Travel Deals" />
        <meta property="og:description" content="Book Bhutan tour packages with DrukQuest. Trusted, budget-friendly, and government-approved adventures await in the Himalayas." />
        <meta property="og:image" content="https://www.drukquest.com/og-image.jpg" />
        <meta property="og:url" content="https://www.drukquest.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DrukQuest | Govt-Verified Bhutan Tour Packages" />
        <meta name="twitter:description" content="Better than MakeMyTrip. Budget-friendly, official Bhutan travel packages by DrukQuest." />
        <meta name="twitter:image" content="https://www.drukquest.com/twitter-image.jpg" />

        {/* Structured Data (Schema.org) */}
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
