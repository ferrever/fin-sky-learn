import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate

const fintechArticles = [
  {
    title: "Literasi Fintech di Era Digital: Kunci Cerdas Mengelola Keuangan Modern",
    description: "Pelajari bagaimana fintech mengubah cara kita mengelola keuangan dan mengapa literasi digital sangat penting.",
  },
  {
    title: "5 Tips Aman Bertransaksi Digital agar Terhindar dari Risiko Fintech",
    description: "Panduan praktis menjaga keamanan akun, data pribadi, dan dana Anda saat bertransaksi online.",
  },
  {
    title: "Mengenal Investasi Digital untuk Pemula",
    description: "Langkah awal memulai investasi aman di era digital, mulai dari reksa dana hingga emas digital.",
  },
  {
    title: "Mengenal Jenis-Jenis Fintech, Manfaat, dan Contoh Perusahaannya",
    description: "Panduan lengkap mengenai klasifikasi fintech mulai dari pembayaran digital, P2P lending, hingga bank digital.",
  },
  {
    title: "Keamanan dan Privasi Data: Pentingnya Melindungi Informasi Pribadi",
    description: "Pahami perbedaan keamanan dan privasi data serta langkah konkret melindungi identitas digital Anda dari ancaman siber.",
  },
  {
    title: "Regulasi dan Perlindungan Fintech: Peran OJK dan BI",
    description: "Kenali lembaga pengawas fintech di Indonesia dan bagaimana regulasi melindungi Anda dari praktik fintech ilegal.",
  },
];

const ArticleSection = () => {
  const navigate = useNavigate(); // 2. Inisialisasi navigate

  return (
    <section id="artikel-fintech" className="py-16 md:py-24 bg-background relative z-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-deep/10 text-sky-deep mb-4">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Artikel</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Artikel Fintech Pilihan
          </h2>
          <p className="text-muted-foreground text-lg">
            Kumpulan artikel fintech terkurasi untuk meningkatkan literasi keuangan digital Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fintechArticles.map((article, index) => (
            <article
              key={index}
              className="group bg-card rounded-2xl border border-border/50 p-6 hover:shadow-card-hover hover:border-sky-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sky-deep/10 flex items-center justify-center group-hover:bg-sky-deep/20 transition-colors">
                  <BookOpen className="w-6 h-6 text-sky-deep" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-sky-deep transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {article.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group/btn"
                    // 3. Ubah window.open menjadi navigate ke rute internal
                    onClick={() => navigate(`/artikel/${index}`)}
                  >
                    Baca Artikel
                    <ExternalLink className="w-3 h-3 ml-2 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
