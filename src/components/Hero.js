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
                <title>Himalayan Whispers | Adventure in Bhutan</title>
                <meta name="description" content="Explore Bhutan's magical landscapes, unique culture, and thrilling adventures with our curated travel experiences." />
                <meta name="keywords" content="Bhutan travel, Bhutan trekking, Paro, Thimphu, Himalayan adventure, TravelWithUs, Himalayan Whispers" />
                <meta name="robots" content="index, follow" />

           
                <meta property="og:title" content="Himalayan Whispers | Adventure in Bhutan" />
                <meta property="og:description" content="Discover Bhutan’s beauty with Himalayan Whispers. Curated tours, cultural experiences, and nature-packed itineraries." />
                <meta property="og:image" content="https://www.himalayanwhispers.com/og-image.jpg" />
                <meta property="og:url" content="https://www.himalayanwhispers.com/" />
                <meta property="og:type" content="website" />

            
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Himalayan Whispers | Adventure in Bhutan" />
                <meta name="twitter:description" content="Plan your dream Bhutan trip with Himalayan Whispers. Mystical, peaceful, unforgettable." />
                <meta name="twitter:image" content="https://www.himalayanwhispers.com/twitter-image.jpg" />

         
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "TravelAgency",
                        "name": "Himalayan Whispers",
                        "url": "https://www.himalayanwhispers.com",
                        "logo": "https://www.himalayanwhispers.com/logo.png",
                        "sameAs": [
                            "https://www.facebook.com/himalayanwhispers",
                            "https://www.instagram.com/himalayanwhispers"
                        ],
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+97577765137",
                            "contactType": "Customer Service",
                            "areaServed": [
                                "IN", "US", "UK", "CA", "AU", "FR", "DE", "IT", "ES",
                                "SG", "NZ", "AE", "ZA", "JP", "CN", "TH", "MY", "NL", "CH"
                            ]
                        }
                    }
                `}</script>
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
