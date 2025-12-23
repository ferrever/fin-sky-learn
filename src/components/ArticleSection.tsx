import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

// =====================================================
// EDIT DATA ARTIKEL DI SINI
// Ganti title, description, dan url sesuai kebutuhan
// =====================================================
const fintechArticles = [
  {
    title: "Apa Itu Fintech dan Bagaimana Cara Kerjanya?",
    description: "Pelajari dasar-dasar financial technology dan bagaimana fintech mengubah cara kita mengelola keuangan sehari-hari.",
    url: "https://link-artikel-1.com"
  },
  {
    title: "5 Tips Aman Bertransaksi Digital",
    description: "Panduan lengkap untuk menjaga keamanan transaksi online dan melindungi data keuangan Anda.",
    url: "https://link-artikel-2.com"
  },
  {
    title: "Mengenal Investasi Digital untuk Pemula",
    description: "Langkah awal memulai investasi di era digital, dari reksa dana online hingga saham.",
    url: "https://link-artikel-3.com"
  },
  {
    title: "Perkembangan E-Wallet di Indonesia",
    description: "Menelusuri sejarah dan pertumbuhan dompet digital yang mengubah lanskap pembayaran di Indonesia.",
    url: "https://link-artikel-4.com"
  },
  {
    title: "Regulasi Fintech: Apa yang Perlu Anda Ketahui",
    description: "Memahami aturan dan regulasi OJK terkait layanan keuangan digital di Indonesia.",
    url: "https://link-artikel-5.com"
  },
  {
    title: "Peer-to-Peer Lending: Peluang dan Risiko",
    description: "Analisis mendalam tentang platform pinjaman online dan cara memilih yang terpercaya.",
    url: "https://link-artikel-6.com"
  },
];

const ArticleSection = () => {
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

        {/* Article Cards Grid - 3 columns desktop, 1 column mobile */}
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
                    onClick={() => window.open(article.url, '_blank')}
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
