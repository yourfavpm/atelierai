import React from 'react';
import './Pricing.css';

const Pricing = () => {
    const tiers = [
        {
            name: "Free",
            focus: "Explore & Learn",
            desc: "For experimentation and learning. Designed for exploration, not delivery.",
            features: [
                "Up to 3 projects",
                "Concept & sketch views",
                "Limited edits",
                "Watermarked visuals"
            ],
            cta: "Explore for free"
        },
        {
            name: "Starter",
            focus: "Design & Deliver",
            desc: "For independent designers. Built for client and production work.",
            features: [
                "Unlimited projects",
                "Generous monthly usage",
                "Unlimited edits",
                "Brand watermarking",
                "Tech pack PDF exports"
            ],
            cta: "Start with Starter",
            highlight: true
        },
        {
            name: "Pro",
            focus: "Studio",
            desc: "For studios and growing brands. Built for professional output.",
            features: [
                "Higher usage limits",
                "Advanced visuals",
                "Priority generation",
                "Expanded exports"
            ],
            cta: "Contact for Pro"
        }
    ];

    return (
        <section id="pricing" className="pricing section-padding">
            <div className="container">
                <div className="pricing-header">
                    <h2 className="pricing-title">Explore freely. Pay when it becomes valuable.</h2>
                    <p className="pricing-intro">
                        AtelierAI is designed to support learning, experimentation, and professional delivery — without forcing early commitment.
                        Payment is required only when you need production-ready outputs.
                    </p>
                </div>

                <div className="pricing-grid">
                    {tiers.map((tier, index) => (
                        <div key={index} className={`pricing-tier ${tier.highlight ? 'pricing-tier--highlight' : ''}`}>
                            <div className="pricing-tier-content">
                                <h3 className="tier-name">{tier.name}</h3>
                                <p className="tier-focus">{tier.focus}</p>
                                <p className="tier-desc">{tier.desc}</p>
                                <ul className="tier-features">
                                    {tier.features.map((f, i) => (
                                        <li key={i}>{f}</li>
                                    ))}
                                </ul>
                            </div>
                            <a href="#" className="tier-cta">{tier.cta}</a>
                        </div>
                    ))}

                    <div className="pricing-tier pricing-tier--simple">
                        <div className="pricing-tier-content">
                            <h3 className="tier-name">Pay per Export</h3>
                            <p className="tier-focus">For one-off needs</p>
                            <p className="tier-desc">Export a single tech pack when required — no subscription necessary.</p>
                        </div>
                        <a href="#" className="tier-cta">Purchase single export</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
