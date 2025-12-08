
import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

export const Navbar = ({ onViewChange, cartCount }: { onViewChange: (view: string) => void, cartCount: number }) => {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const isExpanded = !scrolled || hovered || mobileMenuOpen;

  const handleMobileNav = (view: string) => {
    setMobileMenuOpen(false);
    onViewChange(view);
  };

  return (
    <>
      <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
         <nav 
           onMouseEnter={() => setHovered(true)}
           onMouseLeave={() => setHovered(false)}
           className={`
             pointer-events-auto
             transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
             ${isExpanded ? 'w-[95%] md:w-[1200px] bg-white/70 border-white/50 py-4' : 'w-[95%] md:w-[600px] bg-white/90 border-white/80 py-3'}
             shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-2xl border rounded-full px-6 flex justify-between items-center relative z-50
           `}
         >
            {/* Left: Logo */}
            <div className="flex-1 flex justify-start">
                <div className="flex items-center gap-3 cursor-pointer group shrink-0" onClick={() => handleMobileNav('home')}>
                   <img src="/assets/ralogo.png" alt="Rise Alarm Logo" className="h-6 md:h-8 w-auto object-contain" />
                   <span className={`font-bold text-sm md:text-base tracking-tight text-[#111] transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
                      Rise Alarm
                   </span>
                </div>
            </div>

            {/* Center: Desktop Links (Hidden on Mobile) */}
            <div className="hidden md:flex flex-0 shrink-0 justify-center">
                <div 
                  className={`
                    flex items-center gap-8 text-[11px] font-bold text-gray-600 uppercase tracking-widest transition-all duration-700 overflow-hidden
                    ${isExpanded ? 'opacity-100 max-w-[500px] px-4' : 'opacity-0 max-w-0 px-0'}
                  `}
                >
                   <button onClick={() => onViewChange('how-it-works')} className="hover:text-[#FF6B00] transition-colors whitespace-nowrap">How It Works</button>
                   <button onClick={() => onViewChange('about')} className="hover:text-[#FF6B00] transition-colors whitespace-nowrap">About</button>
                   <button onClick={() => onViewChange('support')} className="hover:text-[#FF6B00] transition-colors whitespace-nowrap">FAQ</button>
                </div>
            </div>

            {/* Right: Actions (Desktop) & Hamburger (Mobile) */}
            <div className="flex-1 flex justify-end items-center gap-2 md:gap-3">
               
               {/* Desktop Actions */}
               <div className="hidden md:flex items-center gap-3">
                   <button 
                     onClick={() => onViewChange('download')}
                     className={`bg-gray-100 text-[#111] px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors ${!isExpanded ? 'hidden' : ''}`}
                   >
                     App
                   </button>
                   
                   <div className="flex items-center gap-2">
                       <button 
                         onClick={() => onViewChange('shop')}
                         className="bg-[#111] text-white px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-[#FF6B00] transition-colors shadow-lg"
                       >
                         Pre-Order
                       </button>
                       
                       <button 
                          onClick={() => onViewChange('cart')}
                          className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#111] hover:text-[#FF6B00] transition-colors border border-gray-100 shadow-md group"
                       >
                          <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
                          {cartCount > 0 && (
                              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF6B00] rounded-full text-[9px] text-white flex items-center justify-center font-bold">
                                  {cartCount}
                              </div>
                          )}
                       </button>
                   </div>
               </div>

               {/* Mobile Hamburger */}
               <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#111] border border-gray-100 shadow-sm"
               >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
               </button>
            </div>
         </nav>
      </div>

      {/* Mobile Full Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#F9F9F7] z-40 flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${mobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-full invisible'}`}
      >
          <div className="flex flex-col items-center gap-8 text-center">
             <button onClick={() => handleMobileNav('home')} className="text-4xl font-bold text-[#111] hover:text-[#FF6B00] transition-colors">Home</button>
             <button onClick={() => handleMobileNav('how-it-works')} className="text-4xl font-bold text-[#111] hover:text-[#FF6B00] transition-colors">How It Works</button>
             <button onClick={() => handleMobileNav('about')} className="text-4xl font-bold text-[#111] hover:text-[#FF6B00] transition-colors">About</button>
             <button onClick={() => handleMobileNav('shop')} className="text-4xl font-bold text-[#111] hover:text-[#FF6B00] transition-colors">Shop</button>
             <button onClick={() => handleMobileNav('support')} className="text-4xl font-bold text-[#111] hover:text-[#FF6B00] transition-colors">Support</button>
             <button onClick={() => handleMobileNav('download')} className="text-4xl font-bold text-[#111] hover:text-[#FF6B00] transition-colors">Download App</button>
             
             <button 
                 onClick={() => handleMobileNav('cart')}
                 className="mt-8 flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-gray-500"
             >
                <ShoppingBag size={16} /> View Cart ({cartCount})
             </button>
          </div>
      </div>
    </>
  );
};

// Creative Visual Strip (Replaces Ticker)
export const Ticker = () => {
  return (
    <div className="relative w-full h-[40vh] md:h-[50vh] bg-[#FF6B00] overflow-hidden flex items-center justify-center isolate">
       
       {/* Layer 1: Animated Radial Gradients */}
       <div className="absolute top-0 left-0 w-full h-full opacity-60 mix-blend-overlay">
          <div className="absolute top-[-50%] left-[-20%] w-[100vw] h-[100vw] bg-yellow-400 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[-50%] right-[-20%] w-[80vw] h-[80vw] bg-red-600 rounded-full blur-[120px] opacity-70"></div>
       </div>

       {/* Layer 2: Scrolling Texture/Wave Pattern */}
       <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply"></div>
       
       {/* Layer 3: Massive Typography Marquee */}
       <div className="absolute top-1/2 -translate-y-1/2 w-full -rotate-2 scale-110">
          <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
             {[1,2,3,4].map((i) => (
                <div key={i} className="flex items-center gap-12">
                   <span className="text-[15vh] md:text-[25vh] font-bold text-[#0A0A0A] tracking-tighter leading-none opacity-90">
                      WAKE UP FOR REAL
                   </span>
                   <span className="w-[10vh] h-[10vh] bg-[#0A0A0A] rounded-full"></span>
                   <span className="text-[15vh] md:text-[25vh] font-bold text-white tracking-tighter leading-none stroke-black">
                      NO EXCUSES
                   </span>
                   <span className="w-[10vh] h-[10vh] border-[10px] border-[#0A0A0A] rounded-full"></span>
                </div>
             ))}
          </div>
       </div>

       {/* Layer 4: Floating Abstract Shapes */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-32 h-32 border-[2px] border-white/30 rounded-full animate-bounce duration-[3000ms]"></div>
          <div className="absolute bottom-[30%] left-[5%] w-24 h-24 border-[2px] border-black/10 rounded-full animate-pulse"></div>
       </div>
    </div>
  );
};
