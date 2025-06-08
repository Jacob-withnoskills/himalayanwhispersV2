import React from 'react';
import { Link } from 'react-router-dom';
import './css/FooterSection.css';

export default function FooterSection({ setIsOpen }) {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h2>DrukQuest</h2>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Quick Links</h4>
                            <ul>
                        
                                <li>
                                    <Link to="/about" onClick={() => setIsOpen && setIsOpen(false)}>About Us</Link>
                                </li>
                                <li>
                                    <Link to="/packages" onClick={() => setIsOpen && setIsOpen(false)}>Packages</Link>
                                </li>
                                <li>
                                    <Link to="/faq" onClick={() => setIsOpen && setIsOpen(false)}>FAQ</Link>
                                </li>
                                <li>
                                    <Link to="/contact" onClick={() => setIsOpen && setIsOpen(false)}>Contact</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Contact</h4>
                            <p>Email: support@drukquest.com</p>
                            <p>Phone: +975 77765137</p>
                            <p>Address: Changjalu ,Thimphu, Bhutan-11001</p>
                        </div>

                        <div className="footer-column">
                            <h4>Follow Us</h4>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/profile.php?id=61577346681340" target="_blank" rel="noreferrer" aria-label="Facebook">📘</a>
                                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">🐦</a>
                                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">📸</a>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">💼</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} theHimalayanProjects. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
