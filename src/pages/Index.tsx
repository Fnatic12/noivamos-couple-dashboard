
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CommitmentCard from '../components/CommitmentCard';
import ContentBlock from '../components/ContentBlock';
import CalendarGrid from '../components/CalendarGrid';
import CreateCommitmentModal from '../components/CreateCommitmentModal';
import { Plus } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 w-full">
        <div className="w-full px-24">
          {/* Top Section - Welcome */}
          <section className="mt-16 mb-16">
            <h1 className="font-garamond font-bold text-5xl text-noivamos-gold">Olá Cynthia!</h1>
          </section>
          
          {/* Main Content Grid - Two Columns */}
          <div className="grid grid-cols-12 gap-8 mb-16">
            {/* Tasks Column */}
            <div className="col-span-6">
              <div className="bg-white border border-gray-200 rounded-md">
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
                  <h2 className="font-garamond font-bold text-2xl">Tarefas</h2>
                  <button className="text-noivamos-gold flex items-center text-sm font-avenir">
                    criar nova tarefa <Plus size={16} className="ml-1" />
                  </button>
                </div>
                <div className="p-6 min-h-[300px] flex items-center justify-center">
                  <p className="text-gray-500 font-avenir">Nenhuma tarefa criada</p>
                </div>
              </div>
            </div>
            
            {/* Dashboards Column */}
            <div className="col-span-6">
              <div className="bg-white border border-gray-200 rounded-md">
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
                  <h2 className="font-garamond font-bold text-2xl">Dashboards</h2>
                  <button className="text-noivamos-gold flex items-center text-sm font-avenir">
                    criar novo dashboard <Plus size={16} className="ml-1" />
                  </button>
                </div>
                <div className="p-6 min-h-[300px] flex items-center justify-center">
                  <p className="text-gray-500 font-avenir">Nenhum dashboard criado</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Received Value Section */}
          <section className="mb-16 flex justify-end">
            <div className="border border-gray-200 rounded-md w-[300px]">
              <div className="p-6">
                <h3 className="text-base font-avenir font-medium mb-2">Valor de Rev Recebido</h3>
                <p className="font-garamond font-bold text-3xl mb-4">R$ 200,00</p>
                <button className="w-full bg-noivamos-gold text-white py-2 rounded-md font-avenir">
                  Sacar
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />

      {/* Create Commitment Modal */}
      <CreateCommitmentModal 
        open={isCreateModalOpen}
        onOpenChange={setIsCreateModalOpen}
      />
    </div>
  );
};

export default Dashboard;
