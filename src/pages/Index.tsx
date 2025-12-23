import React from 'react';
import { Helmet } from 'react-helmet-async';
import CloudBackground from '@/components/CloudBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ContentSection from '@/components/ContentSection';
import ArticleSection from '@/components/ArticleSection';
import VideoSection from '@/components/VideoSection';
import InfografisSection from '@/components/InfografisSection';
import QuizSection from '@/components/QuizSection';
import FinoMascot from '@/components/FinoMascot';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>FinSky - Belajar Fintech dengan Cara Menyenangkan</title>
        <meta 
          name="description" 
          content="Platform edukasi fintech terdepan untuk meningkatkan literasi keuangan digital masyarakat Indonesia. Belajar investasi, fintech, dan keuangan digital dengan mudah dan menyenangkan." 
        />
        <meta name="keywords" content="fintech, edukasi keuangan, literasi keuangan, investasi, belajar fintech, keuangan digital" />
      </Helmet>

      <div className="relative min-h-screen overflow-x-hidden">
        <CloudBackground />
        <Navbar />
        
        <main>
          <HeroSection />
          <ContentSection />
          
          {/* Content Sections - Setiap section memiliki ID untuk anchor navigation */}
          <ArticleSection />
          <VideoSection />
          <InfografisSection />
          <QuizSection />
        </main>

        <Footer />
        <FinoMascot />
      </div>
    </>
  );
};

export default Index;
