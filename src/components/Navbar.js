import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';
import logo from './images/logo.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
               
                    <Link to="/">
                        <img src={logo} alt="Himalayan Whispers Logo" />
                    </Link>
               
            </div>

            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                <li><Link to="/packages" onClick={() => setIsOpen(false)}>Packages</Link></li>
                <li><Link to="/faq" onClick={() => setIsOpen(false)}>FAQ</Link></li>
                <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </div>

            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}
