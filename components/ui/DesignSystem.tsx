
import React, { useEffect, useState, useRef } from 'react';

// --- SHARED HOOKS ---
export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scroll = totalScroll / windowHeight;
        setScrollProgress(scroll);
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return scrollProgress;
};

// --- CORE COMPONENTS ---

export const ScrollReveal = ({ children, className = "", delay = 0, yOffset = 60, duration = 1500 }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" } // Late trigger for better effect
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      // "Expensive" Animation: Blur-in + Lift + Slow Ease
      className={`transform transition-all will-change-transform will-change-opacity ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', // Ultra-smooth "Apple-like" easing
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : `translateY(${yOffset}px) scale(0.98)`,
        filter: isVisible ? 'blur(0px)' : 'blur(12px)', // The "Premium" Blur Effect
      }}
    >
      {children}
    </div>
  );
};

export const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-gray-200 bg-white/80 backdrop-blur-md mb-8 w-fit shadow-sm hover:shadow-md transition-shadow duration-500">
      <span className="w-2 h-2 bg-[#FF6B00] rounded-full animate-pulse shadow-[0_0_10px_#FF6B00]"></span>
      <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-gray-500 font-bold">{text}</span>
  </div>
);

// --- VISUAL ASSETS ---

export const ThePod = ({ scale = 1, className = "", highlight = 'none' }: { scale?: number, className?: string, highlight?: string }) => {
  return (
    <div 
      className={`relative group perspective-1000 ${className}`}
      style={{ 
        width: `${300 * scale}px`, 
        height: 'auto',
        transformStyle: 'preserve-3d'
      }}
    >
       <div 
          className={`relative z-10 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]`}
        >
          <img 
            src="/assets/RisePod.png" 
            alt="Rise Alarm Pod"
            className="w-full h-full object-contain drop-shadow-2xl"
          />
       </div>
    </div>
  );
};
