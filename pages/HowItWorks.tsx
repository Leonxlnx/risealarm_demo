
import React from 'react';
import { ProtocolSection } from '../components/sections/Protocol';

export const HowItWorksPage = () => {
  return (
    <div className="pt-24 bg-[#F2F2F0] min-h-screen">
       <div className="pt-8 pb-4 px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">How It Works</h1>
          <p className="text-gray-500">Simple. Effective. Working.</p>
       </div>
       <ProtocolSection />
    </div>
  );
};
