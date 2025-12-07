
import React from 'react';
import { Bell } from 'lucide-react';

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
           <div className="h-16 bg-black text-white rounded-2xl flex items-center justify-center font-bold shadow-lg">
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
    <div className="min-h-screen bg-[#F9F9F7] text-[#111] pt-32 pb-24 relative overflow-hidden">
       {/* Background Noise */}
       <div className="absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
       
       <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
             <span className="text-[#FF6B00] font-mono uppercase tracking-widest text-xs font-bold mb-6 block">Coming Soon</span>
             <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                Your morning,<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-orange-400">upgraded.</span>
             </h1>
             <p className="text-xl text-gray-500 mb-12 max-w-lg leading-relaxed">
                The Rise Alarm App is currently in final beta testing. It will launch on both iOS and Android stores shortly.
             </p>

             <div className="flex flex-col sm:flex-row gap-4">
                {/* Apple Store Button */}
                <button disabled className="px-6 py-3 bg-black text-white rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-colors shadow-xl cursor-not-allowed opacity-80">
                   <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.15 4.12-1.14 1.05.04 2.12.38 2.98 1.19-2.6 1.6-2.15 5.42.44 6.6-.58 1.84-1.58 3.52-2.62 5.58zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                   <div className="text-left">
                      <div className="text-[10px] leading-none mb-1">Download on the</div>
                      <div className="text-xl font-bold leading-none">App Store</div>
                   </div>
                </button>

                {/* Google Play Button */}
                <button disabled className="px-6 py-3 bg-black text-white rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-colors shadow-xl cursor-not-allowed opacity-80">
                   <svg className="w-7 h-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#4285F4" d="M23.65 12.37c.18-.38.28-.8.28-1.24 0-.48-.11-.92-.31-1.32-.01 0-.01-.01-.01-.01L14.73 18.7l.02.01 8.9-6.34z" />
                        <path fill="#34A853" d="M1.37 1.08L12.92 12.63 14.73 10.82 2.62.48C2.1.15 1.57.06 1.08.17l.29.91z" />
                        <path fill="#FBBC04" d="M1.08 23.83c.49.11 1.02.02 1.54-.31L14.73 13.18 12.92 11.37 1.37 22.92l-.29.91z" />
                        <path fill="#EA4335" d="M14.73 13.18L23.63 19.1c.17-.09.32-.2.46-.33L14.73 10.82l-1.81 1.18 1.81 1.18z" />
                   </svg>
                   <div className="text-left">
                      <div className="text-[10px] leading-none mb-1">GET IT ON</div>
                      <div className="text-xl font-bold leading-none">Google Play</div>
                   </div>
                </button>
             </div>

             <div className="mt-12 p-6 bg-white rounded-2xl border border-gray-200 inline-flex items-center gap-6 shadow-lg">
                 <div className="w-24 h-24 bg-[#111] p-2 rounded-lg relative overflow-hidden">
                     {/* QR Code Placeholder with style */}
                     <div className="w-full h-full border-4 border-white border-dashed rounded opacity-50"></div>
                     <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">QR CODE</div>
                 </div>
                 <div className="text-left">
                    <div className="font-bold text-[#111]">Scan to join waitlist</div>
                    <div className="text-sm text-gray-500">Be notified instantly.</div>
                 </div>
             </div>
          </div>

          <div className="relative h-[600px] flex justify-center items-center">
             <div className="absolute top-10 left-10 lg:left-20 rotate-[-6deg] z-0 opacity-50 blur-[2px] scale-95">
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
