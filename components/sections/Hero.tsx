
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal, ThePod, FluidBackground } from '../ui/DesignSystem';

export const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center overflow-hidden bg-[#F9F9F7] pt-24 md:pt-0">
      <FluidBackground />
      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center h-full gap-12 lg:gap-4">
         
         {/* Text Side */}
         <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center pt-8 lg:pt-0 order-2 lg:order-1 pb-12 lg:pb-0">
             <ScrollReveal>
               <h1 className="text-[12vw] sm:text-[8vw] lg:text-[4.5rem] xl:text-[5.5rem] font-bold tracking-[-0.04em] text-[#0A0A0A] leading-[0.95] mb-6 lg:mb-8">
                 WAKE UP.<br/>
                 TAP IN.<br/>
                 <span className="text-[#FF6B00]">START YOUR DAY.</span>
               </h1>
             </ScrollReveal>

             <ScrollReveal delay={100}>
               <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-md lg:max-w-lg mb-8 lg:mb-10 tracking-tight mx-auto lg:mx-0">
                 The alarm clock that gets you out of bed. Scan your Rise Pod across the room to silence your alarm.
               </p>
             </ScrollReveal>

             <ScrollReveal delay={200}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-4 bg-[#0A0A0A] text-white rounded-full text-sm lg:text-base font-bold flex items-center justify-center gap-3 hover:bg-[#FF6B00] transition-colors duration-300 group shadow-2xl"
                  >
                    Pre-Order Now — $18
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
             </ScrollReveal>
         </div>

         {/* Visual Side */}
         <div className="flex justify-center lg:justify-end items-center h-[40vh] lg:h-full perspective-1000 order-1 lg:order-2">
             <div 
               className="will-change-transform relative w-full flex justify-center lg:justify-end"
               style={{ transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)` }}
             >
                <div className="scale-[0.8] sm:scale-[0.9] lg:scale-[1.2] transform-gpu">
                   <ThePod scale={1.5} className="drop-shadow-2xl" />
                </div>
             </div>
         </div>
      </div>
    </section>
  );
};
