'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MainLayoutContent from './components/MainLayoutContent';
import SocialLinks from './components/SocialLinks';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const inter = Inter({ subsets: ['latin'] });

const navLinks = [
  { href: '/about', label: 'About Me' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/hobbies', label: 'Hobbies' },
  { href: '/contact', label: 'Contact' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Determine the current page's title based on the pathname
  const currentPageTitle = navLinks.find(link => link.href === pathname)?.label || '';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 w-full">
            <div className="w-full h-16 flex items-center justify-between px-4">
              <Link href="/" className="font-bold text-lg pl-4">
                {!isHomePage && (
                  <img
                    src="/images/personal.jpg"
                    alt="Personal Profile"
                    className="w-10 h-10 rounded-full object-cover ring-1 ring-gray-300 transition-all duration-300 ease-in-out hover:scale-110"
                  />
                )}
              </Link>
              {/* Conditionally render navigation links: hidden on homepage, visible on other pages */}
              {!isHomePage && (
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className={`hover:text-primary transition-colors duration-300 ${pathname === link.href ? 'text-primary' : 'text-foreground'}`}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
              )}
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground focus:outline-none">
                  <FaBars size={24} />
                </button>
              </div>
              <div className="hidden md:block">
                <SocialLinks />
              </div>
            </div>
            {isMenuOpen && (
              <div className="md:hidden bg-background/90 backdrop-blur-sm pb-4">
                <nav className="flex flex-col items-center gap-4 text-sm font-medium">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className={`hover:text-primary transition-colors duration-300 ${pathname === link.href ? 'text-primary' : 'text-foreground'}`} onClick={() => setIsMenuOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-4">
                  <SocialLinks />
                </div>
              </div>
            )}
          </header>
          {/* Pass isHomePage and currentPageTitle to MainLayoutContent */}
          <MainLayoutContent isHomePage={isHomePage} pageTitle={currentPageTitle}>
            {children}
          </MainLayoutContent>
          <footer className="bg-secondary py-6">
            <div className="container text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} David Langat. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

