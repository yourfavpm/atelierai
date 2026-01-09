import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Workflow from './components/Workflow';
import Features from './components/Features';
import AISection from './components/AISection';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import './styles/variables.css';
import './styles/base.css';

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navigation />
      <div className="reveal"><Hero /></div>
      <div className="reveal"><Stats /></div>
      <div className="reveal"><About /></div>
      <div className="reveal"><Workflow /></div>
      <div className="reveal"><Features /></div>
      <div className="reveal"><AISection /></div>
      <div className="reveal"><FAQ /></div>
      <div className="reveal"><Pricing /></div>
      <Footer />
    </div>
  );
}

export default App;
