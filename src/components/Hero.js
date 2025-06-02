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
                <title> Himalayan Whispers | Adventure in Bhutan </title>
                <meta name="description" content="Explore Bhutan's magical landscapes, unique culture, and thrilling adventures with our curated travel experiences." />
                <meta name="keywords" content="Bhutan travel, Bhutan trekking, Paro, Thimphu, Himalayan adventure, TravelWithUs, Himalayan Whispers" />
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
