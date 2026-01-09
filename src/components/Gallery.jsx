import React from 'react';
import './Gallery.css';

const Gallery = () => {
    const items = [
        {
            title: "Concept Development",
            description: "Translate ideas into clear design direction.",
            image: "/assets/concept.png"
        },
        {
            title: "Fashion Sketching",
            description: "Visualize garments with precision and restraint.",
            image: "/assets/sketch.png"
        },
        {
            title: "Cultural Design Awareness",
            description: "Design with context, tradition, and intention.",
            image: "/assets/hero.png" // Using the original high-end hero image here
        },
        {
            title: "Fabric Visualization",
            description: "See material choices before production begins.",
            image: "/assets/fabric.png"
        },
        {
            title: "Tech Pack Preparation",
            description: "Prepare structured documentation for manufacturing.",
            image: "/assets/techpack.png"
        }
    ];

    return (
        <section id="gallery" className="gallery section-padding">
            <div className="container">
                <div className="gallery-grid">
                    {items.map((item, index) => (
                        <div key={index} className="gallery-item">
                            <div className="gallery-image-wrapper">
                                <img src={item.image} alt={item.title} className="gallery-image" />
                            </div>
                            <div className="gallery-info">
                                <h3 className="gallery-title">{item.title}</h3>
                                <p className="gallery-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
