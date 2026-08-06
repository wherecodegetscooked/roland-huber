import React from 'react';
import { siteConfig } from '../constants';
import logoWhite from '../assets/images/logo-weiss.png';

// Wortmarken-Logo von RKH Consulting (weisse Variante fuer dunkle Navbar/Footer).
export const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const heights = {
    sm: 'h-5',
    md: 'h-7',
    lg: 'h-9',
  };

  return (
    <span className={`inline-flex items-center ${heights[size]}`}>
      <img
        src={logoWhite}
        alt={siteConfig.legalName}
        className={`${heights[size]} w-auto block`}
      />
    </span>
  );
};
