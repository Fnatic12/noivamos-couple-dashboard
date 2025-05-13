
import React, { ReactNode } from 'react';
import { Plus } from 'lucide-react';

interface ContentBlockProps {
  title: string;
  children: ReactNode;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="bg-noivamos-gold text-white px-4 py-3 flex justify-between items-center rounded-t-md">
        <h3 className="font-garamond font-bold text-2xl">{title}</h3>
        <button className="w-6 h-6 flex items-center justify-center text-white hover:bg-white/10 rounded">
          <Plus size={20} />
        </button>
      </div>
      <div className="bg-white shadow-elevation-1 rounded-b-md flex-1 p-4">
        {children}
      </div>
    </div>
  );
};

export default ContentBlock;
