
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">
      {/* Background with an architectural feel */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-slate-800/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm mb-4">PT MANGUNTAMA REKA PERSADA</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Mendesain <span className="text-gradient">Masa Depan</span> Infrastruktur Kesehatan.
          </h1>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">
            Konsultan perencana spesialis Masterplan Rumah Sakit, DED, dan Manajemen Konstruksi. Kami menghadirkan solusi arsitektur yang presisi, inovatif, dan fungsional untuk sektor pemerintah maupun swasta.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#portfolio" className="px-10 py-4 bg-white text-slate-950 hover:bg-blue-500 hover:text-white rounded-none font-bold text-lg transition-all transform hover:-translate-y-1 shadow-xl">
              LIHAT PENGALAMAN
            </a>
            <a href="https://wa.me/6282120300037" className="px-10 py-4 border border-slate-700 hover:border-blue-500 rounded-none font-bold text-lg transition-all flex items-center justify-center gap-3">
              HUBUNGI WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
