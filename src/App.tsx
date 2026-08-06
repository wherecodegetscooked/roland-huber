import React, { useState, useEffect, useCallback } from 'react';
import { Navbar, Footer } from './components';
import { HomePage, AboutPage, ManagementPage, ContactPage, DisclaimerPage, PrivacyPage } from './pages';
import type { Page } from './types';
import { siteConfig } from './constants';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Pfad -> Page. Neue Route hier ergaenzen.
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path === '/about') setCurrentPage('about');
      else if (path === '/management') setCurrentPage('management');
      else if (path === '/contact') setCurrentPage('contact');
      else if (path === '/disclaimer') setCurrentPage('disclaimer');
      else if (path === '/privacy') setCurrentPage('privacy');
      else setCurrentPage('home');
      window.scrollTo(0, 0);
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Minimaler Title + Canonical pro Seite. Bei Bedarf erweitern.
  useEffect(() => {
    const path = currentPage === 'home' ? '/' : `/${currentPage}`;
    document.title = currentPage === 'home' ? siteConfig.legalName : `${currentPage} | ${siteConfig.legalName}`;
    const canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalEl) canonicalEl.href = `${siteConfig.url}${path}`;
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = useCallback((page: Page) => {
    const path = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({}, '', path);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'about': return <AboutPage />;
      case 'management': return <ManagementPage />;
      case 'contact': return <ContactPage />;
      case 'disclaimer': return <DisclaimerPage />;
      case 'privacy': return <PrivacyPage />;
      default: return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900">
      <Navbar
        scrolled={scrolled}
        currentPage={currentPage}
        navigateTo={navigateTo}
      />

      <main className="flex-1">
        {renderPage()}
      </main>

      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;
