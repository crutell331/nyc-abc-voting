'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from './Icon';
import { Analytics } from '@vercel/analytics/next';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 300px
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-gradient-to-r from-primary to-primary-dark text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center mb-4 md:mb-0">
            <Icon name="Vote" className="w-8 h-8 mr-2" />
            <span>NYC Democratic Primary Voting Guide</span>
          </Link>
          
          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="/" className="hover:text-accent transition-colors duration-200">
              Home
            </Link>
            <Link href="/issues" className="hover:text-accent transition-colors duration-200">
              Issues
            </Link>
            <Link href="/candidates" className="hover:text-accent transition-colors duration-200">
              Candidates
            </Link>
            <Link href="/rank-choice" className="hover:text-accent transition-colors duration-200">
              Rank Choice Voting
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors duration-200">
              About ABC
            </Link>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
        <Analytics />
      </main>
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary hover:bg-primary-dark text-white rounded-full p-3 shadow-lg z-50 transition-all duration-300 flex items-center justify-center"
          aria-label="Back to top"
        >
          <Icon name="ArrowUp" className="w-6 h-6" />
        </button>
      )}
      
      <footer className="bg-foreground/10 border-t-2 border-foreground/20 text-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NYC Democratic Primary Voting Guide</h3>
              <p className="text-foreground/80">
                A resource to help voters make informed decisions in the NYC mayoral democratic primary.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/issues" className="text-foreground/80 hover:text-accent transition-colors duration-200">
                    Issues
                  </Link>
                </li>
                <li>
                  <Link href="/candidates" className="text-foreground/80 hover:text-accent transition-colors duration-200">
                    Candidates
                  </Link>
                </li>
                <li>
                  <Link href="/rank-choice" className="text-foreground/80 hover:text-accent transition-colors duration-200">
                    Rank Choice Voting
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Important Dates</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>
                  <a 
                    href="https://www.ny.gov/services/register-vote" 
                    target="_blank" 
                    rel="noopener noreferrer nofollow"
                    className="text-primary hover:text-primary-dark"
                  >
                    Registration Deadline: June 2, 2025
                  </a>
                </li>
                <li>Early Voting: June 12-20, 2025</li>
                <li>Primary Election: June 22, 2025</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-foreground/20 text-center text-foreground/70">
            <p className="mb-2">© {new Date().getFullYear()} NYC Democratic Primary Voting Guide. Not affiliated with any official government entity.</p>
            <p>
              <Link href="/about/disclaimer" className="text-primary hover:text-primary-dark">
                Disclaimer & Information Sources
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;