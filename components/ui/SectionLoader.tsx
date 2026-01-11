import React from 'react';
import { Loader2 } from 'lucide-react';

export const SectionLoader = () => (
  <div className="w-full min-h-[50vh] flex items-center justify-center py-24">
    <Loader2 className="animate-spin text-gray-300" size={32} />
  </div>
);
