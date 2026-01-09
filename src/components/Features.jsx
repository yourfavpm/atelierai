import React, { useState } from 'react';
import './Features.css';

const Features = () => {
    const [activeTab, setActiveTab] = useState(0);

    const features = [
        {
            title: "Controlled Design Refinement",
            subtitle: "Refine by intent, not chance.",
            desc: "Adjust silhouette, fabric, or length without regenerating your concept.",
            quote: "Precision, not guesswork.",
            image: "/assets/concept.png"
        },
        {
            title: "Image-Based Inspiration",
            subtitle: "Extract direction, not duplicates.",
            desc: "Identify proportions and style cues from reference images while avoiding imitation.",
            quote: "Inspired by context, not copying.",
            image: "/assets/hero.png"
        },
        {
            title: "Cultural Design Awareness",
            subtitle: "Respect tradition and ceremony.",
            desc: "Consider regional attire and cultural significance as part of your design process.",
            quote: "Fashion in context.",
            image: "/assets/fabric.png"
        },
        {
            title: "Professional Tech Pack Preparation",
            subtitle: "Manufacturing-ready documentation.",
            desc: "Clear measurements, construction notes, and specifications for real-world production.",
            quote: "Reduce miscommunication.",
            image: "/assets/techpack.png"
        },
        {
            title: "Brand Watermarking",
            subtitle: "Professional presentation.",
            desc: "Add your brand identity to visual outputs before sharing with clients or teams.",
            quote: "Real-world ready.",
            image: "/assets/sketch.png"
        }
    ];

    return (
        <section id="features" className="features section-padding">
            <div className="container">
                <div className="features-header">
                    <h2 className="features-title">What designers use most</h2>
                </div>

                <div className="features-interactive">
                    <div className="features-nav">
                        {features.map((f, index) => (
                            <button
                                key={index}
                                className={`features-nav-btn ${activeTab === index ? 'active' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {f.title}
                            </button>
                        ))}
                    </div>

                    <div className="features-content-wrapper lightbox">
                        <div className="features-grid">
                            <div className="features-text">
                                <h3 className="features-item-subtitle">{features[activeTab].subtitle}</h3>
                                <p className="features-item-desc">{features[activeTab].desc}</p>
                                <blockquote className="features-item-quote">
                                    {features[activeTab].quote}
                                </blockquote>
                            </div>
                            <div className="features-visual img-contained">
                                <img src={features[activeTab].image} alt={features[activeTab].title} className="features-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
