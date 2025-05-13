
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-noivamos-gold mt-12">
      <div className="layout-grid-xl py-4 flex justify-between items-center text-white">
        <div className="font-garamond font-bold text-xl">
          Noivamos
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-avenir">Nos acompanhe nas redes sociais</span>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
