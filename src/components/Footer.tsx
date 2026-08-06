import React from 'react';
import { Logo } from './Logo';
import type { Page } from '../types';
import { siteConfig } from '../constants';

interface FooterProps {
  navigateTo: (page: Page) => void;
}

const footerLinks: { page: Page; label: string }[] = [
  { page: 'about', label: 'About us' },
  { page: 'management', label: 'Management' },
  { page: 'contact', label: 'Contact' },
  { page: 'disclaimer', label: 'Disclaimer' },
  { page: 'privacy', label: 'Privacy policy' },
];

export const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="relative z-10 py-12 border-t border-white/10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <button className="cursor-pointer" onClick={() => navigateTo('home')} aria-label="Home">
            <Logo size="sm" />
          </button>
          <p className="text-xs text-gray-400 text-center md:text-left">
            {siteConfig.address.company} &middot; {siteConfig.address.street} &middot;{' '}
            {siteConfig.address.zip} {siteConfig.address.city}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-400">
          {footerLinks.map(({ page, label }) => (
            <button key={page} onClick={() => navigateTo(page)} className="hover:text-white">
              {label}
            </button>
          ))}
          <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
            {siteConfig.email}
          </a>
        </div>
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} {siteConfig.legalName}.
        </p>
      </div>
    </footer>
  );
};
