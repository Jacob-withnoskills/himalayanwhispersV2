import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import './css/ContactUs.css';
import 'react-phone-input-2/lib/style.css';
import contact from './images/contact.svg';

export default function ContactUs() {
    const [phone, setPhone] = useState('');
    const [fullName, setFullName] = useState('');

    // Open Google Maps for a given address
    const openGoogleMaps = (address) => {
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
        window.open(url, '_blank');
    };

    // Share URL and text
    const shareOffice = (officeName, address) => {
        const shareData = {
            title: `${officeName} Location`,
            text: `Check out the ${officeName} located at ${address}`,
            url: window.location.href,
        };

        if (navigator.share) {
            navigator.share(shareData).catch((error) => console.log('Error sharing:', error));
        } else {
            const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`;
            window.open(twitterUrl, '_blank');
        }
    };

    // Send user details to WhatsApp
    const sendToWhatsApp = () => {
        if (!fullName || !phone) {
            alert("Please enter both full name and phone number.");
            return;
        }

        const message = `Hi, I'm ${fullName}. Please call me back at ${phone}.`;
        const encodedMessage = encodeURIComponent(message);

        // Your WhatsApp number (e.g., without "+" or spaces)
        const yourNumber = '917099097003';
        const whatsappUrl = `https://wa.me/${yourNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="contact-us-section">
            <div className="contact-content">
                <div className="contact-info">
                    <h2>Contact Us Today!</h2>

                    <div className="contact-groups">
                        <div className="contact-group">
                            <p>For Indian Guests</p>
                            <p>📞 +975 77765137</p>
                            <p>📧 support@himalayanwhispers.com</p>
                        </div>

                        <div className="contact-group">
                            <p>For Foreign Nationals / NRIs</p>
                            <p>📞 +975 77765137</p>
                            <p>📧 support@himalayanwhispers.com</p>
                        </div>
                    </div>

                    <div className="callback-form">
                        <h4>Want us to call you?</h4>
                        <div className="form-row">
                            <input
                                type="text"
                                placeholder="Full Name*"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />

                            <PhoneInput
                                country="in"
                                value={phone}
                                onChange={setPhone}
                                placeholder="Enter phone number"
                            />

                            <button className="callback-btn" onClick={sendToWhatsApp}>
                                📞 Request Call Back
                            </button>
                        </div>
                    </div>
                </div>

                <div className="contact-image">
                    <img src={contact} alt="Team Support" />
                </div>
            </div>

            <div className="office-locations">
                <h3>Our Offices</h3>

                <div className="office-card">
                    <div className="office-header">
                        <span className="tag sales">Travel OFFICE</span>
                    </div>
                    <h4>Bhutan <span className="status">| OPEN</span></h4>
                    <p>Changjalu<br />Thimphu, Bhutan-11001</p>
                    <div className="office-actions">
                        <button className="details-btn">Office Details</button>
                        <a href="tel:+97577765137" className="call-btn">📞 +975 77765137</a>
                    </div>
                    <div className="office-footer">
                        <span
                            className="clickable"
                            onClick={() => openGoogleMaps('Changjalu, Thimphu, Bhutan-11001')}
                        >📍 Get Directions</span>
                        <span
                            className="clickable"
                            onClick={() => shareOffice('Travel OFFICE Bhutan', 'Changjalu, Thimphu, Bhutan-11001')}
                        >🔗 Share</span>
                    </div>
                </div>

                <div className="office-card">
                    <div className="office-header">
                        <span className="tag sales">DEVELOPER OFFICE</span>
                    </div>
                    <h4>INDIA <span className="status">| OPEN</span></h4>
                    <p>Ram Krishna Nagar, Naw Pukuri <br />Tinsukia, Assam -786125</p>
                    <div className="office-actions">
                        <button className="details-btn">Office Details</button>
                        <a href="tel:+917099097003" className="call-btn">📞 +91 7099097003</a>
                    </div>
                    <div className="office-footer">
                        <span
                            className="clickable"
                            onClick={() => openGoogleMaps('Ram Krishna Nagar, Naw Pukuri, Tinsukia, Assam -786125')}
                        >📍 Get Directions</span>
                        <span
                            className="clickable"
                            onClick={() => shareOffice('DEVELOPER OFFICE INDIA', 'Ram Krishna Nagar, Naw Pukuri, Tinsukia, Assam -786125')}
                        >🔗 Share</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
