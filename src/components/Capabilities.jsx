import React from 'react';
import './Capabilities.css';

const Capabilities = () => {
    const features = [
        {
            title: "Controlled Design Refinement",
            desc: "Make precise adjustments without starting over."
        },
        {
            title: "Image-Based Inspiration",
            desc: "Extract direction from reference images without copying."
        },
        {
            title: "Cultural Design Intelligence",
            desc: "Respect traditions, ceremonies, and regional context."
        },
        {
            title: "Professional Exports",
            desc: "Prepare clean, production-ready tech packs."
        },
        {
            title: "Brand Watermarking",
            desc: "Present work clearly and protect your designs."
        }
    ];

    return (
        <section className="capabilities section-padding">
            <div className="container">
                <div className="capabilities-grid">
                    <div className="capabilities-intro">
                        <h2 className="capabilities-title">Refined Tools.</h2>
                        <p className="capabilities-text">Built for the professional studio environment where precision is non-negotiable.</p>
                    </div>
                    <div className="capabilities-list">
                        {features.map((feature, index) => (
                            <div key={index} className="capability-item">
                                <h3 className="capability-item-title">{feature.title}</h3>
                                <p className="capability-item-desc">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
