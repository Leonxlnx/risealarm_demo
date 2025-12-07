
import React from 'react';
import { Check, X } from 'lucide-react';
import { ScrollReveal } from '../ui/DesignSystem';

export const ComparisonSection = () => {
  return (
    <section className="py-32 px-6 bg-[#F9F9F7]">
        <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
                <div className="text-center mb-20">
                    <span className="font-mono uppercase text-xs tracking-widest text-[#FF6B00] font-bold block mb-4">Self Assessment</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-[#111]">Is Rise Right for You?</h2>
                </div>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 gap-8 items-start relative">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 -translate-x-1/2"></div>
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full items-center justify-center font-serif italic text-gray-400 z-10">
                    vs
                </div>

                {/* YES Card */}
                <ScrollReveal delay={100}>
                    <div className="group bg-white rounded-[2rem] p-10 md:p-14 border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
                        
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                <Check size={20} strokeWidth={3} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#111]">Rise IS for you if...</h3>
                        </div>
                        
                        <ul className="space-y-6 relative z-10">
                            {[
                                "You hit snooze 3+ times every morning",
                                "You're tired of being tired",
                                "You want to build better morning habits",
                                "You're ready to take control of your wake-up",
                                "You need accountability to get out of bed",
                                "You're serious about starting your day right"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-gray-700 font-medium group-hover:text-[#111] transition-colors">
                                    <Check size={18} className="text-green-500 mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        
                        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
                            <p className="text-green-700 font-bold text-sm uppercase tracking-widest">
                                Join thousands winning their mornings
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* NO Card */}
                <ScrollReveal delay={200}>
                    <div className="group bg-[#F5F5F0] rounded-[2rem] p-10 md:p-14 border border-transparent hover:border-red-200 shadow-inner hover:shadow-none transition-all duration-500 relative overflow-hidden opacity-90 hover:opacity-100">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gray-300 group-hover:bg-red-400 transition-colors"></div>

                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 shrink-0 group-hover:text-red-500 group-hover:bg-red-100 transition-colors">
                                <X size={20} strokeWidth={3} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-400 group-hover:text-[#111] transition-colors">Rise is NOT for you if...</h3>
                        </div>
                        
                        <ul className="space-y-6 relative z-10">
                            {[
                                "You're happy with hitting snooze 'just one more time'",
                                "You don't mind starting your day feeling behind",
                                "You're okay with waking up rushed and stressed",
                                "Missing morning workouts doesn't bother you",
                                "You're fine letting another day slip by",
                                "You believe tomorrow will somehow be different"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-gray-400 font-medium group-hover:text-gray-600 transition-colors">
                                    <X size={18} className="text-gray-300 mt-1 shrink-0 group-hover:text-red-400 transition-colors" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                            <p className="text-gray-400 font-medium italic text-sm">
                                (Let's be honest, you probably need it too)
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    </section>
  );
};
