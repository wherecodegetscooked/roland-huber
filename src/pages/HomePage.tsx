import React from 'react';
import type { Page } from '../types';
import heroShanghai from '../assets/images/hero-shanghai.jpg';

interface HomePageProps {
  navigateTo: (page: Page) => void;
}

// Startseite: Vollflaechiges Hero mit Shanghai-Skyline, Missionstext direkt
// auf dem Bild (linksbuendig, ohne Kasten).
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
        {/* Verlauf von links fuer Lesbarkeit des Textes */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
      </div>

      {/* Missionstext direkt auf dem Bild */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl text-left text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]">
          <h1 className="text-5xl sm:text-7xl font-bold mb-8">Mission</h1>
          <p className="text-xl sm:text-2xl leading-relaxed mb-10">
            Bridging the gap between growth-seeking Chinese technology companies and
            clients in Africa, the Middle East and Europe. RKHC achieves this in
            collaboration with its local partners in the respective markets by building
            up a local presence and successfully implement growth strategies for the
            Chinese technology companies.
          </p>
          <button
            onClick={() => navigateTo('about')}
            className="px-7 py-3 rounded-full text-base font-medium bg-black/30 text-white border border-white/40 hover:bg-black/50 transition-colors"
          >
            About Us
          </button>
        </div>
      </div>
    </section>
  );
};
