
import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const SocialButton = ({ href, icon: Icon, label, color }: any) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center gap-2"
  >
    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white border border-gray-200 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 shadow-sm group-hover:shadow-xl ${color}`}>
      <Icon size={32} />
    </div>
    <span className="text-xs font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity text-gray-500 translate-y-2 group-hover:translate-y-0 duration-300">
      {label}
    </span>
  </a>
);

export const SocialsSection = () => {
  return (
    <section className="py-24 bg-[#F9F9F7] border-t border-gray-200/50">
       <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-12">Join the Club.</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
             <SocialButton 
               href="https://www.instagram.com/risealarmapp/" 
               icon={Instagram} 
               label="Instagram"
               color="group-hover:text-[#E1306C] group-hover:border-[#E1306C]"
             />
             <SocialButton 
               href="https://www.tiktok.com/@risedaily.app" 
               icon={({size}: any) => (
                 <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                   <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
                 </svg>
               )} 
               label="TikTok"
               color="group-hover:text-black group-hover:border-black"
             />
             <SocialButton 
               href="https://www.linkedin.com/company/risedailyapp/" 
               icon={Linkedin} 
               label="LinkedIn"
               color="group-hover:text-[#0077b5] group-hover:border-[#0077b5]"
             />
             <SocialButton 
               href="#" 
               icon={Twitter} 
               label="Twitter"
               color="group-hover:text-black group-hover:border-black"
             />
          </div>
       </div>
    </section>
  );
};
