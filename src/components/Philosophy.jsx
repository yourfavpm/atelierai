import React from 'react';
import './Philosophy.css';

const Philosophy = () => {
    const principles = [
        {
            title: "AI-assisted, human-reviewed",
            text: "Every visualization is a collaboration. All outputs are starting points reviewed and refined by you."
        },
        {
            title: "You own your work",
            text: "You retain full ownership of your designs. Nothing is final without your confirmation."
        },
        {
            title: "Human precision",
            text: "AtelierAI is designed to assist, not decide. Production decisions remain human."
        }
    ];

    return (
        <section id="philosophy" className="philosophy section-padding">
            <div className="container">
                <div className="philosophy-content">
                    <h2 className="philosophy-title">AtelierAI is designed to assist — not decide.</h2>
                    <div className="philosophy-grid">
                        {principles.map((p, index) => (
                            <div key={index} className="philosophy-item">
                                <h3 className="philosophy-item-title">{p.title}</h3>
                                <p className="philosophy-item-text">{p.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="philosophy-statement">
                        <blockquote>"Technology should not replace the designer’s hand, but extend its reach."</blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
