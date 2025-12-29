import React, { useState, useEffect } from 'react';
import { X, Lightbulb, Sparkles } from 'lucide-react';

// Jika file ada di folder src/assets:
// import mascotImage from '../assets/nama-file-kamu.png';

const tips = [
  "Mulai investasi sedini mungkin! Waktu adalah teman terbaikmu dalam menumbuhkan kekayaan.",
  "Sisihkan 20% penghasilan untuk tabungan darurat minimal 6 bulan pengeluaran.",
  "Diversifikasi portofoliomu untuk mengurangi risiko investasi.",
  "Pahami perbedaan antara kebutuhan dan keinginan sebelum berbelanja.",
  "Gunakan aplikasi fintech untuk memantau pengeluaran harianmu!",
];

const FinoMascot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setCurrentTip((prev) => (prev + 1) % tips.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tip bubble */}
      {isOpen && (
        <div className="animate-slide-in-right glass-card p-4 max-w-xs shadow-float relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted transition-colors"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-sunshine/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-4 h-4 text-sunshine" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">Tips dari Fino!</p>
              <p className="text-sm text-muted-foreground">{tips[currentTip]}</p>
            </div>
          </div>
        </div>
      )}

            {/* Mascot button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-20 h-20 md:w-24 md:h-24 bounce-soft transition-transform hover:scale-110"
      >
        {/* Menggunakan path langsung ke folder public */}
        <img 
          src="/favicon.png" 
          alt="Fino Mascot"
          className="w-full h-full object-contain drop-shadow-md"
        />

        {/* Indikator kilauan (opsional) */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-sunshine rounded-full flex items-center justify-center pulse-glow">
            <Sparkles className="w-3 h-3 text-accent-foreground" />
          </div>
        )}
      </button>
      {/* Name tag */}
      <div className="text-xs font-semibold text-muted-foreground bg-card/80 px-2 py-0.5 rounded-full shadow-sm">
        Fino
      </div>
    </div>
  );
};

export default FinoMascot;