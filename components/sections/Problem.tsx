
import React from 'react';
import { SectionTag, Reveal, TiltCard, TextReveal } from '../ui/DesignSystem';
import { Clock, Smartphone, XCircle } from 'lucide-react';

export const ProblemSection = () => {
  return (
    <section className="bg-[#0A0A0A] text-white py-24 md:py-32 rounded-[2rem] md:rounded-[3rem] relative z-20 mx-2 md:mx-6 overflow-hidden mt-12 lg:mt-24 mb-16 lg:mb-32 perspective-1000">
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(45deg,#222_25%,transparent_25%,transparent_75%,#222_75%,#222),linear-gradient(45deg,#222_25%,transparent_25%,transparent_75%,#222_75%,#222)] bg-[length:40px_40px] bg-[position:0_0,20px_20px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
           <Reveal mode="blur">
             <span className="font-mono text-[#FF6B00] uppercase tracking-widest text-xs font-bold mb-4 block">The Struggle</span>
           </Reveal>
           <Reveal mode="mask" delay={200}>
             <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
                <TextReveal text="We All Fight the Morning Battle." />
             </h2>
           </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
           {[
             { 
               icon: <Clock size={32} className="text-[#FF6B00]" />, 
               title: "You hit snooze… again", 
               desc: "Every time the alarm rings, you tell yourself 'just 5 more minutes'. It's a trap." 
             },
             { 
               icon: <Smartphone size={32} className="text-[#FF6B00]" />, 
               title: "You scroll in bed", 
               desc: "Before you realize it, you've lost your morning to TikTok, Instagram, or texts." 
             },
             { 
               icon: <XCircle size={32} className="text-[#FF6B00]" />, 
               title: "You lose track", 
               desc: "Now you're running behind before the day has even started. You start tired and stressed." 
             }
           ].map((item, i) => (
             <Reveal key={i} delay={i * 200} mode="blur" className="h-full">
               <TiltCard className="h-full">
                  <div className="bg-[#151515] p-8 md:p-10 rounded-[2rem] border border-white/5 hover:border-[#FF6B00]/30 transition-all duration-500 group h-full shadow-2xl">
                      <div className="mb-6 bg-[#222] w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner group-hover:bg-[#FF6B00]/10">
                        {item.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-4">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base">{item.desc}</p>
                  </div>
               </TiltCard>
             </Reveal>
           ))}
        </div>
      </div>
    </section>
  );
};
