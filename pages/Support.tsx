
import React from 'react';
import { Mail, BookOpen, AlertCircle, Truck, RefreshCw } from 'lucide-react';
import { FAQSection } from '../components/sections/FAQ';

const SupportCard = ({ icon: Icon, title, desc }: any) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#FF6B00] transition-colors group">
     <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-[#111] group-hover:bg-[#FF6B00] group-hover:text-white transition-colors mb-4">
        <Icon size={20} />
     </div>
     <h3 className="font-bold text-lg mb-2">{title}</h3>
     <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

export const SupportPage = () => {
  return (
    <div className="bg-[#F9F9F7] pt-32 pb-24">
       <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
             <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Hub</h1>
             <p className="text-xl text-gray-500">How can we help you today?</p>
             
             <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-[#111] text-white rounded-full">
                <Mail size={16} />
                <span className="font-mono text-sm">max@risealarm.app</span>
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-24">
             <SupportCard 
                icon={BookOpen}
                title="Setup Guide"
                desc="1. Download App. 2. Place Pod. 3. Scan to pair. It's that simple."
             />
             <SupportCard 
                icon={AlertCircle}
                title="Troubleshooting"
                desc="Pod not scanning? Ensure NFC is on. Remove thick cases. Tap top of phone."
             />
             <SupportCard 
                icon={Truck}
                title="Shipping Info"
                desc="We ship worldwide. US orders take 3-5 days. International 7-14 days."
             />
             <SupportCard 
                icon={RefreshCw}
                title="Returns & Warranty"
                desc="30-day money back guarantee. 1-year warranty on hardware defects."
             />
          </div>

          <div className="border-t border-gray-200 pt-16">
             <FAQSection />
          </div>
       </div>
    </div>
  );
};
