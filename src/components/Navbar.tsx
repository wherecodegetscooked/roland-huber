import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import type { Page } from '../types';
import { siteConfig } from '../constants';
import rkhcLogoLong from '../assets/images/rkhc_logo_long.png';
import rkhcFavicon from '../assets/images/rkhc_favicon.png';

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

  // Transparent am Seitenanfang; beim Scrollen dezenter dunkler Hintergrund,
  // damit die weisse Schrift auch ueber hellem Inhalt lesbar bleibt.
  const contactBtn =
    'px-5 py-2 min-h-11 rounded-full text-sm font-medium bg-black/30 text-white border border-white/40 hover:bg-black/50 transition-colors';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-black/70 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button
            type="button"
            className="flex items-center gap-3 cursor-pointer relative z-50 min-h-11"
            onClick={() => handleNavClick('home')}
            aria-label="Home"
          >
            <img src={rkhcFavicon} alt="" aria-hidden="true" className="h-9 sm:h-10 w-auto" />
            <img src={rkhcLogoLong} alt={siteConfig.legalName} className="h-8 sm:h-9 w-auto" />
          </button>

          <div className="hidden md:flex items-center gap-8 text-base text-white/85 font-medium">
            {navLinks.map(({ page, label }) => (
              <button
                key={page}
                onClick={() => navigateTo(page)}
                className={`min-h-11 hover:text-white transition-colors ${currentPage === page ? 'text-white' : ''}`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:flex items-center gap-4">
              <button onClick={() => navigateTo('contact')} className={contactBtn}>
                Contact
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 min-h-11 min-w-11 rounded-xl bg-black/30 border border-white/30 text-white relative z-50"
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
        <div className="absolute inset-0 bg-[#080808]" />
        <div className="relative h-full flex flex-col pt-32 pb-12 px-6">
          <div className="flex flex-col gap-2">
            {navLinks.map(({ page, label }) => (
              <button
                key={page}
                onClick={() => handleNavClick(page)}
                className={`flex items-center p-4 rounded-2xl text-2xl font-bold transition-colors ${currentPage === page ? 'bg-white/10 text-white' : 'text-white/80'}`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="mt-auto">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-5 text-xl rounded-full bg-black/40 text-white border border-white/40 hover:bg-black/60 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
