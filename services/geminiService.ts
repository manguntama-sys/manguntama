
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGeminiResponse = async (prompt: string, history: { role: string; parts: string }[]) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.parts }] })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: `Anda adalah asisten virtual resmi untuk PT Manguntama Reka Persada. 
        Profil Perusahaan:
        - Nama: PT Manguntama Reka Persada.
        - Bidang: Konsultan Perencanaan Arsitektur & Manajemen Konstruksi.
        - Spesialisasi: Masterplan Rumah Sakit, Detail Engineering Design (DED), Feasibility Study (FS), Desain Komersial.
        - Alamat: Komplek Graha Bukit Raya 3 B3/10 Cimale Ngamprah Kab. Bandung Barat 40552.
        - Kontak: info@manguntamareka.com, WA: 082120300037.
        - Keunggulan: Pengalaman luas di proyek Pemerintah dan Swasta.
        
        Tugas Anda:
        - Menjawab pertanyaan calon klien tentang layanan perusahaan.
        - Menjelaskan pengalaman perusahaan dalam desain Rumah Sakit.
        - Memberikan informasi kontak jika diminta.
        - Selalu bersikap profesional, sopan, dan teknis (seperti arsitek senior).
        - Gunakan Bahasa Indonesia yang formal namun ramah.`,
        temperature: 0.7,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Maaf, asisten kami sedang tidak tersedia. Silakan hubungi kami langsung melalui WhatsApp di 082120300037.";
  }
};
