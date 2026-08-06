import React from 'react';
import { Button } from '../components/Button';
import type { Page } from '../types';
import heroShanghai from '../assets/images/hero-shanghai.jpg';

interface HomePageProps {
  navigateTo: (page: Page) => void;
}

// Startseite: Vollflaechiges Hero mit Shanghai-Skyline und Missions-Karte.
export const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Hintergrundbild */}
      <div className="absolute inset-0">
        <img
          src={heroShanghai}
          alt="Shanghai skyline at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Missions-Karte */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-xl bg-black/70 backdrop-blur-sm text-white p-8 sm:p-10 rounded-lg shadow-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Mission</h1>
          <p className="text-lg leading-relaxed text-gray-100 mb-8">
            Bridging the gap between growth-seeking Chinese technology companies and
            clients in Africa, the Middle East and Europe. RKHC achieves this in
            collaboration with its local partners in the respective markets by building
            up a local presence and successfully implement growth strategies for the
            Chinese technology companies.
          </p>
          <Button variant="primary" onClick={() => navigateTo('about')} className="px-6 py-3 text-base">
            About Us
          </Button>
        </div>
      </div>
    </section>
  );
};
