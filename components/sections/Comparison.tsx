
import React from 'react';
import { Check, X } from 'lucide-react';
import { ScrollReveal } from '../ui/DesignSystem';

export const ComparisonSection = () => {
  return (
    <section className="py-24 px-6 bg-[#F9F9F7]">
        <div className="max-w-6xl mx-auto">
            <ScrollReveal>
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#111]">Is Rise Right for You?</h2>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* YES Card */}
                <ScrollReveal delay={100}>
                    <div className="bg-[#f0fdf4] border-2 border-green-200 rounded-[2rem] p-8 md:p-12 h-full shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0 shadow-md">
                                <Check size={28} strokeWidth={3} />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-[#111]">Rise is for you if:</h3>
                        </div>
                        <ul className="space-y-6">
                            {[
                                "You hit snooze 3+ times every morning",
                                "You're tired of being tired",
                                "You want to build better morning habits",
                                "You're ready to take control of your wake-up",
                                "You need accountability to get out of bed",
                                "You're serious about starting your day right"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-green-900 font-medium">
                                    <Check size={20} className="text-green-600 mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-12 bg-white/50 border border-green-200 rounded-xl p-4 text-center text-green-800 font-bold text-sm uppercase tracking-wide">
                            Join thousands who are winning their mornings
                        </div>
                    </div>
                </ScrollReveal>

                {/* NO Card */}
                <ScrollReveal delay={200}>
                    <div className="bg-[#fef2f2] border-2 border-red-200 rounded-[2rem] p-8 md:p-12 h-full shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white shrink-0 shadow-md">
                                <X size={28} strokeWidth={3} />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-[#111]">Rise is NOT for you if:</h3>
                        </div>
                        <ul className="space-y-6">
                            {[
                                "You're happy with hitting snooze 'just one more time'",
                                "You don't mind starting your day feeling behind",
                                "You're okay with waking up rushed and stressed",
                                "Missing morning workouts doesn't bother you",
                                "You're fine letting another day slip by",
                                "You believe tomorrow will somehow be different"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-red-900 font-medium">
                                    <X size={20} className="text-red-500 mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-12 text-center text-red-800/60 font-medium italic text-sm">
                            (Let's be honest, you probably need it too)
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    </section>
  );
};
