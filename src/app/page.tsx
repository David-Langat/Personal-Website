'use client';

import React, { useState, useEffect } from 'react';
import TypingEffect from './components/TypingEffect';

import { FaLinkedinIn, FaGithub, FaKaggle } from 'react-icons/fa';

export default function Home() {
  const [nameAnimationComplete, setNameAnimationComplete] = useState(false);
  const [nameSlidUp, setNameSlidUp] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleTypingComplete = () => {
    setNameAnimationComplete(true);
    setTimeout(() => {
      setNameSlidUp(true);
    }, 500);
  };

  const handleNameSlideUpEnd = () => {
    setShowMessage(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 w-full">
        <div className="container h-16 flex items-center justify-between">
          <a className="font-bold text-lg" href="#">
            {/* Logo or site title if needed */}
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {/* Navigation links will go here */}
          </nav>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center pt-32 p-4">
        <div 
          className={`flex flex-col items-center ${nameAnimationComplete ? '' : 'fade-in'} ${nameSlidUp ? 'slide-up' : ''}`}
          style={{ position: 'relative', zIndex: 10 }}
          onAnimationEnd={nameSlidUp ? handleNameSlideUpEnd : undefined}
        >
          <img 
            src="/images/personal.jpg" 
            alt="Personal Profile" 
            className="w-48 h-48 rounded-full object-cover mb-4 ring-2 ring-gray-300 transition-all duration-300 ease-in-out hover:scale-105"
            style={{ animationDelay: '0.1s' }} // Slightly delayed fade-in
          />
          <h1 
            className="text-center text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--nude-lavender)]"
          >
            <TypingEffect text="David Langat" onComplete={handleTypingComplete} />
          </h1>
        </div>

        {showMessage && (
          <div className="text-center mt-[-40px] text-xl md:text-2xl text-foreground fade-in-message">
            <p>Welcome to my personal portfolio.</p>
            <p>Explore my work and journey in Data Science and Software Development.</p>
            <div className="flex justify-center gap-6 mt-8">
              <a href="https://www.linkedin.com/in/david-langat-data-science" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300">
                <FaLinkedinIn size={30} />
              </a>
              <a href="https://github.com/David-Langat" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300">
                <FaGithub size={30} />
              </a>
              <a href="https://www.kaggle.com/davidlangatkirui" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300">
                <FaKaggle size={30} />
              </a>
            </div>
          </div>
        )}
      </main>
      <footer className="bg-secondary py-6">
        <div className="container text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} David Langat. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
