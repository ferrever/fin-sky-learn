import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ContentCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconBg: string;
  count: string;
  href: string;
}

const ContentCard = ({ title, description, icon: Icon, iconBg, count, href }: ContentCardProps) => {
  return (
    <a
      href={href}
      className="group block glass-card p-6 hover:shadow-float hover:-translate-y-2 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-7 h-7 text-card" />
        </div>
        <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground">
          {count}
        </span>
      </div>

      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-sky-deep transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {description}
      </p>

      <div className="flex items-center text-sky-deep font-medium text-sm group-hover:gap-3 gap-2 transition-all">
        Jelajahi
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </a>
  );
};

export default ContentCard;
