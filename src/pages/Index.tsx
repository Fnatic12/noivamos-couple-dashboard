
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Plus } from 'lucide-react';

const Dashboard: React.FC = () => {
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
              { color: 'noivamos-border-gold' },
              { color: 'noivamos-border-red' },
              { color: 'noivamos-border-blue' },
              { color: 'noivamos-border-purple' },
            ].map((item, index) => (
              <div key={index} className="h-36 bg-gray-100 relative" style={{ borderLeft: `8px solid var(--${item.color})` }}>
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center">
                  <Plus className="w-6 h-6" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="px-12 py-6 grid grid-cols-12 gap-6">
          {/* Visão Geral */}
          <div className="col-span-5">
            <div className="bg-noivamos-gold text-white px-4 py-3 flex justify-between items-center">
              <h3 className="font-garamond font-normal text-2xl">Visão Geral</h3>
              <button className="w-6 h-6 flex items-center justify-center text-white">
                <Plus size={20} />
              </button>
            </div>
            <div className="bg-gray-100 h-96"></div>
          </div>
          
          {/* Right Content Section */}
          <div className="col-span-7 flex flex-col gap-6">
            {/* Calendário */}
            <div>
              <div className="bg-noivamos-gold text-white px-4 py-3 flex justify-between items-center">
                <h3 className="font-garamond font-normal text-2xl">Calendário</h3>
                <button className="w-6 h-6 flex items-center justify-center text-white">
                  <Plus size={20} />
                </button>
              </div>
              <div className="bg-gray-100 p-4">
                <div className="mb-2 font-garamond">2025</div>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    "Jan", "Fev", "Mar", "Apr",
                    "May", "Jun", "Jul", "Aug",
                    "Sep", "Oct", "Nov", "Dec"
                  ].map((month) => (
                    <div key={month} className="space-y-1">
                      <div className="font-garamond">{month}</div>
                      <div className="bg-gray-400 h-16"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Lembretes */}
            <div>
              <div className="bg-noivamos-gold text-white px-4 py-3 flex justify-between items-center">
                <h3 className="font-garamond font-normal text-2xl">Lembretes</h3>
                <button className="w-6 h-6 flex items-center justify-center text-white">
                  <Plus size={20} />
                </button>
              </div>
              <div className="bg-gray-100 h-44"></div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
