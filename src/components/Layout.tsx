import React from 'react';
import Link from 'next/link';
import Icon from './Icon';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-gradient-to-r from-primary to-primary-dark text-white shadow-md">
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
      </main>
      
      <footer className="bg-foreground/10 text-foreground py-8">
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
            <p>© {new Date().getFullYear()} NYC Democratic Primary Voting Guide. Not affiliated with any official government entity.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;