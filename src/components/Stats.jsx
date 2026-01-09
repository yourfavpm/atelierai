import React from 'react';
import './Stats.css';

const Stats = () => {
    const stats = [
        { value: '90%', caption: 'of users refine designs through controlled edits rather than full regeneration' },
        { value: '70% faster', caption: 'preparation of production documentation compared to manual workflows' },
        { value: '3×', caption: 'more design iterations completed before finalizing a tech pack' },
        { value: '25k+', caption: 'AI designs generated with focused visualization intent' },
        { value: '250+', caption: 'Brands & studios across multiple regions' },
        { value: 'Global', caption: 'use by designers and students across multiple countries' }
    ];

    return (
        <section className="stats section-padding">
            <div className="container">
                <div className="stats-header">
                    <h2 className="stats-title">Designed to support real design work</h2>
                    <p className="stats-intro">
                        Built for the realities of fashion — time pressure, precision, and communication.
                        These numbers reflect how designers actually use the platform.
                    </p>
                </div>

                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stats-item">
                            <div className="stats-value">{stat.value}</div>
                            <div className="stats-caption">{stat.caption}</div>
                        </div>
                    ))}
                </div>

                <div className="stats-disclaimer">
                    *Usage data reflects anonymized platform activity.
                </div>
            </div>
        </section>
    );
};

export default Stats;
