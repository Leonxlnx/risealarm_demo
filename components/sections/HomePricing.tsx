
import React from 'react';
import { ArrowRight, Check, Tag } from 'lucide-react';
import { ScrollReveal, ThePod } from '../ui/DesignSystem';

export const HomePricing = ({ onBuy }: { onBuy: () => void }) => {
  return (
    <section id="pricing" className="py-32 bg-white px-6">
        <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center bg-[#111] rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
                {/* Gradient Blob */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6B00] blur-[150px] opacity-20 pointer-events-none"></div>

                <div className="relative z-10">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 bg-[#FF6B00] text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest mb-6">
                             <Tag size={12} />
                             Early Bird Access
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">One simple price.<br/>Forever awake.</h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-md">
                            Get the Rise Pod and lifetime access to the basic protocol. No hidden subscriptions for hardware functionality.
                        </p>
                        
                        <div className="flex flex-col gap-4 mb-10">
                            {[
                                "Rise Alarm Pod (NFC Enabled)",
                                "Free App Access (iOS & Android)",
                                "Premium Adhesive Mount",
                                "1-Year Warranty"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[#FF6B00]"><Check size={14} /></div>
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-end gap-4 mb-10">
                            <div className="text-6xl font-bold">$18</div>
                            <div className="text-2xl text-gray-500 line-through mb-2 decoration-2 decoration-[#FF6B00]">$39</div>
                        </div>

                        <button 
                            onClick={onBuy}
                            className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-[#FF6B00] hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
                        >
                            Pre-Order Now
                            <ArrowRight size={20} />
                        </button>
                    </ScrollReveal>
                </div>

                <div className="relative z-10 flex justify-center items-center">
                    <div className="relative w-full aspect-square flex items-center justify-center">
                        <div className="absolute inset-0 bg-white/5 rounded-full backdrop-blur-3xl"></div>
                        <div className="hover:scale-110 transition-transform duration-700">
                             <ThePod scale={1.8} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};
