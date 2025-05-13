
import React from 'react';
import { Plus } from 'lucide-react';

interface CommitmentCardProps {
  borderColor: string;
}

const CommitmentCard: React.FC<CommitmentCardProps> = ({ borderColor }) => {
  return (
    <div className="flex-1 flex flex-col">
      <div 
        className="h-full rounded-md bg-white shadow-elevation-1 flex flex-col items-center justify-center py-12 relative"
        style={{ borderLeft: `8px solid ${borderColor}` }}
      >
        <button className="rounded-full bg-white w-12 h-12 flex items-center justify-center shadow-sm hover:bg-gray-50">
          <Plus className="text-black" size={24} />
        </button>
      </div>
    </div>
  );
};

export default CommitmentCard;
