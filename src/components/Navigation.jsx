import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-logo">AtelierAI</div>
                <div className="nav-links">
                    <a href="#features" className="nav-link">Features</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#faq" className="nav-link">FAQ</a>
                    <a href="#pricing" className="nav-link">Pricing</a>
                    <a href="#" className="nav-btn-text">Start for free</a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
