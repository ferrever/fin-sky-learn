import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Calendar, Clock, User } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll ke atas otomatis saat buka artikel
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articles = [
    {
      title: "Literasi Fintech di Era Digital: Kunci Cerdas Mengelola Keuangan Modern",
      content: (
        <div className="space-y-4">
          <p>Perkembangan teknologi digital telah mengubah hampir seluruh aspek kehidupan...</p>
          <h2 className="text-2xl font-bold mt-6">Apa Itu Fintech?</h2>
          <p>Fintech (Financial Technology) adalah inovasi layanan keuangan...</p>
          {/* Tambahkan isi lengkap artikel 1 Anda di sini */}
        </div>
      )
    },
    {
      title: "5 Tips Aman Bertransaksi Digital agar Terhindar dari Risiko Fintech",
      content: (
        <div className="space-y-4">
          <p>Perkembangan fintech memang memberikan kemudahan luar biasa, namun waspadai risikonya...</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Gunakan Aplikasi Resmi (OJK)</li>
            <li>Aktifkan 2FA</li>
            {/* Tambahkan isi lengkap artikel 2 Anda di sini */}
          </ol>
        </div>
      )
    },
    {
      title: "Mengenal Investasi Digital untuk Pemula",
      content: (
        <div className="space-y-4">
          <p>Di era digital, investasi tidak lagi identik dengan modal besar...</p>
          {/* Tambahkan isi lengkap artikel 3 Anda di sini */}
        </div>
      )
    }
  ];

  const article = articles[Number(id)];

  if (!article) return <div>Artikel tidak ditemukan</div>;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-4xl">
        <button 
          onClick={() => navigate('/')} 
          className="flex items-center gap-2 text-sky-deep mb-8 hover:underline"
        >
          <ChevronLeft className="w-4 h-4" /> Kembali
        </button>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>
        
        <div className="flex gap-4 text-muted-foreground mb-8 border-b pb-6 text-sm">
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 29 Des 2025</span>
          <span className="flex items-center gap-1"><User className="w-4 h-4" /> Admin FinSky</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 Menit</span>
        </div>

        <div className="prose prose-slate max-w-none dark:prose-invert">
          {article.content}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticlePage;