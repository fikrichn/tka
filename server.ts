import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Setup Gemini AI instance
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;

  if (apiKey) {
    try {
      ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });
    } catch (e) {
      console.warn('Gemini AI initialization notice:', e);
    }
  }

  // API 1: Tanya Maskot Miko (AI Tutor Ramah Anak)
  app.post('/api/ai/ask-mascot', async (req, res) => {
    try {
      const { questionTitle, questionContent, explanation, studentQuery, subject } = req.body;

      if (!ai) {
        return res.json({
          reply: `Halo Sobat Juara! 🐱 Miko si Kucing Pintar siap bantu! Untuk soal "${questionTitle || 'ini'}", rahasianya adalah pahami kata kuncinya dulu ya. Misalnya di ${subject || 'soal ini'}, ${explanation ? 'seperti yang dijelaskan: ' + explanation.slice(0, 150) + '...' : 'coba cek langkah demi langkahnya secara teliti!'}. Tetap semangat, kamu pasti bisa! Meow~ 🐾✨`,
          isFallback: true,
        });
      }

      const prompt = `Soal: ${questionTitle}\nIsi Soal: ${questionContent}\nPembahasan Resmi: ${explanation}\nPertanyaan Siswa: ${studentQuery || 'Tolong jelaskan konsep ini dengan analogi sederhana dan trik cepat agar mudah dipahami anak SD!'}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction:
            'Kamu adalah "Miko si Kucing Juara", tutor AI virtual yang sangat ramah, lucu, sabar, dan penyemangat untuk siswa SD (kelas 4-6) di Indonesia. Siswa sedang belajar latihan soal TKA SD (Tes Kemampuan Akademik). ' +
            'Gunakan bahasa Indonesia santun, ceria, mudah dipahami anak-anak, gunakan perumpamaan sehari-hari (seperti potong kue pizza, kucing main bola, jajan di kantin), beri trik cepat mengingat, dan selipkan lelucon lucu khas anak yang bikin tersenyum. Jangan bertele-tele, maksimal 3-4 paragraf singkat yang hangat dan terstruktur.',
        },
      });

      const reply = response.text || 'Wah, kamu hebat sudah bertanya! Ingat kuncinya: baca pelan-pelan dan hitung teliti ya!';
      return res.json({ reply, isFallback: false });
    } catch (error: any) {
      console.error('Error in ask-mascot:', error);
      return res.json({
        reply: 'Meow! 🐱 Sinyal Mimi sempat tersandung ikan teri, tapi jangan khawatir! Intinya untuk soal ini: perhatikan konsep dasar dan kata kunci di soal ya, Sobat Juara! Pasti bisa!',
        isFallback: true,
      });
    }
  });

  // API 2: Buat Soal Latihan Baru / Tantangan Bonus TKA SD
  app.post('/api/ai/generate-bonus', async (req, res) => {
    try {
      const { topic, subject } = req.body;

      if (!ai) {
        return res.status(503).json({ error: 'AI belum aktif. Gunakan bank soal resmi kami yang sudah lengkap!' });
      }

      const prompt = `Buatlah 1 soal pilihan ganda TKA SD level HOTS berkualitas tinggi untuk mata pelajaran ${subject || 'Matematika SD'} topik: ${topic || 'Pecahan'}. ` +
        `Format harus JSON persis dengan struktur:
        {
          "title": "Judul soal singkat",
          "subject": "${subject || 'Matematika'}",
          "topic": "${topic || 'Pecahan'}",
          "subTopic": "Subtopik",
          "passage": "Teks bacaan atau cerita pengantar jika ada, atau kosong jika tidak perlu",
          "question": "Kalimat pertanyaan yang jelas kontekstual",
          "options": ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
          "correctAnswer": 0, // indeks jawaban benar (0=A, 1=B, 2=C, 3=D)
          "explanation": "Langkah pembahasan step-by-step ramah anak",
          "quickTip": "Trik cepat / tips cerdas agar mudah ingat",
          "difficulty": "Sedang" // Mudah/Sedang/HOTS
        }`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          systemInstruction: 'Kamu adalah pembuat soal profesional Asesmen / TKA SD Kementerian Pendidikan Indonesia. Pastikan soal sesuai kaidah kisi-kisi SD, tidak ambigu, kunci jawaban valid, dan penjelasan ramah anak.',
        },
      });

      const text = response.text || '{}';
      const question = JSON.parse(text);
      return res.json({ question });
    } catch (error: any) {
      console.error('Error generating question:', error);
      return res.status(500).json({ error: 'Gagal membuat soal AI. Silakan coba lagi.' });
    }
  });

  // API 3: Saran Belajar & Meme Khusus Hasil Rapor
  app.post('/api/ai/coaching', async (req, res) => {
    try {
      const { score, correctCount, totalCount, weakTopics, strongTopics, studentName } = req.body;

      if (!ai) {
        return res.json({
          motto: 'Belajar terus, pantang mundur! Bintang juara menunggumu!',
          advice: `Hebat ${studentName || 'Sobat Juara'}! Dari ${totalCount} soal, kamu berhasil menjawab ${correctCount} dengan benar (Skor: ${score}). Terus asah topik ${weakTopics?.join(', ') || 'yang masih keliru'}, kamu pasti makin pintar!`,
        });
      }

      const prompt = `Nama Siswa: ${studentName || 'Sobat'}\nSkor: ${score}/100\nBenar: ${correctCount}/${totalCount}\nTopik Kuat: ${strongTopics?.join(', ') || 'Umum'}\nTopik Perlu Dilatih: ${weakTopics?.join(', ') || 'Belum ada'}\nBerikan evaluasi motivasi lucu, ceria, pujian tulus, dan 3 saran langkah konkret belajar ramah anak.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction: 'Kamu adalah Miko Maskot Kucing Juara TKA SD. Buat pesan evaluasi ramah anak yang membakar semangat dengan nada humor anak-anak Indonesia yang ceria!',
        },
      });

      return res.json({
        advice: response.text || 'Tetap semangat belajar, kamu adalah calon juara!',
        motto: score >= 80 ? 'Level: Kucing Jenius Mode Turbo! 🚀' : 'Level: Calon Master TKA yang Sedang Berkembang Pesat! 🌱',
      });
    } catch (error) {
      return res.json({
        motto: 'Semangat Juara!',
        advice: 'Latihan terus setiap hari sedikit demi sedikit akan membuatmu jadi master TKA SD!',
      });
    }
  });

  // Mount Vite in dev mode, or static files in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Juara TKA SD Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
