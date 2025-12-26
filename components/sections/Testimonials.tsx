
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => (
    <div className="w-[350px] md:w-[450px] flex-shrink-0 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm mx-4">
        <div className="flex text-[#FF6B00] mb-4 gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
        </div>
        <p className="text-lg font-medium text-[#111] mb-6 leading-relaxed">"{quote}"</p>
        <div>
            <div className="font-bold text-sm text-[#111]">{author}</div>
        </div>
    </div>
);

// OPTIMIZATION: Move static data outside component to avoid recreation on every render
const testimonials1 = [
    { quote: "I literally used to sleep through 3 alarms. Rise is the only thing that actually forces me out of bed.", author: "Sarah J." },
    { quote: "The physical act of walking to the pod changes everything. My brain wakes up before I can argue with it.", author: "Marcus T." },
    { quote: "Simple, effective, and annoying in the best way possible. I haven't been late to work in 3 months.", author: "Emily C." },
    { quote: "I tried barcode scanners, math problems, everything. Rise is better because it's hardware based. No cheating.", author: "David R." },
];

const testimonials2 = [
     { quote: "My morning routine finally exists. I actually have time to make coffee and read before work now.", author: "Jessica A." },
     { quote: "Buying a second pod for the kitchen forced me to walk even further. Best investment for my productivity.", author: "Tom H." },
     { quote: "The design is super clean. It doesn't look like a cheap gadget on my wall. It looks like it belongs there.", author: "Liam P." },
     { quote: "Finally an alarm that doesn't just annoy me, but actually wakes me up. The movement is key.", author: "Sophie K." }
];

// OPTIMIZATION: Memoize component to prevent re-renders when parent updates
export const TestimonialsSection = React.memo(function TestimonialsSection() {
    return (
        <section className="py-24 bg-[#F9F9F7] overflow-hidden border-t border-gray-200/50">
            <div className="text-center mb-16 px-6">
                <span className="font-mono text-[#FF6B00] uppercase tracking-widest text-xs font-bold mb-4 block">Community</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#111]">Join thousands of<br/>morning winners.</h2>
            </div>
            
            {/* Row 1: Left to Right */}
            <div className="flex mb-8 overflow-hidden relative">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F9F9F7] to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F9F9F7] to-transparent z-10"></div>
                
                <div className="flex animate-marquee">
                    {[...testimonials1, ...testimonials1, ...testimonials1].map((t, i) => (
                        <TestimonialCard key={i} quote={t.quote} author={t.author} />
                    ))}
                </div>
            </div>

             {/* Row 2: Right to Left */}
             <div className="flex overflow-hidden relative">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F9F9F7] to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F9F9F7] to-transparent z-10"></div>
                
                <div className="flex animate-marquee-reverse">
                    {[...testimonials2, ...testimonials2, ...testimonials2].map((t, i) => (
                        <TestimonialCard key={i} quote={t.quote} author={t.author} />
                    ))}
                </div>
            </div>
        </section>
    );
});
