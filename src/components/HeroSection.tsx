import React from 'react';
import { Button } from './ui/button';
import { Play, ArrowRight, Sparkles } from 'lucide-react';
import FloatingIcons from './FloatingIcons';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      <FloatingIcons />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/60 backdrop-blur-lg rounded-full border border-border/50 mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-sunshine" />
            <span className="text-sm font-medium text-foreground/80">
              Platform Edukasi Fintech #1 di Indonesia
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-100">
            <span className="text-foreground">Belajar Fintech dengan</span>
            <br />
            <span className="text-gradient-sky">Cara Menyenangkan</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
            Tingkatkan literasi keuangan digitalmu dengan materi interaktif, 
            video edukatif, dan kuis seru. Mulai perjalananmu menuju kebebasan finansial!
          </p>

         {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <a href="#materi-belajar">
              <Button variant="hero" size="xl" className="group">
                Mulai Belajar Sekarang
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>


          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 animate-fade-in-up animation-delay-400">
            {[
              { value: '50K+', label: 'Pengguna Aktif' },
              { value: '200+', label: 'Materi Edukasi' },
              { value: '4.9', label: 'Rating Pengguna' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-sky-deep mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 md:h-32">
          <path
            fill="hsl(var(--card))"
            fillOpacity="0.5"
            d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          />
          <path
            fill="hsl(var(--card))"
            d="M0,96L60,90.7C120,85,240,75,360,74.7C480,75,600,85,720,90.7C840,96,960,96,1080,90.7C1200,85,1320,75,1380,69.3L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
