
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="px-12 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-noivamos-gold font-garamond font-bold text-2xl tracking-wider">
            NÕIVAMOS
          </Link>
        </div>
        
        <nav>
          <ul className="flex space-x-6 items-center font-avenir text-base">
            <li>
              <Link to="/criar-meu-site" className="hover:text-noivamos-gold transition-colors">
                Criar meu site
              </Link>
            </li>
            <li>
              <Link to="/meu-casamento" className="hover:text-noivamos-gold transition-colors">
                Meu casamento
              </Link>
            </li>
            <li>
              <Link to="/planos-e-recursos" className="hover:text-noivamos-gold transition-colors">
                Planos e Recursos
              </Link>
            </li>
            <li>
              <Link to="/quem-somos" className="hover:text-noivamos-gold transition-colors">
                Quem somos
              </Link>
            </li>
            <li>
              <Link to="/assessoria" className="text-noivamos-gold hover:underline transition-colors">
                Assessoria
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:underline transition-colors">
                Cynthia
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
