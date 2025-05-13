
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Plus } from 'lucide-react';
import CreateCommitmentModal from '../components/CreateCommitmentModal';
import CommitmentCard from '../components/CommitmentCard';

const Dashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 w-full">
        {/* Couple Section */}
        <div className="px-12 border-b border-gray-200">
          <div className="flex items-center gap-6 py-6">
            <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
            <h1 className="font-garamond text-4xl">Victor & Carol</h1>
          </div>
        </div>
        
        {/* Commitments Section */}
        <div className="px-12 py-6 border-b border-gray-200">
          <h2 className="font-garamond text-2xl mb-4">Compromissos do casal</h2>
          <div className="grid grid-cols-4 gap-6">
            {[
              { color: 'var(--noivamos-border-gold)' },
              { color: 'var(--noivamos-border-red)' },
              { color: 'var(--noivamos-border-blue)' },
              { color: 'var(--noivamos-border-purple)' },
            ].map((item, index) => (
              <CommitmentCard 
                key={index} 
                borderColor={item.color} 
                onClick={openModal}
              />
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="px-12 py-6 grid grid-cols-12 gap-6">
          {/* Visão Geral */}
          <div className="col-span-5">
            <div className="bg-noivamos-gold text-white px-4 py-3 flex justify-between items-center rounded-t-lg">
              <h3 className="font-garamond font-normal text-2xl">Visão Geral</h3>
              <button className="w-6 h-6 flex items-center justify-center text-white">
                <Plus size={20} />
              </button>
            </div>
            <div className="bg-gray-100 h-96 rounded-b-lg"></div>
          </div>
          
          {/* Right Content Section */}
          <div className="col-span-7 flex flex-col gap-6">
            {/* Calendário */}
            <div>
              <div className="bg-noivamos-gold text-white px-4 py-3 flex justify-between items-center rounded-t-lg">
                <h3 className="font-garamond font-normal text-2xl">Calendário</h3>
                <button className="w-6 h-6 flex items-center justify-center text-white">
                  <Plus size={20} />
                </button>
              </div>
              <div className="bg-gray-100 p-4 rounded-b-lg">
                <div className="mb-2 font-garamond">2025</div>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    "Jan", "Fev", "Mar", "Apr",
                    "May", "Jun", "Jul", "Aug",
                    "Sep", "Oct", "Nov", "Dec"
                  ].map((month) => (
                    <div key={month} className="space-y-1">
                      <div className="font-garamond">{month}</div>
                      <div className="bg-gray-400 h-16 rounded-md"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Lembretes */}
            <div>
              <div className="bg-noivamos-gold text-white px-4 py-3 flex justify-between items-center rounded-t-lg">
                <h3 className="font-garamond font-normal text-2xl">Lembretes</h3>
                <button className="w-6 h-6 flex items-center justify-center text-white">
                  <Plus size={20} />
                </button>
              </div>
              <div className="bg-gray-100 h-44 rounded-b-lg"></div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* Commitment Modal */}
      <CreateCommitmentModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
      />
    </div>
  );
};

export default Dashboard;
