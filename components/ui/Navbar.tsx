
import React, { useState, useEffect } from 'react';

export const Navbar = ({ onViewChange }: { onViewChange: (view: string) => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
       <nav 
         className={`
           pointer-events-auto
           transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
           ${scrolled ? 'w-[95%] md:w-[800px] bg-white/80 border-white/40 shadow-2xl backdrop-blur-2xl py-3' : 'w-[95%] md:w-[1200px] bg-white/40 border-white/20 shadow-sm backdrop-blur-md py-4'}
           border rounded-full px-4 md:px-6 flex justify-between items-center
         `}
       >
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onViewChange('home')}>
             <img src="/assets/ralogo.png" alt="Rise Alarm Logo" className="h-8 w-auto object-contain" />
          </div>

          <div className={`hidden md:flex items-center gap-8 text-xs font-bold text-gray-600 uppercase tracking-wider transition-all duration-500 ${scrolled ? 'opacity-0 w-0 overflow-hidden scale-90' : 'opacity-100 scale-100'}`}>
             <button onClick={() => onViewChange('shop')} className="hover:text-[#FF6B00] transition-colors">Shop</button>
             <button onClick={() => onViewChange('how-it-works')} className="hover:text-[#FF6B00] transition-colors">How It Works</button>
             <button onClick={() => onViewChange('about')} className="hover:text-[#FF6B00] transition-colors">About</button>
             <button onClick={() => onViewChange('support')} className="hover:text-[#FF6B00] transition-colors">Support</button>
          </div>

          <div className="flex items-center gap-3">
             <button 
               onClick={() => onViewChange('download')}
               className="hidden md:block bg-gray-100 text-[#111] px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors"
             >
               Download App
             </button>
             <button 
               onClick={() => onViewChange('shop')}
               className="bg-[#111] text-white px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-[#FF6B00] transition-colors shadow-lg"
             >
               Pre-Order
             </button>
          </div>
       </nav>
    </div>
  );
};

export const Ticker = () => (
  <div className="bg-[#FF6B00] py-3 overflow-hidden relative z-20">
    <div className="flex gap-12 animate-marquee whitespace-nowrap font-mono text-sm font-bold uppercase tracking-widest text-black/90">
      {Array(10).fill(" /// Wake Up. Tap In. Start Your Day. /// No Snooze Allowed /// Build Habits").map((t, i) => (
        <span key={i}>{t}</span>
      ))}
    </div>
  </div>
);
