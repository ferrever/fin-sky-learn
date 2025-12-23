import React, { useState } from 'react';
import { Menu, X, BookOpen, Video, BarChart3, HelpCircle } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Artikel Fintech', icon: BookOpen, href: '#artikel' },
    { name: 'Video Edukasi', icon: Video, href: '#video' },
    { name: 'Infografis', icon: BarChart3, href: '#infografis' },
    { name: 'Kuis Interaktif', icon: HelpCircle, href: '#kuis' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <div className="absolute inset-0 bg-sunshine rounded-xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-sky-primary rounded-xl flex items-center justify-center">
                <span className="text-xl md:text-2xl font-bold text-primary-foreground">F</span>
              </div>
            </div>
            <span className="text-xl md:text-2xl font-bold text-gradient-sky">FinSky</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-all duration-300 font-medium"
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="sunshine" size="lg">
              Mulai Belajar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-primary/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/30 animate-fade-in-up">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <Button variant="sunshine" className="w-full" size="lg">
                  Mulai Belajar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
