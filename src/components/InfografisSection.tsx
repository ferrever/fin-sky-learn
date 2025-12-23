import React from 'react';
import { BarChart3, ExternalLink, FileText } from 'lucide-react';
import { Button } from './ui/button';

// =====================================================
// EDIT DATA INFOGRAFIS/SLIDE DI SINI
// Ganti title, description, dan url sesuai kebutuhan
// URL bisa berupa link Google Slides, PPT, atau PDF
// =====================================================
const infografisItems = [
  {
    title: "Dasar-dasar Fintech",
    description: "Slide pengantar konsep fintech dan contoh penerapan dalam kehidupan sehari-hari.",
    url: "https://link-ke-ppt-atau-google-slides-1.com"
  },
  {
    title: "Manajemen Keuangan Digital",
    description: "Infografis pengelolaan keuangan di era digital, termasuk budgeting dan saving.",
    url: "https://link-ke-ppt-atau-google-slides-2.com"
  },
  {
    title: "Ekosistem Pembayaran Digital",
    description: "Visualisasi alur transaksi digital dari e-wallet hingga payment gateway.",
    url: "https://link-ke-ppt-atau-google-slides-3.com"
  },
  {
    title: "Investasi untuk Generasi Milenial",
    description: "Panduan visual memulai investasi dengan modal kecil melalui platform digital.",
    url: "https://link-ke-ppt-atau-google-slides-4.com"
  },
  {
    title: "Keamanan Cyber di Fintech",
    description: "Tips dan trik menjaga keamanan data pribadi saat menggunakan layanan fintech.",
    url: "https://link-ke-ppt-atau-google-slides-5.com"
  },
  {
    title: "Regulasi Fintech di Indonesia",
    description: "Ringkasan peraturan OJK dan BI terkait industri fintech nasional.",
    url: "https://link-ke-ppt-atau-google-slides-6.com"
  },
];

const InfografisSection = () => {
  return (
    <section id="infografis" className="py-16 md:py-24 bg-background relative z-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-primary/10 text-sky-primary mb-4">
            <BarChart3 className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Infografis</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Infografis & Slide Materi
          </h2>
          <p className="text-muted-foreground text-lg">
            Kumpulan slide presentasi dan infografis untuk mempermudah pembelajaran fintech
          </p>
        </div>

        {/* Infografis Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infografisItems.map((item, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl border border-border/50 p-6 hover:shadow-card-hover hover:border-sky-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sky-primary/10 flex items-center justify-center group-hover:bg-sky-primary/20 transition-colors">
                  <FileText className="w-6 h-6 text-sky-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-sky-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {item.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group/btn"
                    onClick={() => window.open(item.url, '_blank')}
                  >
                    Lihat Slide
                    <ExternalLink className="w-3 h-3 ml-2 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfografisSection;
