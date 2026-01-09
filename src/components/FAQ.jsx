import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Does AtelierAI design clothes for me?",
            answer: "No. AtelierAI assists with clarification, visualization, and documentation. All creative and production decisions remain with the designer."
        },
        {
            question: "Can I use this for real production?",
            answer: "AtelierAI prepares AI-assisted starting points intended for review and refinement before production."
        },
        {
            question: "Who owns the designs I create?",
            answer: "You do. All designs and outputs belong to you."
        },
        {
            question: "Is this suitable for beginners?",
            answer: "Yes. The platform supports both learning and professional workflows."
        },
        {
            question: "Does AtelierAI replace pattern makers or tailors?",
            answer: "No. It supports communication and preparation — not craftsmanship or physical fitting."
        },
        {
            question: "Can I explore without paying?",
            answer: "Yes. Exploration and learning are free. Payment is only required for professional exports."
        }
    ];

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="faq section-padding">
            <div className="container-narrow">
                <div className="faq-header">
                    <h2 className="faq-title">Frequently asked questions</h2>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                            <button className="faq-question" onClick={() => toggle(index)}>
                                {faq.question}
                                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                            </button>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
