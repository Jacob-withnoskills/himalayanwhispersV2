import React, { useEffect, useState } from 'react';
import Button from './Button';
import './css/Hero.css';
import PerksSection from './PerksSections';
import DestinationsSection from './DestinationsSection';
import FooterSection from './FooterSection';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

export default function Hero() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleDiscoverClick = () => {
        navigate('/contact');
    };

    if (loading) {
        return <Loader />;
    }

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

            <header className="hero">
                <div className="overlay">
                    <h4>DISCOVER THE LAND OF THE THUNDER DRAGON</h4>
                    <h1>ADVENTURE IN BHUTAN</h1>
                    <h4>
                        Embark on a journey through ancient monasteries, misty mountains, and hidden Himalayan trails. Bhutan isn't just a destination, it's a soul-stirring adventure where nature meets spirituality.
                    </h4>
                    <Button text="Discover Now" onClick={handleDiscoverClick} />
                </div>
            </header>

            <DestinationsSection />
            <PerksSection />
            <FooterSection />
        </>
    );
}
