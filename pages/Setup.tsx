
import React from 'react';
import { ArrowLeft, Check, Smartphone, MoveRight, Wifi } from 'lucide-react';
import { ScrollReveal } from '../components/ui/DesignSystem';

const SetupStep = ({ number, title, desc, icon: Icon }: any) => (
  <div className="flex gap-6 md:gap-12 items-start relative pb-16 last:pb-0">
     <div className="absolute left-[26px] top-12 bottom-0 w-0.5 bg-gray-200 last:hidden"></div>
     
     <div className="w-14 h-14 rounded-full bg-[#111] text-white flex items-center justify-center font-bold text-xl shadow-lg shrink-0 relative z-10">
        {number}
     </div>
     
     <div className="pt-2">
         <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:border-[#FF6B00]/50 transition-colors">
            <div className="w-12 h-12 bg-[#FF6B00]/10 text-[#FF6B00] rounded-xl flex items-center justify-center mb-4">
               <Icon size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="text-gray-500 leading-relaxed">
               {desc}
            </p>
         </div>
     </div>
  </div>
);

export const SetupGuide = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-[#F9F9F7] pt-32 px-6 pb-24">
       <div className="max-w-3xl mx-auto">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-[#FF6B00] mb-12 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Support
          </button>
          
          <ScrollReveal>
             <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#111]">Setup Your Pod</h1>
             <p className="text-xl text-gray-500 mb-16">Follow these simple steps to get started with Rise Alarm.</p>
          </ScrollReveal>
          
          <div className="space-y-4">
             <ScrollReveal delay={100}>
                <SetupStep 
                   number="1"
                   title="Download the App"
                   desc="Available on iOS (and coming soon to Android). Create your account to start the setup process."
                   icon={Smartphone}
                />
             </ScrollReveal>
             
             <ScrollReveal delay={200}>
                <SetupStep 
                   number="2"
                   title="Place Your Pod"
                   desc="Peel the adhesive backing (included) and stick your Pod to a surface AWAY from your bed. Bathroom mirror, dresser, or doorway work best."
                   icon={MoveRight}
                />
             </ScrollReveal>
             
             <ScrollReveal delay={300}>
                <SetupStep 
                   number="3"
                   title="Scan to Pair"
                   desc="Open the Rise app, go to 'Pair Pod', and hold the top of your iPhone near the Rise logo on the Pod. It will vibrate when connected."
                   icon={Wifi}
                />
             </ScrollReveal>
             
             <ScrollReveal delay={400}>
                <div className="mt-12 bg-[#E6FFE6] border border-[#B3FFB3] p-6 rounded-2xl flex items-start gap-4">
                   <div className="w-6 h-6 bg-[#00CC00] text-white rounded-full flex items-center justify-center mt-1 shrink-0"><Check size={14} strokeWidth={3} /></div>
                   <div>
                      <h4 className="font-bold text-[#006600] mb-1">That's it!</h4>
                      <p className="text-[#004400] text-sm">Your alarm is now active. Set your wake-up time in the app and get ready for a better morning.</p>
                   </div>
                </div>
             </ScrollReveal>
          </div>
       </div>
    </div>
  );
};
