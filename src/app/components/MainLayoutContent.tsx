'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import TypingEffect from './TypingEffect';
import { useAnimation } from '../context/AnimationContext';

interface MainLayoutContentProps {
  children: React.ReactNode;
}

export default function MainLayoutContent({ children }: MainLayoutContentProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const { isIntroDone, setIntroDone } = useAnimation();

  useEffect(() => {
    if (!isHomePage) {
      setIntroDone(true);
    }
  }, [isHomePage, setIntroDone]);

  const handleTypingComplete = () => {
    setTimeout(() => {
      setIntroDone(true);
    }, 500);
  };

  return (
    <main className="flex-1 flex flex-col items-center pt-32 p-4 overflow-hidden">
      <div
        className={`flex flex-col items-center ${isIntroDone ? 'slide-up' : ''}`}
        style={{ position: 'relative', zIndex: 10 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/images/personal.jpg"
            alt="Personal Profile"
            className="w-48 h-48 rounded-full object-cover mb-4 ring-2 ring-gray-300 transition-all duration-300 ease-in-out hover:scale-105"
          />
        </motion.div>
        <h1 className="text-center text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--nude-lavender)]">
          {isHomePage && !isIntroDone ? (
            <TypingEffect text="David Langat" onComplete={handleTypingComplete} />
          ) : (
            <span>David Langat</span>
          )}
        </h1>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex flex-col items-center justify-center w-full mt-[-40px]"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
