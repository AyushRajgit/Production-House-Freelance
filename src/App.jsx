import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EntryModal from './components/EntryModal';

function App() {
  const [showEntryModal, setShowEntryModal] = useState(false);

  useEffect(() => {
    // Check if user has already visited and filled the form
    const hasVisited = localStorage.getItem('hasVisited');

    // Show modal if user hasn't visited before
    if (!hasVisited) {
      // Small delay to ensure smooth loading
      setTimeout(() => {
        setShowEntryModal(true);
      }, 500);
    }
  }, []);

  const handleCloseModal = () => {
    setShowEntryModal(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Entry Modal */}
      <EntryModal
        isOpen={showEntryModal}
        onClose={handleCloseModal}
      />

      <div className={showEntryModal ? 'blur-sm pointer-events-none' : ''}>
        {/* Navigation Header */}
        <Header />

        {/* Hero Section - First impression with cinematic impact */}
        <Hero />

        {/* About Section - Company story and team */}
        <About />

        {/* Portfolio Section - Showcase of past work */}
        <Portfolio />

        {/* Services Section - What we offer */}
        <Services />

        {/* Testimonials Section - Client feedback */}
        <Testimonials />

        {/* Contact Section - Get in touch */}
        <Contact />

        {/* Footer - Final navigation and social links */}
        <Footer />
      </div>

    </div>
  );
}

export default App;