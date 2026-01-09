import React from 'react';
import './WhoItIsFor.css';

const WhoItIsFor = () => {
    const categories = [
        {
            label: "For Independent Designers",
            text: "Transform rough concepts into professional presentations in moments."
        },
        {
            label: "For Fashion Students",
            text: "Learn the precision and standards of luxury fashion production."
        },
        {
            label: "For Small Studios",
            text: "Maintain a consistent visual language across global design teams."
        }
    ];

    return (
        <section className="who-it-is-for section-padding">
            <div className="container">
                <div className="who-grid">
                    <div className="who-description">
                        <h2 className="who-title">For those who care about precision.</h2>
                        <p className="who-intro">AtelierAI is built for designers seeking clarity, professionalism, and preparation. It assists development — it does not replace creative direction.</p>
                    </div>
                    <div className="who-categories">
                        {categories.map((cat, index) => (
                            <div key={index} className="who-cat-item">
                                <span className="who-cat-label">{cat.label}</span>
                                <p className="who-cat-text">{cat.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoItIsFor;
