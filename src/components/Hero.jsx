import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container-narrow">
        <div className="hero-minimal-grid">
          <div className="hero-text-minimal">
            <h1 className="hero-headline">Design clarity,<br />from concept to production.</h1>
            <p className="hero-subheadline">
              An AI platform for fashion designers. Visualize sketches and prepare production-ready documentation for the real world.
            </p>
            <div className="hero-actions-minimal">
              <a href="https://atelier-weave-ai.lovable.app" target="_blank" rel="noopener noreferrer" className="hero-link-minimal">Start for free</a>
              <a href="#" className="hero-link-minimal hero-link-minimal--secondary">Explore the platform</a>
            </div>
          </div>
          <div className="hero-image-minimal img-contained">
            <img src="/assets/hero_refined.png" alt="AtelierAI Concept Visualization" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
