import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';
import type { Page } from '../types';

interface NavbarProps {
  scrolled: boolean;
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

// Navigations-Links. Neue Seite: hier ergaenzen.
const navLinks: { page: Page; label: string }[] = [
  { page: 'home', label: 'Home' },
  { page: 'about', label: 'About us' },
  { page: 'management', label: 'Management' },
];

export const Navbar: React.FC<NavbarProps> = ({ scrolled, currentPage, navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const handleNavClick = (page: Page) => {
    navigateTo(page);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-white/90 backdrop-blur-md border-zinc-200 ${scrolled || isMenuOpen ? 'py-3' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button
            type="button"
            className="flex items-center gap-3 cursor-pointer relative z-50 min-h-11"
            onClick={() => handleNavClick('home')}
            aria-label="Home"
          >
            <Logo size="md" />
          </button>

          <div className="hidden md:flex items-center gap-8 text-base text-zinc-700 font-medium">
            {navLinks.map(({ page, label }) => (
              <button
                key={page}
                onClick={() => navigateTo(page)}
                className={`min-h-11 hover:text-black transition-colors ${currentPage === page ? 'text-black' : ''}`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:flex items-center gap-4">
              <Button variant="secondary" onClick={() => navigateTo('contact')}>
                Contact
              </Button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 min-h-11 min-w-11 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-900 relative z-50"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile-Menue */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-white" />
        <div className="relative h-full flex flex-col pt-32 pb-12 px-6">
          <div className="flex flex-col gap-2">
            {navLinks.map(({ page, label }) => (
              <button
                key={page}
                onClick={() => handleNavClick(page)}
                className={`flex items-center p-4 rounded-2xl text-2xl font-bold transition-colors ${currentPage === page ? 'bg-accent/10 text-accent' : 'text-zinc-900'}`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="mt-auto">
            <Button variant="primary" className="w-full py-6 text-xl" onClick={() => handleNavClick('contact')}>
              Contact
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
