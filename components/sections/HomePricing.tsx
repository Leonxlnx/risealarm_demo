
import React from 'react';
import { ArrowRight, Check, Tag, ShieldCheck } from 'lucide-react';
import { ScrollReveal, ThePod } from '../ui/DesignSystem';

export const HomePricing = ({ onBuy }: { onBuy: () => void }) => {
  return (
    <section id="pricing" className="py-24 bg-[#F9F9F7] px-4 md:px-6">
        <div className="max-w-[1400px] mx-auto">
            <div className="relative bg-[#111] rounded-[3rem] p-8 md:p-24 text-white overflow-hidden shadow-2xl flex flex-col items-center text-center">
                
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF6B00] blur-[200px] opacity-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500 blur-[200px] opacity-5 pointer-events-none"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 bg-[#FF6B00] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 shadow-lg shadow-orange-500/20">
                             <Tag size={12} />
                             Limited Early Access Batch
                        </div>
                        <h2 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-none">
                            One Price.<br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Forever Awake.</span>
                        </h2>
                        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                            No monthly subscriptions. No hidden fees. Just the hardware you need to master your mornings, once and for all.
                        </p>

                        <div className="flex flex-col md:flex-row justify-center gap-8 mb-16 text-left">
                           <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-colors">
                              <div className="w-8 h-8 rounded-full bg-[#FF6B00] flex items-center justify-center shrink-0">
                                 <Check size={16} />
                              </div>
                              <div>
                                 <div className="font-bold text-lg">Rise Alarm Pod</div>
                                 <div className="text-sm text-gray-400">NFC Enabled Hardware</div>
                              </div>
                           </div>
                           <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-colors">
                              <div className="w-8 h-8 rounded-full bg-[#FF6B00] flex items-center justify-center shrink-0">
                                 <Check size={16} />
                              </div>
                              <div>
                                 <div className="font-bold text-lg">Lifetime App Access</div>
                                 <div className="text-sm text-gray-400">iOS & Android Compatible</div>
                              </div>
                           </div>
                           <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-colors">
                              <div className="w-8 h-8 rounded-full bg-[#FF6B00] flex items-center justify-center shrink-0">
                                 <Check size={16} />
                              </div>
                              <div>
                                 <div className="font-bold text-lg">Premium Mounting</div>
                                 <div className="text-sm text-gray-400">Adhesive Backing Included</div>
                              </div>
                           </div>
                        </div>

                        <div className="flex flex-col items-center gap-8">
                             <div className="flex items-baseline gap-4">
                                <span className="text-7xl font-bold">$18</span>
                                <span className="text-3xl text-gray-500 line-through decoration-2 decoration-[#FF6B00]">$39</span>
                             </div>

                             <button 
                                onClick={onBuy}
                                className="w-full md:w-auto px-16 py-6 bg-white text-black rounded-full font-bold text-xl hover:bg-[#FF6B00] hover:text-white transition-all duration-300 flex items-center justify-center gap-4 shadow-2xl hover:shadow-[#FF6B00]/50 hover:scale-105"
                            >
                                Pre-Order Now
                                <ArrowRight size={24} />
                            </button>
                            
                            <p className="text-sm text-gray-500 flex items-center gap-2">
                               <ShieldCheck size={14} /> 30-Day Money Back Guarantee
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Floating Pod Visual */}
                <div className="relative mt-24 w-full max-w-lg mx-auto pointer-events-none">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-3xl"></div>
                     <ThePod scale={2.5} />
                </div>
            </div>
        </div>
    </section>
  );
};
