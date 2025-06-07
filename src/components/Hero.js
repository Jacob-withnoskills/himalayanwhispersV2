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

    useEffect(() => {
        // Safe Google Analytics setup
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            window.dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-VJ3Z2ZN8MX');
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

                {/* Open Graph */}
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

                {/* Schema.org Structured Data */}
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "TravelAgency",
                      "name": "DrukQuest",
                      "url": "https://www.drukquest.com",
                      "logo": "https://www.drukquest.com/logo.jpg",
                      "image": "https://www.drukquest.com/og-image.jpg",
                      "description": "DrukQuest is a trusted and government-verified Bhutan travel agency offering affordable, curated tour packages and local experiences.",
                      "address": {
                        "@type": "PostalAddress",
                        "addressCountry": "BT"
                      },
                      "telephone": "+97577765137",
                      "contactPoint": {
                        "@type": "ContactPoint",
                        "contactType": "Customer Service",
                        "telephone": "+97577765137"
                      },
                      "sameAs": [
                        "https://www.facebook.com/drukquest",
                        "https://www.instagram.com/drukquest"
                      ]
                    }
                    `}
                </script>

                {/* Google AdSense */}
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6221994646684060"
                    crossOrigin="anonymous"></script>

                {/* Google Analytics */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-VJ3Z2ZN8MX"></script>
            </Helmet>

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
