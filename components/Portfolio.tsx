
import React, { useState, useMemo } from 'react';
import { DetailedProject } from '../types';

interface ProjectCard {
  id: number;
  title: string;
  category: 'Pemerintah' | 'Swasta';
  type: string;
  year: string;
  image: string;
}

const Portfolio: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState<'Semua' | 'Pemerintah' | 'Swasta'>('Semua');
  const [yearFilter, setYearFilter] = useState<string>('Semua Tahun');

  // Featured visual projects
  const featuredProjects: ProjectCard[] = [
    { id: 1, title: 'Masterplan RSUD Modern', category: 'Pemerintah', type: 'Hospital Masterplan', year: '2023', image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=800&auto=format&fit=crop' },
    { id: 2, title: 'Gedung Bedah Sentral Terpadu', category: 'Swasta', type: 'DED & Architecture', year: '2023', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop' },
    { id: 3, title: 'Kawasan Komersial Terintegrasi', category: 'Swasta', type: 'Commercial Design', year: '2022', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop' },
  ];

  // Detailed experience list
  const experienceList: DetailedProject[] = [
    { id: 1, name: 'DED Pembangunan RSU Efarina Etaham Karawang', owner: 'PT. Efarina Etaham', year: '2024', progress: '100% (Selesai)', category: 'Swasta' },
    { id: 2, name: 'Masterplan RSU Efarina Etaham Karawang', owner: 'PT. Efarina Etaham', year: '2024', progress: '100% (Selesai)', category: 'Swasta' },
    { id: 3, name: 'Manajemen Konstruksi Pembangunan Klinik Utama', owner: 'Yayasan Bakti Kesehatan', year: '2022', progress: '90% (Tahap Finishing)', category: 'Swasta' },
    { id: 4, name: 'Feasibility Study Analisis Bisnis Pelayanan Radioterapi RSBP Kota Batam', owner: 'RSBP Batam', year: '2025', progress: '100% (Selesai)', category: 'Pemerintah' },
    { id: 5, name: 'DED Kantor Perbankan Wilayah', owner: 'PT. Bank Central Utama', year: '2022', progress: '100% (Selesai)', category: 'Swasta' },
    { id: 6, name: 'Masterplan Penataan Kawasan Wisata', owner: 'Pemerintah Kabupaten Bandung Barat', year: '2023', progress: '100% (Selesai)', category: 'Pemerintah' },
    { id: 7, name: 'Perencanaan Gedung Rawat Inap 5 Lantai', owner: 'RS Swasta Medika', year: '2024', progress: '40% (Tahap DED)', category: 'Swasta' },
    { id: 8, name: 'Review Masterplan RS Jantung Nasional', owner: 'Kementerian Kesehatan RI', year: '2023', progress: '100% (Selesai)', category: 'Pemerintah' },
  ];

  // Dynamically get unique years from both lists for the filter
  const uniqueYears = useMemo(() => {
    const allYears = [
      ...featuredProjects.map(p => p.year),
      ...experienceList.map(p => p.year)
    ];
    const unique = Array.from(new Set(allYears)).sort((a, b) => b.localeCompare(a));
    return ['Semua Tahun', ...unique];
  }, []);

  // Combined filtering logic
  const filteredFeatured = featuredProjects.filter(p => {
    const matchCat = categoryFilter === 'Semua' || p.category === categoryFilter;
    const matchYear = yearFilter === 'Semua Tahun' || p.year === yearFilter;
    return matchCat && matchYear;
  });

  const filteredExperience = experienceList.filter(p => {
    const matchCat = categoryFilter === 'Semua' || p.category === categoryFilter;
    const matchYear = yearFilter === 'Semua Tahun' || p.year === yearFilter;
    return matchCat && matchYear;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header & Combined Filters */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
        <div>
          <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-2 block">Pengalaman Perusahaan</span>
          <h2 className="text-4xl font-bold">Karya & Rekam Jejak Proyek</h2>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          {/* Category Filter */}
          <div className="flex bg-slate-900/50 p-1 border border-slate-800">
            {['Semua', 'Pemerintah', 'Swasta'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat as any)}
                className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all ${categoryFilter === cat ? 'bg-blue-600 text-white' : 'hover:text-blue-400'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Year Filter Dropdown */}
          <div className="relative group">
            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              className="appearance-none bg-slate-900 border border-slate-800 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-slate-300 focus:outline-none focus:border-blue-600 cursor-pointer pr-10"
            >
              {uniqueYears.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Visual Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24 transition-all duration-500">
        {filteredFeatured.length > 0 ? (
          filteredFeatured.map((project) => (
            <div key={project.id} className="group cursor-pointer animate-fadeIn">
              <div className="relative overflow-hidden bg-slate-800 aspect-[3/4] mb-6 border border-slate-800">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                />
                <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-slate-700">
                  {project.category}
                </div>
              </div>
              <div className="space-y-2 px-1">
                <div className="flex justify-between items-center text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  <span>{project.type}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors leading-tight">
                  {project.title}
                </h3>
              </div>
            </div>
          ))
        ) : (
          categoryFilter === 'Semua' && yearFilter !== 'Semua Tahun' && (
             <div className="col-span-full py-10 text-center border border-dashed border-slate-800 text-slate-500 text-sm">
               Tidak ada proyek visual utama di tahun {yearFilter}.
             </div>
          )
        )}
      </div>

      {/* Detailed Table Section */}
      <div className="mt-20">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h3 className="text-2xl font-bold mb-2">Daftar Pengalaman Lengkap</h3>
            <p className="text-slate-500 text-sm">
              Menampilkan {filteredExperience.length} hasil untuk 
              <span className="text-blue-400 font-bold"> {categoryFilter} </span> 
              {yearFilter !== 'Semua Tahun' && <>pada tahun <span className="text-blue-400 font-bold">{yearFilter}</span></>}
            </p>
          </div>
        </div>
        
        <div className="overflow-x-auto border border-slate-800 shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-blue-500 uppercase text-[10px] font-bold tracking-[0.2em] border-b border-slate-800">
                <th className="py-5 px-6">Nama Pekerjaan</th>
                <th className="py-5 px-6">Owner / Pemberi Kerja</th>
                <th className="py-5 px-6 text-center">Tahun</th>
                <th className="py-5 px-6">Progress Pekerjaan</th>
                <th className="py-5 px-6 text-right">Sektor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {filteredExperience.length > 0 ? (
                filteredExperience.map((item) => (
                  <tr key={item.id} className="hover:bg-blue-600/5 transition-colors group">
                    <td className="py-6 px-6 font-bold text-slate-200 group-hover:text-blue-400 text-sm transition-colors max-w-xs md:max-w-md">
                      {item.name}
                    </td>
                    <td className="py-6 px-6 text-slate-400 text-sm">
                      {item.owner}
                    </td>
                    <td className="py-6 px-6 text-center text-slate-400 text-sm font-medium">
                      {item.year}
                    </td>
                    <td className="py-6 px-6">
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{item.progress}</span>
                        <div className="w-32 h-1 bg-slate-800 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-blue-600 transition-all duration-1000`} 
                            style={{ width: item.progress.includes('100%') ? '100%' : item.progress.includes('90%') ? '90%' : item.progress.includes('60%') ? '60%' : '40%' }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-6 text-right">
                      <span className={`text-[10px] font-bold uppercase px-2 py-1 tracking-widest border ${item.category === 'Pemerintah' ? 'border-purple-500/30 text-purple-400 bg-purple-500/5' : 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5'}`}>
                        {item.category}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-24 text-center text-slate-600 italic">
                    <div className="flex flex-col items-center gap-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Tidak ada data pengalaman untuk kriteria filter ini.</span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="mt-24 p-12 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-3">Butuh Detail Portofolio PDF?</h3>
            <p className="opacity-90 max-w-lg leading-relaxed">
              Kami siap mengirimkan dokumen Company Profile lengkap beserta lampiran pengalaman tenaga ahli dan legalitas perusahaan Anda.
            </p>
          </div>
          <a href="mailto:info@manguntamareka.com" className="px-10 py-5 bg-slate-950 text-white font-bold hover:bg-white hover:text-slate-950 transition-all uppercase tracking-widest text-sm shadow-2xl">
            HUBUNGI KAMI SEKARANG
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
