import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Video, BarChart3, HelpCircle } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Artikel Fintech', icon: BookOpen, target: 'artikel-fintech' },
    { name: 'Video Edukasi', icon: Video, target: 'video-edukasi' },
    { name: 'Infografis', icon: BarChart3, target: 'infografis' },
    { name: 'Kuis Interaktif', icon: HelpCircle, target: 'kuis-interaktif' },
  ];

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav shadow-lg' : 'glass-nav'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 outline-none group">
            <div className="relative w-10 h-10 bg-sky-primary rounded-xl flex items-center justify-center font-bold text-white">F</div>
            <span className="text-xl font-bold text-gradient-sky">FinSky</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <button key={item.name} onClick={() => scrollToId(item.target)} className="flex items-center gap-2 px-4 py-2 rounded-xl text-foreground/80 hover:bg-primary/10 font-medium">
                <item.icon className="w-4 h-4" /> {item.name}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button variant="sunshine" size="lg" onClick={() => scrollToId('materi-belajar')}>Mulai Belajar</Button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {menuItems.map((item) => (
              <button key={item.name} onClick={() => scrollToId(item.target)} className="flex items-center gap-3 w-full px-4 py-3 text-left">
                <item.icon className="w-5 h-5" /> {item.name}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button variant="sunshine" className="w-full" onClick={() => scrollToId('materi-belajar')}>Mulai Belajar</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;