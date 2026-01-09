import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // lock body scroll when mobile menu is open
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    return (
        <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-logo">AtelierAI</div>

                <button
                    className={`nav-toggle ${open ? 'nav-toggle--open' : ''}`}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                >
                    <span className="nav-toggle-box">
                        <span className="nav-toggle-inner" />
                    </span>
                </button>

                <div className={`nav-links ${open ? 'nav-links--open' : ''}`} onClick={() => setOpen(false)}>
                    <a href="#features" className="nav-link">Features</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#faq" className="nav-link">FAQ</a>
                    <a href="#pricing" className="nav-link">Pricing</a>
                    <a href="https://atelier-weave-ai.lovable.app" target="_blank" rel="noopener noreferrer" className="nav-btn-text">Start for free</a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
