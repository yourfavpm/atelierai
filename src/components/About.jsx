import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about section-padding">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <h2 className="about-title">About AtelierAI</h2>
                        <div className="about-text">
                            <p>AtelierAI bridges the gap between creative intention and production clarity. Designers know what they want — we provide the structured path to technical documentation.</p>
                            <p>By combining AI reasoning with designer control, the platform helps refine ideas and prepare production-ready tech packs without removing authorship.</p>
                            <p className="about-highlight">AtelierAI does not design <em>for</em> you. It helps you design <strong>with clarity.</strong></p>
                        </div>
                    </div>
                    <div className="about-visuals">
                        <div className="about-img-wrapper img-contained">
                            <img src="/assets/fabric.png" alt="Materials and Sketches" className="about-img" />
                        </div>
                        <div className="about-img-wrapper img-contained about-img-wrapper--offset">
                            <img src="/assets/sketch.png" alt="Studio Documentation" className="about-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
