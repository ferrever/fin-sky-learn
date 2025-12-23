import React from 'react';
import { BookOpen, Video, BarChart3, HelpCircle } from 'lucide-react';
import ContentCard from './ContentCard';
import ProgressBar from './ProgressBar';

const ContentSection = () => {
  const contentCards = [
    {
      title: 'Artikel Fintech',
      description:
        'Baca artikel terbaru seputar fintech, investasi, dan tips mengelola keuangan digital dengan mudah.',
      icon: BookOpen,
      iconBg: 'bg-sky-deep',
      count: '85+ Artikel',
      href: '#artikel-fintech',
    },
    {
      title: 'Video Edukasi',
      description:
        'Tonton video pembelajaran interaktif dari para ahli fintech dan keuangan Indonesia.',
      icon: Video,
      iconBg: 'bg-sunset',
      count: '50+ Video',
      href: '#video-edukasi',
    },
    {
      title: 'Infografis',
      description:
        'Pelajari konsep keuangan kompleks melalui infografis yang menarik dan mudah dipahami.',
      icon: BarChart3,
      iconBg: 'bg-sky-primary',
      count: '40+ Grafis',
      href: '#infografis',
    },
    {
      title: 'Kuis Interaktif',
      description:
        'Uji pemahamanmu dengan kuis seru dan dapatkan sertifikat serta lencana pencapaian!',
      icon: HelpCircle,
      iconBg: 'bg-sunshine',
      count: '25+ Kuis',
      href: '#kuis-interaktif',
    },
  ];

  return (
    <section
      id="materi-belajar"
      className="py-16 md:py-24 bg-card relative z-10"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-sky-deep uppercase tracking-wider">
            Materi Pembelajaran
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Pilih Cara Belajarmu
          </h2>
          <p className="text-muted-foreground">
            Berbagai format konten edukatif yang bisa kamu pilih sesuai gaya belajarmu
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <ProgressBar progress={65} level={5} xp={1350} maxXp={2000} />
        </div>

        {/* Content Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentCards.map((card, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ContentCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
