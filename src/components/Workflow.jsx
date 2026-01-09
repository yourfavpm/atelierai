import React from 'react';
import './Workflow.css';

const Workflow = () => {
    return (
        <section className="workflow section-padding">
            <div className="container">
                <div className="workflow-intro-box">
                    <p className="workflow-quote">"From early ideas to structured documentation, AtelierAI supports the way fashion is actually developed."</p>
                </div>

                <div className="workflow-collage">
                    <div className="workflow-collage-item workflow-collage-item--1">
                        <img src="/assets/concept.png" alt="Concept Board" className="workflow-img" />
                        <div className="workflow-caption">Design concepts are refined, not regenerated.</div>
                    </div>

                    <div className="workflow-collage-item workflow-collage-item--2">
                        <img src="/assets/sketch.png" alt="Fashion Sketch" className="workflow-img" />
                        <div className="workflow-caption">Visuals are reviewed, not assumed.</div>
                    </div>

                    <div className="workflow-collage-item workflow-collage-item--3">
                        <img src="/assets/techpack.png" alt="Tech Pack Prep" className="workflow-img" />
                        <div className="workflow-caption">Documentation is prepared with intention.</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workflow;
