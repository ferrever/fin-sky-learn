import React from 'react';
import { HelpCircle, ExternalLink, Trophy, Zap } from 'lucide-react';
import { Button } from './ui/button';

// =====================================================
// EDIT DATA KUIS DI SINI
// Ganti title, description, dan url sesuai kebutuhan
// URL harus berupa link Quizizz yang valid
// =====================================================
const quizItems = [
  {
    title: "Kuis Investasi Pemula",
    description: "Tantang dirimu dengan pertanyaan seputar investasi untuk pemula.",
    url: "https://quizizz.com/admin/quiz/aaaaaaaa",
  },
];

const QuizSection = () => {
  return (
    <section
      id="kuis-interaktif"
      className="py-16 md:py-24 bg-card relative z-10"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sunshine/20 text-sunshine mb-4">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Kuis
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Kuis Interaktif
          </h2>
          <p className="text-muted-foreground text-lg">
            Uji pemahaman fintech-mu dan dapatkan sertifikat serta lencana
            pencapaian!
          </p>
        </div>

        {/* Quiz Cards Grid */}
        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {quizItems.map((quiz, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl border border-border/50 p-6 hover:shadow-card-hover hover:border-sunshine/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-sunshine/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-sunshine/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-sunshine/20 to-sunset/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Trophy className="w-7 h-7 text-sunshine" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-sunshine transition-colors">
                      {quiz.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {quiz.description}
                    </p>
                    <Button
                      variant="sunshine"
                      size="default"
                      className="group/btn"
                      onClick={() => window.open(quiz.url, '_blank')}
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      Mulai Kuis
                      <ExternalLink className="w-3 h-3 ml-2 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
