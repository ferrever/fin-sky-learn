import React from 'react';
import { Helmet } from 'react-helmet-async';
import CloudBackground from '@/components/CloudBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ContentSection from '@/components/ContentSection';
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
        </main>

        <Footer />
        <FinoMascot />
      </div>
    </>
  );
};

export default Index;
