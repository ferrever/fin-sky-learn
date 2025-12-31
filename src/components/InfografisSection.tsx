import React from 'react';
import { BarChart3, ExternalLink, FileText } from 'lucide-react';
import { Button } from './ui/button';

// Import logo IASC dari folder assets
import iascLogo from '../assets/IASC.png'; 

const infografisItems = [
  {
    title: "Technologi Finansial Untuk Pembayaran",
    description: "Pemahaman dasar mengenai teknologi finansial untuk pembayaran di Indonesia.",
    url: "https://www.canva.com/design/DAG846HTvcU/G6ePIVyeczMFbcUkwc5jdg/view?utm_content=DAG846HTvcU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2fd6d55c62"
  },
  {
    title: "Pengenalan Indonesia Anti-Scam Centre (IASC)",
    description: "IASC adalah pusat koordinasi nasional yang menangani laporan penipuan transaksi keuangan secara cepat dan terintegrasi.",
    url: "https://www.canva.com/design/DAG84whh_6Y/cdp-xDLmqDULwhEwbjcD7g/view?utm_content=DAG84whh_6Y&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hce401a2960",
    isIASC: true 
  },
  {
    title: "Studi Kasus Sistem Pembayaran Digital di Indonesia",
    description: "Studi kasus tentang gopay dan qris pada sistem pembayaran digital.",
    url: "https://www.canva.com/design/DAG8VY45ZIc/Ey8gYvTJ_lprAn1CHGM0Og/view?utm_content=DAG8VY45ZIc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6f3695000b"
  },
  {
    title: "Jenis Jenis Fintech",
    description: "Menelusuri beberapa jenis fintech di Indonesia.",
    url: "https://www.canva.com/design/DAG9Bk3dOj4/kruYeRYRlNkGyhf-ChEIaA/view?utm_content=DAG9Bk3dOj4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h17b4ab70b0
  },
  {
    title: "Keamanan dan Privasi Digital Fintech",
    description: "Technologi pasti sangat berurusan dengan tidak kriminal pencurian data pribadi, berikut regulasi keamanan fintech.",
    url: "https://www.canva.com/design/DAG9B5NV3kU/WtC7Cc2JThHWD9YszmyluQ/view?utm_content=DAG9B5NV3kU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb256183253
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {infografisItems.map((item, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl border border-border/50 p-6 hover:shadow-card-hover hover:border-sky-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sky-primary/10 flex items-center justify-center group-hover:bg-sky-primary/20 transition-colors">
                  {item.isIASC ? (
                    <img 
                      src={iascLogo} 
                      alt="IASC Logo" 
                      className="w-8 h-8 object-contain" 
                    />
                  ) : (
                    <FileText className="w-6 h-6 text-sky-primary" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-sky-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 pl-16">
                <Button
                  variant="outline"
                  size="sm"
                  className="group/btn w-full sm:w-auto"
                  onClick={() => window.open(item.url, '_blank')}
                >
                  Lihat Slide
                  <ExternalLink className="w-3 h-3 ml-2 group-hover/btn:translate-x-0.5 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfografisSection;
