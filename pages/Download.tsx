
import React from 'react';
import { Smartphone, Bell } from 'lucide-react';

const PhoneMockup = ({ delay = 0 }: { delay?: number }) => (
  <div 
    className="w-[280px] h-[580px] bg-black rounded-[3rem] border-[8px] border-gray-900 relative overflow-hidden shadow-2xl flex flex-col transform transition-transform hover:scale-105 duration-500"
    style={{ animation: `float 6s ease-in-out infinite ${delay}s` }}
  >
     {/* Notch */}
     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-20"></div>
     
     {/* Screen Content */}
     <div className="flex-1 bg-white relative pt-12 px-6">
        <div className="flex justify-between items-center mb-8">
           <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
           <div className="w-20 h-4 bg-gray-100 rounded-full"></div>
        </div>
        
        <div className="text-center mt-12 mb-12">
           <div className="w-32 h-32 rounded-full border-4 border-[#FF6B00] flex items-center justify-center mx-auto mb-6 relative">
              <Bell size={40} className="text-[#FF6B00]" />
              <div className="absolute inset-0 border-4 border-[#FF6B00] rounded-full animate-ping opacity-20"></div>
           </div>
           <div className="text-4xl font-bold text-[#111]">07:00</div>
           <div className="text-sm text-gray-400 font-mono uppercase tracking-widest mt-2">Wake Up</div>
        </div>

        <div className="space-y-4">
           <div className="h-16 bg-black text-white rounded-2xl flex items-center justify-center font-bold">
              Scan Pod to Stop
           </div>
           <div className="h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 text-sm">
              Snooze disabled
           </div>
        </div>
     </div>
  </div>
);

export const DownloadPage = () => {
  return (
    <div className="min-h-screen bg-[#111] text-white pt-32 pb-24 relative overflow-hidden">
       {/* Background Noise */}
       <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
       
       <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
             <span className="text-[#FF6B00] font-mono uppercase tracking-widest text-xs font-bold mb-6 block">Coming Soon</span>
             <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                Your morning,<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-yellow-500">upgraded.</span>
             </h1>
             <p className="text-xl text-gray-400 mb-12 max-w-lg leading-relaxed">
                The Rise Alarm App is currently in final testing. It will launch on both iOS and Android stores shortly.
             </p>

             <div className="flex flex-col sm:flex-row gap-4">
                <button disabled className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl flex items-center gap-4 hover:bg-white/20 transition-colors cursor-not-allowed opacity-70">
                   <div className="text-left">
                      <div className="text-[10px] uppercase font-bold tracking-wider">Download on the</div>
                      <div className="text-xl font-bold leading-none">App Store</div>
                   </div>
                </button>
                <button disabled className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl flex items-center gap-4 hover:bg-white/20 transition-colors cursor-not-allowed opacity-70">
                   <div className="text-left">
                      <div className="text-[10px] uppercase font-bold tracking-wider">Get it on</div>
                      <div className="text-xl font-bold leading-none">Google Play</div>
                   </div>
                </button>
             </div>

             <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10 inline-flex items-center gap-6">
                 <div className="w-24 h-24 bg-white p-2 rounded-lg">
                    {/* Dummy QR Code */}
                    <div className="w-full h-full bg-black pattern-grid-lg"></div>
                 </div>
                 <div className="text-left">
                    <div className="font-bold text-white">Scan to join waitlist</div>
                    <div className="text-sm text-gray-400">Be notified instantly.</div>
                 </div>
             </div>
          </div>

          <div className="relative h-[600px] flex justify-center items-center">
             <div className="absolute top-10 left-10 lg:left-20 rotate-[-6deg] z-0 opacity-50 blur-[2px]">
                <PhoneMockup delay={0.5} />
             </div>
             <div className="relative z-10 rotate-[6deg]">
                <PhoneMockup />
             </div>
          </div>
       </div>
       
       <style>{`
         @keyframes float {
           0%, 100% { transform: translateY(0px); }
           50% { transform: translateY(-20px); }
         }
       `}</style>
    </div>
  );
};
