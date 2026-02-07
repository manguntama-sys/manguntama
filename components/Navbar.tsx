
import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-gradient tracking-tight">MANGUNTAMA</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 lg:space-x-8">
              <a href="#home" className="text-sm font-medium hover:text-blue-400 transition-colors uppercase tracking-wider">Home</a>
              <a href="#services" className="text-sm font-medium hover:text-blue-400 transition-colors uppercase tracking-wider">Layanan</a>
              <a href="#portfolio" className="text-sm font-medium hover:text-blue-400 transition-colors uppercase tracking-wider">Pengalaman</a>
              <a href="#contact" className="text-sm font-medium hover:text-blue-400 transition-colors uppercase tracking-wider">Kontak</a>
              <a href="#ai-assistant" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20">
                KONSULTASI
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-slate-700/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-slate-800 text-sm uppercase tracking-wider">Home</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-slate-800 text-sm uppercase tracking-wider">Layanan</a>
            <a href="#portfolio" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-slate-800 text-sm uppercase tracking-wider">Pengalaman</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-slate-800 text-sm uppercase tracking-wider">Kontak</a>
            <a href="#ai-assistant" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md bg-blue-600 text-white font-medium text-center">Konsultasi AI</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
