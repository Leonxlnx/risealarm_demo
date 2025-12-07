
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ui/DesignSystem';

export const CTASection = ({ onShop }: { onShop: () => void }) => {
  return (
    <section className="py-32 px-6 bg-[#F9F9F7] text-center">
        <div className="max-w-4xl mx-auto">
            <ScrollReveal>
                <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter text-[#111]">
                    Stop Snoozing.<br/>
                    <span className="text-[#FF6B00]">Start Living.</span>
                </h2>
                <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
                    Your mornings define your life. Take back control with Rise Alarm.
                </p>
                <button 
                    onClick={onShop}
                    className="px-12 py-6 bg-[#111] text-white rounded-full text-xl font-bold hover:bg-[#FF6B00] transition-colors shadow-2xl flex items-center gap-4 mx-auto group"
                >
                    Get Your Rise Pod
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
            </ScrollReveal>
        </div>
    </section>
  );
};
