import React from 'react';
import './AISection.css';

const AISection = () => {
    return (
        <section className="ai-section section-padding">
            <div className="container">
                <div className="lightbox ai-lightbox">
                    <div className="ai-grid">
                        <div className="ai-content">
                            <h2 className="ai-title">How AI is improving fashion design</h2>
                            <div className="ai-text">
                                <p>AI reduces friction in the design process without replacing the designer's hand.</p>
                                <ul className="ai-list">
                                    <li>Brief Interpretation</li>
                                    <li>Technical Organization</li>
                                    <li>Early Visualization</li>
                                    <li>Faster Iteration</li>
                                </ul>
                                <p>AtelierAI clarifies intent, organizes detail, and supports communication.</p>
                                <div className="ai-conclusion">
                                    <p>Creative direction and taste remain human.</p>
                                    <p className="ai-motto">AI assists. Designers decide.</p>
                                </div>
                            </div>
                        </div>
                        <div className="ai-visual">
                            <div className="ai-abstract-shape ai-abstract-shape--1"></div>
                            <div className="ai-abstract-shape ai-abstract-shape--2"></div>
                            <div className="ai-abstract-shape ai-abstract-shape--3"></div>
                            <div className="ai-ui-overlay">
                                <div className="ai-ui-line"></div>
                                <div className="ai-ui-line ai-ui-line--short"></div>
                                <div className="ai-ui-dot"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AISection;
