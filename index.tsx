
import './index.css';
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// Modular Imports
import { Navbar, Ticker } from './components/ui/Navbar';
import { Hero } from './components/sections/Hero';
import { ProblemSection } from './components/sections/Problem';
import { SocialsSection } from './components/sections/Socials';
import { ComparisonSection } from './components/sections/Comparison';
import { HomePricing } from './components/sections/HomePricing';
import { CTASection } from './components/sections/CTA';

// Pages
import { ShopPage } from './pages/Shop';
import { AboutPage } from './pages/About';
import { DownloadPage } from './pages/Download';
import { SupportPage } from './pages/Support';
import { HowItWorksPage } from './pages/HowItWorks';
import { LegalHub } from './pages/StaticPages';
import { CheckoutPage } from './pages/Checkout';

const App = () => {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    window.scrollTo(0,0);
  }, [currentView]);

  const renderView = () => {
    switch(currentView) {
      case 'shop': return <ShopPage onCheckout={() => setCurrentView('checkout')} />;
      case 'about': return <AboutPage />;
      case 'download': return <DownloadPage />;
      case 'support': return <SupportPage />;
      case 'how-it-works': return <HowItWorksPage />;
      case 'legal': return <LegalHub onBack={() => setCurrentView('home')} />;
      case 'checkout': return <CheckoutPage onBack={() => setCurrentView('shop')} />;
      default: return (
        <>
          <Hero />
          <Ticker />
          <ProblemSection />
          <ComparisonSection />
          <HomePricing onBuy={() => setCurrentView('checkout')} />
          <SocialsSection />
          <CTASection onShop={() => setCurrentView('shop')} />
        </>
      );
    }
  };

  return (
    <div className="bg-[#F9F9F7] text-[#111] min-h-screen font-sans">
      <Navbar onViewChange={setCurrentView} />
      
      <main>
        {renderView()}
      </main>

      {currentView !== 'download' && currentView !== 'checkout' && (
        <footer className="bg-[#111] text-white pt-24 pb-12 px-6 border-t border-white/10">
           <div className="max-w-[1400px] mx-auto flex flex-col items-center">
              <h2 className="text-[15vw] font-bold text-[#222] leading-none mb-12 select-none tracking-tighter cursor-default transition-all duration-700 hover:text-white hover:tracking-tight hover:scale-105">
                RISE ALARM
              </h2>
              
              <div className="flex flex-col md:flex-row justify-between w-full text-sm text-gray-500 font-mono uppercase tracking-widest items-center">
                 <div className="mb-4 md:mb-0">© 2025 Rise Alarm Inc.</div>
                 <div className="flex gap-8 mb-4 md:mb-0">
                    <button onClick={() => setCurrentView('support')} className="hover:text-white transition-colors">Help</button>
                    <button onClick={() => setCurrentView('legal')} className="hover:text-white transition-colors">Legal & Privacy</button>
                 </div>
                 
                 <div className="flex gap-4">
                    <a href="https://www.instagram.com/risealarmapp/" target="_blank" className="hover:text-white transition-colors">IG</a>
                    <a href="https://www.tiktok.com/@risedaily.app" target="_blank" className="hover:text-white transition-colors">TT</a>
                    <a href="https://www.linkedin.com/company/risedailyapp/" target="_blank" className="hover:text-white transition-colors">LI</a>
                 </div>
              </div>
           </div>
        </footer>
      )}
    </div>
  );
};

// --- GLOBAL STYLES INJECTION ---
const style = document.createElement('style');
style.textContent = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    animation: marquee 40s linear infinite;
  }
  .pattern-grid-lg {
    background-image: linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px);
    background-size: 20px 20px;
  }
`;
document.head.appendChild(style);

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
