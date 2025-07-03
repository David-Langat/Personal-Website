'use client';

import React from 'react';
import Link from 'next/link';
import { useAnimation } from './context/AnimationContext';

export default function Home() {
  const { isIntroDone } = useAnimation();

  if (!isIntroDone) {
    return null; // Render nothing until the intro animation is complete
  }

  return (
    <div className="text-center text-xl md:text-2xl text-foreground">
      <p>Welcome to my personal portfolio.</p>
      <p>Explore my work and journey in Data Science and Software Development.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-6">
        <Link href="/about">
          <div className="p-4 rounded-lg shadow-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer h-32 flex flex-col justify-between">
            <h2 className="text-xl font-bold text-primary">About Me</h2>
            <p className="text-xs text-foreground mt-1">Learn more about my background and skills.</p>
          </div>
        </Link>
        <Link href="/experience">
          <div className="p-4 rounded-lg shadow-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer h-32 flex flex-col justify-between">
            <h2 className="text-xl font-bold text-primary">Experience</h2>
            <p className="text-xs text-foreground mt-1">My professional journey and roles.</p>
          </div>
        </Link>
        <Link href="/projects">
          <div className="p-4 rounded-lg shadow-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer h-32 flex flex-col justify-between">
            <h2 className="text-xl font-bold text-primary">Projects</h2>
            <p className="text-xs text-foreground mt-1">Showcase of my data science and software projects.</p>
          </div>
        </Link>
        <Link href="/hobbies">
          <div className="p-4 rounded-lg shadow-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer h-32 flex flex-col justify-between">
            <h2 className="text-xl font-bold text-primary">Hobbies</h2>
            <p className="text-xs text-foreground mt-1">A glimpse into my personal interests.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
