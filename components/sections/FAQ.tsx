
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { ScrollReveal } from '../ui/DesignSystem';

const FAQItem = ({ question, answer, isOpen, onClick }: any) => {
  return (
    <div 
      className="border-b border-gray-200 py-10 cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
         <h4 className={`text-xl md:text-3xl font-bold transition-colors duration-300 text-left ${isOpen ? 'text-[#FF4F00]' : 'text-[#111] group-hover:text-gray-600'}`}>
            {question}
         </h4>
         <div className={`shrink-0 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#FF4F00] border-[#FF4F00] rotate-180' : 'bg-white group-hover:bg-gray-50'}`}>
            {isOpen ? <Minus size={20} className="text-white"/> : <Plus size={20} className="text-[#111]"/>}
         </div>
      </div>
      
      <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
         <div className="overflow-hidden">
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl text-left">
               {answer}
            </p>
         </div>
      </div>
    </div>
  );
};

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
       q: "What is Rise?",
       a: "Rise is a new way to wake up; an alarm app paired with a physical Rise Pod that removes the snooze button entirely. To stop your alarm, you have to stand up and tap your phone on the Pod."
    },
    {
       q: "How does the Rise Pod work?",
       a: "The Pod uses passive NFC technology. When your alarm goes off, the only way to turn it off is by physically tapping your phone on the Pod. No Bluetooth. No pairing. No charging."
    },
    {
       q: "Why do I have to stand up?",
       a: "Snoozing keeps you tired. Rise forces you to stand up, move, and interrupt your half-asleep state, which leads to more consistent mornings and better wake-ups."
    },
    {
       q: "What phones are compatible?",
       a: "Any modern iPhone or Android device that supports NFC (basically, if you can use tap-to-pay, you can use Rise)."
    },
    {
       q: "What happens if I forget my alarm?",
       a: "Rise includes an Emergency Turnoff inside the app. It requires a short confirmation sequence but it ensures you're never stuck with the alarm going off if you're traveling."
    },
    {
       q: "Do Not Disturb / Silent Mode?",
       a: "Yes. As long as you give the app the correct permissions, Rise alarms override silent mode and DND."
    }
  ];

  return (
    <section className="py-32 bg-white px-6">
       <div className="max-w-[1000px] mx-auto text-center">
          <ScrollReveal>
             <div className="flex flex-col items-center gap-4 mb-16">
                <span className="font-mono uppercase text-xs tracking-widest text-[#FF4F00] font-bold">Knowledge Base</span>
                <h2 className="text-5xl font-bold text-[#111]">Everything you need<br/>to know.</h2>
             </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
             {faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                   <FAQItem 
                     question={faq.q} 
                     answer={faq.a} 
                     isOpen={openIndex === i} 
                     onClick={() => setOpenIndex(openIndex === i ? null : i)}
                   />
                </ScrollReveal>
             ))}
          </div>
       </div>
    </section>
  );
};
