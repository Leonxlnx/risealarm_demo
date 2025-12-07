
import React from 'react';
import { ArrowLeft } from 'lucide-react';

export const LegalHub = ({ onBack }: any) => (
  <div className="min-h-screen bg-[#F9F9F7] pt-32 px-6 pb-24">
    <div className="max-w-3xl mx-auto">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-[#FF6B00] mb-12 transition-colors"
      >
        <ArrowLeft size={16} /> Back
      </button>
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-[#111]">Legal Information</h1>
      
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-6 text-[#FF6B00]">Terms of Service</h2>
          <div className="prose prose-sm text-gray-600">
             <p>Last updated: 11/21/2025. By using Rise Alarm, you agree to our terms.</p>
             <p><strong>1. Acceptance:</strong> Accessing our app or using the pod constitutes agreement.</p>
             <p><strong>2. Usage:</strong> You must be 13+. Do not misuse the hardware.</p>
             <p><strong>3. Liability:</strong> We are not responsible if you still oversleep. The system helps, but you must do the work.</p>
             <p><strong>4. Returns:</strong> 30-day policy applies to undamaged hardware.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-[#FF6B00]">Privacy Policy</h2>
          <div className="prose prose-sm text-gray-600">
             <p><strong>Data Collection:</strong> We collect email (for account), payment info (via Stripe), and usage stats.</p>
             <p><strong>No Audio:</strong> The Pod does not record audio. The app does not record sleep sounds.</p>
             <p><strong>Third Parties:</strong> We share data only with necessary providers (hosting, payment).</p>
             <p><strong>Rights:</strong> You can request data deletion at privacy@risedaily.app.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-[#FF6B00]">Warranty</h2>
          <div className="prose prose-sm text-gray-600">
             <p>Rise Alarm Pods come with a 1-year limited warranty against manufacturing defects. This does not cover water damage, accidental breakage, or loss.</p>
          </div>
        </section>
      </div>
    </div>
  </div>
);
