
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CommitmentCard from '../components/CommitmentCard';
import ContentBlock from '../components/ContentBlock';
import CalendarGrid from '../components/CalendarGrid';
import CreateCommitmentModal from '../components/CreateCommitmentModal';

const Dashboard: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 layout-grid-xl py-8">
        {/* Couple Information */}
        <section className="flex items-center mb-8 border-b pb-8">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0"></div>
          <h1 className="font-garamond font-bold text-4xl ml-6">Victor & Carol</h1>
        </section>
        
        {/* Commitments Section */}
        <section className="mb-8">
          <h2 className="font-garamond font-bold text-2xl mb-4">Compromissos do casal</h2>
          
          <div className="flex gap-6">
            <CommitmentCard borderColor="#C8A415" />
            <CommitmentCard borderColor="#9E2B25" />
            <CommitmentCard borderColor="#2B5797" />
            <CommitmentCard borderColor="#5C2D91" />
          </div>
        </section>
        
        {/* Content Grid */}
        <section className="grid grid-cols-12 gap-6">
          {/* Overview Block */}
          <div className="col-span-4">
            <ContentBlock title="Visão Geral">
              <div className="h-96"></div>
            </ContentBlock>
          </div>
          
          {/* Calendar Block */}
          <div className="col-span-5">
            <ContentBlock title="Calendário">
              <CalendarGrid />
            </ContentBlock>
          </div>
          
          {/* Reminders Block */}
          <div className="col-span-3">
            <ContentBlock title="Lembretes">
              <div className="h-96"></div>
            </ContentBlock>
          </div>
        </section>
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
