
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

// --- HIGH END ANIMATION COMPONENTS ---

/**
 * Reveal Component
 * Supports multiple modes:
 * - 'blur': Fades in with a blur and slight scale (Standard high-end feel)
 * - 'mask': Text slides up from a hidden overflow container (Editorial feel)
 * - 'slide': Simple slide up (Classic)
 */
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  mode?: 'blur' | 'mask' | 'slide';
  yOffset?: number;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 1000, 
  mode = 'blur',
  yOffset = 40 
}) => {
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const ease = "cubic-bezier(0.25, 1, 0.5, 1)"; // "The expensive ease"

  if (mode === 'mask') {
    return (
      <div ref={ref} className={`overflow-hidden ${className}`}>
        <div
          style={{
            transition: `transform ${duration}ms ${ease} ${delay}ms, opacity ${duration}ms ${ease} ${delay}ms`,
            transform: isVisible ? 'translateY(0)' : 'translateY(110%)',
            opacity: isVisible ? 1 : 0, // Slight fade to prevent jagged edges
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`will-change-transform will-change-opacity ${className}`}
      style={{
        transition: `all ${duration}ms ${ease}`,
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? 'translateY(0) scale(1)' 
          : `translateY(${yOffset}px) scale(${mode === 'blur' ? 0.95 : 1})`,
        filter: mode === 'blur' ? (isVisible ? 'blur(0px)' : 'blur(20px)') : 'none',
      }}
    >
      {children}
    </div>
  );
};

export const ScrollReveal = Reveal;

// --- STAGGER CONTAINER ---
// Use this to wrap lists. Children need to handle their own delay if manually passed, 
// or this component could clone children. For simplicity in this stack, we use manual delays in parent.

export const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gray-200/50 bg-white/50 backdrop-blur-xl mb-8 w-fit shadow-sm">
      <span className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full animate-pulse shadow-[0_0_12px_#FF6B00]"></span>
      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gray-500 font-bold">{text}</span>
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
          className={`relative z-10 transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:-translate-y-4`}
        >
          <img 
            src="/assets/RisePod.png" 
            alt="Rise Alarm Pod"
            className="w-full h-full object-contain drop-shadow-2xl"
          />
          {/* Reflection/Shadow for grounding */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black/20 blur-xl rounded-[100%] transition-all duration-1000 group-hover:w-[60%] group-hover:bg-black/10"></div>
       </div>
    </div>
  );
};
