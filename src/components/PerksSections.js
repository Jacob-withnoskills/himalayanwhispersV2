import React from 'react';
import './css/PerksSection.css';

import support from './images/support.svg';
import safety from './images/safety.svg';
import itinerary from './images/itinerary.svg';
import destination from './images/destination.svg';
import experiences from './images/experiences.svg';
import hasslefree from './images/hasslefree.svg';





export default function PerksSection() {
    return (
        <section className="perks-section">
            <h2 className="section-title">Perks of traveling <span>with Us</span></h2>
            <div className="perks-grid">
                <div className="perk">
                    <img src={destination} alt="Unique Destinations" />
                    <h3>Unique Destinations</h3>
                    <p>Discover hidden gems and off-the-beaten-path locations that typical tourists miss, ensuring a truly unique and memorable travel experience.</p>
                </div>
                <div className="perk">
                    <img src={itinerary} alt="Personalised Itineraries" />
                    <h3>Personalised Itineraries</h3>
                    <p>Enjoy tailored travel plans designed to match your interests and preferences, providing a customized adventure that caters specifically to you.</p>
                </div>
                <div className="perk">
                    <img src={hasslefree} alt="Hassle Free" />
                    <h3>Hassle Free</h3>
                    <p>Experience seamless travel arrangements with all logistics handled, allowing you to focus on enjoying your journey without any worries.</p>
                </div>
                <div className="perk">
                    <img src={experiences} alt="100 Plus Experiences" />
                    <h3>100 Plus Experiences</h3>
                    <p>Select from a diverse range of over 100 curated trips, offering something for every traveler, whether you're seeking adventure, relaxation, or cultural immersion.</p>
                </div>
                
                <div className="perk">
                    <img src={support} alt="24/7 Support" />
                    <h3>24/7 Support</h3>
                    <p>Our dedicated support team is available around the clock to assist you with any travel needs or emergencies during your trip.</p>
                </div>
                <div className="perk">
                    <img src={safety} alt="Safety First" />
                    <h3>Safety First</h3>
                    <p>We prioritize your safety with trusted guides, vetted accommodations, and strict health protocols for peace of mind throughout your journey.</p>
                </div>
            </div>
        </section>
    );
}