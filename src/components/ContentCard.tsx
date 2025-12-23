import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContentCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconBg: string;
  count: string;
  onClick: () => void; // Menambahkan definisi fungsi klik
}

const ContentCard = ({ 
  title, 
  description, 
  icon: Icon, 
  iconBg, 
  count, 
  onClick 
}: ContentCardProps) => {
  return (
    // Kita gunakan <div> atau <button> sebagai pengganti <a> untuk menghindari 404
    <div 
      onClick={onClick}
      className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-sky-primary/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-sky-deep transition-colors">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {description}
      </p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs font-medium px-2 py-1 bg-secondary rounded-lg text-secondary-foreground">
          {count}
        </span>
        <span className="text-sky-deep text-sm font-semibold group-hover:translate-x-1 transition-transform">
          Lihat Materi →
        </span>
      </div>
    </div>
  );
};

export default ContentCard;