import React from 'react';
import { Loader2 } from 'lucide-react';

export const SectionLoader = () => {
  return (
    <div className="w-full min-h-[50vh] flex items-center justify-center bg-[#F9F9F7]">
      <div className="flex flex-col items-center gap-4 opacity-50">
        <Loader2 className="animate-spin text-gray-400" size={32} />
      </div>
    </div>
  );
};
