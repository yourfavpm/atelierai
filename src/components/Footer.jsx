import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer section-padding">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand-info">
                        <h2 className="footer-logo">AtelierAI</h2>
                        <p className="footer-tagline">Design with clarity. Prepare with confidence.</p>
                        <div className="footer-ctas">
                            <a href="#" className="footer-link-main">Start for free →</a>
                            <a href="#" className="footer-link-main">Explore the platform →</a>
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-links-title">Platform</h4>
                        <ul className="footer-links-list">
                            <li><a href="#">Visualizer</a></li>
                            <li><a href="#">Tech Pack Generator</a></li>
                            <li><a href="#">Image Analysis</a></li>
                            <li><a href="#">Cultural Database</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-links-title">Studio</h4>
                        <ul className="footer-links-list">
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Our Philosophy</a></li>
                            <li><a href="#">Design Standards</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-links-title">Resources</h4>
                        <ul className="footer-links-list">
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Legal</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-divider"></div>
                    <div className="footer-bottom-flex">
                        <p className="copyright">© 2026 AtelierAI. All rights reserved.</p>
                        <div className="footer-socials">
                            <a href="#">Instagram</a>
                            <a href="#">LinkedIn</a>
                            <a href="#">Twitter</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
