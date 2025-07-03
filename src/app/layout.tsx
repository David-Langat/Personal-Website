'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { FaLinkedinIn, FaGithub, FaKaggle } from 'react-icons/fa';

import MainLayoutContent from './components/MainLayoutContent';
import { AnimationProvider } from './context/AnimationContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const router = useRouter();

  const handleHomeClick = (e: React.MouseEvent) => {
    if (isHomePage) {
      e.preventDefault(); // Prevent default Link behavior
      router.reload(); // Force a full reload if already on home page
    }
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimationProvider>
          <div className="flex flex-col min-h-screen">
            <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 w-full">
              <div className="w-full h-16 flex items-center justify-between px-4">
                <Link href="/" className="font-bold text-lg pl-4" onClick={handleHomeClick}>
                  {!isHomePage && (
                    <img
                      src="/images/personal.jpg"
                      alt="Personal Profile"
                      className="w-10 h-10 rounded-full object-cover ring-1 ring-gray-300 transition-all duration-300 ease-in-out hover:scale-110"
                    />
                  )}
                </Link>
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                  {/* Navigation links will go here */}
                </nav>
                <div className="flex justify-center gap-4">
                  <a href="https://www.linkedin.com/in/david-langat-data-science" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300">
                    <FaLinkedinIn size={24} />
                  </a>
                  <a href="https://github.com/David-Langat" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300">
                    <FaGithub size={24} />
                  </a>
                  <a href="https://www.kaggle.com/davidlangatkirui" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300">
                    <FaKaggle size={24} />
                  </a>
                </div>
              </div>
            </header>
            <MainLayoutContent>{children}</MainLayoutContent>
            <footer className="bg-secondary py-6">
              <div className="container text-center text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} David Langat. All rights reserved.
              </div>
            </footer>
          </div>
        </AnimationProvider>
      </body>
    </html>
  );
}
