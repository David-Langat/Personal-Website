'use client';

import React from 'react';
import { usePathname } from 'next/navigation';


interface MainLayoutContentProps {
  children: React.ReactNode;
  isHomePage: boolean; // Prop to indicate if the current page is the homepage
  pageTitle: string; // Prop for the current page's title
}

export default function MainLayoutContent({ children, isHomePage, pageTitle }: MainLayoutContentProps) {
  // The usePathname hook is no longer needed here as isHomePage is passed as a prop
  // const pathname = usePathname();
  // const isHomePage = pathname === '/';

  return (
    <main className="flex-1 flex flex-col items-center pt-4 sm:pt-8 p-4">
      <div
        className="flex flex-col items-center mb-8"
        style={{ position: 'relative', zIndex: 10 }}
      >
        {/* Conditionally render profile image and name on homepage, or page title on other pages */}
        {isHomePage ? (
          <>
            <img
              src="/images/personal.jpg"
              alt="Personal Profile"
              className="w-48 h-48 rounded-full object-cover mb-4 ring-2 ring-gray-300 transition-all duration-300 ease-in-out hover:scale-105"
            />
            <h1 className="text-center text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--nude-lavender)]">
              <span>David Langat</span>
            </h1>
          </>
        ) : (
          <h1 className="text-center text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--nude-lavender)]">
            <span>{pageTitle}</span>
          </h1>
        )}
      </div>

      <div className="w-full">
        {children}
      </div>
    </main>
  );
}
