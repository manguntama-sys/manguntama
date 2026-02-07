
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Constructing a mailto link as a simple fallback for static sites
    const mailtoLink = `mailto:info@manguntamareka.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nama: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    
    setTimeout(() => {
      window.location.href = mailtoLink;
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-2 block">Hubungi Kami</span>
        <h2 className="text-4xl font-bold">Konsultasi Proyek</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-slate-900/30 p-8 md:p-12 border border-slate-800 shadow-xl">
          <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Nama Lengkap</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 p-4 outline-none transition-all text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 p-4 outline-none transition-all text-sm"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Subjek</label>
              <input
                required
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 p-4 outline-none transition-all text-sm"
                placeholder="Rencana Masterplan RS"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Pesan</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 p-4 outline-none transition-all text-sm resize-none"
                placeholder="Tuliskan detail rencana atau pertanyaan Anda di sini..."
              ></textarea>
            </div>
            <button
              disabled={status !== 'idle'}
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-2"
            >
              {status === 'sending' ? (
                <>Mempersiapkan...</>
              ) : status === 'success' ? (
                <>Pesan Terkirim!</>
              ) : (
                <>Kirim Pesan</>
              )}
            </button>
          </form>
        </div>

        {/* Map and Info */}
        <div className="flex flex-col gap-8">
          <div className="bg-slate-900/30 p-8 border border-slate-800 shadow-xl flex-grow h-[300px] lg:h-auto">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Lokasi Kantor
            </h3>
            <div className="w-full h-[calc(100%-4rem)] bg-slate-800 relative overflow-hidden">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.354148154149!2d107.50242231018311!3d-6.848074993123847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e4526d573d47%3A0x6a0a80e1430c2c3e!2sCimale%2C%20Ngamprah%2C%20West%20Bandung%20Regency%2C%20West%20Java%2040552!5e0!3m2!1sen!2sid!4v1709123456789!5m2!1sen!2sid"
                className="absolute inset-0 w-full h-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/30 p-6 border border-slate-800 shadow-xl">
              <h4 className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">WhatsApp Direct</h4>
              <p className="font-bold text-slate-200">0821-2030-0037</p>
            </div>
            <div className="bg-slate-900/30 p-6 border border-slate-800 shadow-xl">
              <h4 className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">Email Official</h4>
              <p className="font-bold text-slate-200">info@manguntamareka.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
