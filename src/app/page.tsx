'use client';

import React from 'react';
import NavigationCard from './components/NavigationCard';

const navItems = [
  { href: '/about', title: 'About Me', description: 'Learn more about my background and skills.' },
  { href: '/experience', title: 'Experience', description: 'My professional journey and roles.' },
  { href: '/projects', title: 'Projects', description: 'Showcase of my data science and software projects.' },
  { href: '/hobbies', title: 'Hobbies', description: 'A glimpse into my personal interests.' },
  { href: '/contact', title: 'Contact', description: 'Get in touch with me.' },
];

export default function Home() {
  return (
    <div className="text-center text-xl md:text-2xl text-foreground">
      <p>Welcome to my personal portfolio.</p>
      <p>Explore my work and journey in Data Science and Software Development.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-6">
        {navItems.map((item) => (
          <NavigationCard key={item.href} {...item} />
        ))}
      </div>
    </div>
  );
}
