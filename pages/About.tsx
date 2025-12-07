
import React from 'react';
import { Linkedin } from 'lucide-react';

const FounderCard = ({ name, title, role, linkedin }: any) => (
  <div className="group relative">
     <div className="aspect-[3/4] bg-gray-200 rounded-3xl overflow-hidden mb-6 relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
           {/* Placeholder Silhouette */}
           <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" opacity="0.5">
             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
           </svg>
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
     </div>
     <h3 className="text-2xl font-bold">{name}</h3>
     <p className="text-[#FF6B00] font-mono text-xs uppercase tracking-widest font-bold mb-2">{title}</p>
     <a href={linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#0077b5] transition-colors">
        <Linkedin size={16} /> Connect on LinkedIn
     </a>
  </div>
);

export const AboutPage = () => {
  return (
    <div className="bg-[#F9F9F7] pt-32 pb-24">
       {/* Mission */}
       <div className="max-w-4xl mx-auto px-6 mb-32 text-center">
          <span className="text-[#FF6B00] font-mono uppercase tracking-widest text-xs font-bold mb-6 block">Our Mission</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Wake up on your terms. <br/>
            <span className="text-gray-400">Stop the snooze. Start living.</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
             We built Rise because we were tired of being tired. The snooze button is a lie. It steals your momentum before the day even begins. Rise is the hardware-software solution designed to break the cycle.
          </p>
       </div>

       {/* Founders */}
       <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold">Meet the Founders</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
             <FounderCard 
                name="Max"
                title="Co-Founder"
                linkedin="#"
             />
             <FounderCard 
                name="Dan"
                title="Co-Founder"
                linkedin="#"
             />
          </div>
       </div>
    </div>
  );
};
