
import React from 'react';
import { ServiceItem } from '../types';

const ServiceCard: React.FC<{ service: ServiceItem }> = ({ service }) => (
  <div className="bg-slate-900/30 p-10 border border-slate-800 hover:border-blue-500/50 transition-all group relative overflow-hidden">
    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
      {service.icon}
    </div>
    <div className="w-12 h-12 text-blue-500 mb-8">
      {service.icon}
    </div>
    <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-blue-400 transition-colors">{service.title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm">
      {service.description}
    </p>
  </div>
);

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: '1',
      title: 'Masterplan & Feasibility Study',
      description: 'Perencanaan makro dan studi kelayakan yang mendalam, terutama untuk pengembangan kawasan Rumah Sakit dan fasilitas publik.',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      )
    },
    {
      id: '2',
      title: 'Detail Engineering Design (DED)',
      description: 'Penyusunan dokumen teknis lengkap mulai dari gambar arsitektur, struktur, hingga ME yang presisi untuk tahap konstruksi.',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
      )
    },
    {
      id: '3',
      title: 'Hospital Architecture Specialty',
      description: 'Desain khusus fasilitas kesehatan yang memenuhi standar regulasi, alur pelayanan medis, dan kenyamanan pasien.',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12.75l6 6 9-13.5" /></svg>
      )
    },
    {
      id: '4',
      title: 'Management Konstruksi',
      description: 'Layanan pengawasan dan manajemen proyek untuk memastikan pelaksanaan pembangunan sesuai dengan mutu, biaya, dan waktu.',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
      )
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-2 block">Layanan Kami</span>
        <h2 className="text-4xl font-bold mb-4">Lingkup Pekerjaan Perencanaan</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
