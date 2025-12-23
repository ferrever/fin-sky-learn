import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Heart
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'Youtube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Artikel Fintech', href: '#artikel' },
    { name: 'Video Edukasi', href: '#video' },
    { name: 'Kuis Interaktif', href: '#kuis' },
    { name: 'FAQ', href: '#faq' },
  ];

  const resourceLinks = [
    { name: 'Panduan Pengguna', href: '#' },
    { name: 'Syarat & Ketentuan', href: '#' },
    { name: 'Kebijakan Privasi', href: '#' },
    { name: 'Pusat Bantuan', href: '#' },
  ];

  return (
    <footer className="relative bg-sunset-gradient">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-full">
        <svg viewBox="0 0 1440 80" className="w-full h-16 md:h-20">
          <path
            fill="hsl(200 70% 75%)"
            d="M0,40L80,45C160,50,320,60,480,58.3C640,57,800,43,960,38.3C1120,33,1280,37,1360,38.3L1440,40L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-sunshine rounded-xl transform rotate-6" />
                <div className="absolute inset-0 bg-sky-primary rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold text-primary-foreground">F</span>
                </div>
              </div>
              <span className="text-2xl font-bold text-twilight">FinSky</span>
            </a>
            <p className="text-twilight/80 text-sm mb-6">
              Platform edukasi fintech terdepan untuk meningkatkan literasi keuangan digital masyarakat Indonesia.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-card/60 backdrop-blur-sm rounded-xl flex items-center justify-center text-twilight hover:bg-sky-primary hover:text-card transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-twilight mb-4">Menu Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-twilight/80 hover:text-twilight hover:pl-2 transition-all duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-twilight mb-4">Sumber Daya</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-twilight/80 hover:text-twilight hover:pl-2 transition-all duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-twilight mb-4">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-deep flex-shrink-0 mt-0.5" />
                <span className="text-twilight/80 text-sm">
                  Jakarta, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-deep flex-shrink-0" />
                <a href="mailto:hello@finsky.id" className="text-twilight/80 hover:text-twilight text-sm transition-colors">
                  hello@finsky.id
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-deep flex-shrink-0" />
                <a href="tel:" className="text-twilight/80 hover:text-twilight text-sm transition-colors">
                  +62 812-0000-0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-twilight/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-twilight/70 text-sm text-center md:text-left">
              © 2024 FinSky. All rights reserved.
            </p>
            <p className="flex items-center gap-1 text-twilight/70 text-sm">
              Dibuat dengan <Heart className="w-4 h-4 text-sunset fill-sunset" /> untuk Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
