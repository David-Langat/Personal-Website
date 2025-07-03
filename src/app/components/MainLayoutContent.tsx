'use client';

import React from 'react';
import { usePathname } from 'next/navigation';


interface MainLayoutContentProps {
  children: React.ReactNode;
}

export default function MainLayoutContent({ children }: MainLayoutContentProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <main className="flex-1 flex flex-col items-center pt-20 sm:pt-32 p-4">
      <div
        className="flex flex-col items-center"
        style={{ position: 'relative', zIndex: 10 }}
      >
        <img
          src="/images/personal.jpg"
          alt="Personal Profile"
          className="w-48 h-48 rounded-full object-cover mb-4 ring-2 ring-gray-300 transition-all duration-300 ease-in-out hover:scale-105"
        />
        <h1 className="text-center text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--nude-lavender)]">
          <span>David Langat</span>
        </h1>
      </div>

      <div className="w-full">
        {children}
      </div>
    </main>
  );
}
