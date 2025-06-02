import React from 'react';
import './css/About.css';
import guideImg from './images/guide.jpg';
import travelMapImg from './images/about.jpg';
import FooterSection from './FooterSection';

export default function About() {
    return (
        <div className="about-wrapper">
            <section className="about-hero">
                <h1>About Us</h1>
                <p>
                    We offer the best and most affordable packages for exploring Bhutan. From cultural journeys to adventurous escapes — we’ve got you covered.
                </p>
                <a href="/" className="back-btn">Back to Home</a>
            </section>

            <section className="about-main">
                <div className="about-image-block">
                    <img src={guideImg} alt="Bhutan Tour Guide" className="main-img" />
                    <img src={travelMapImg} alt="Travel Map" className="overlay-img" />
                </div>

                <div className="about-text-block">
                    <h2>
                        Explore Bhutan with Us<br />
                        <span className="subhead">Affordable. Authentic. Local.</span>
                    </h2>
                    <p>
                        Himalayan Whispers is your gateway to discovering the hidden gems of Bhutan. We provide <strong>low-cost tour packages</strong> for both Indian and foreign travelers (see <a href="/faq">FAQ</a> for travel guidelines). Our service includes <strong>car bookings</strong>, <strong>travel guides</strong>, and cultural insights to ensure a seamless journey.
                    </p>
                    <p>
                        <strong>Coming Soon:</strong> Rent a bike and cruise across Bhutan at your own pace!
                    </p>
                    <a className="read-more-btn" href="/packages">Explore Packages</a>
                </div>
            </section>

            <section className="about-achievements">
                <h2>Our Achievements</h2>
                <p>Delivering value-driven travel to thousands of happy clients</p>
                <div className="achievement-grid">
                    <div><h3>25+</h3><p>Places Covered</p></div>
                    <div><h3>10k+</h3><p>KMs Traveled</p></div>
                    <div><h3>300+</h3><p>Tours Completed</p></div>
                    <div><h3>100%</h3><p>Client Satisfaction</p></div>
                </div>
            </section>

            <FooterSection />
        </div>
    );
}
