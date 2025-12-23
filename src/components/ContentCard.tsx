import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContentCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconBg: string;
  count: string;
  onClick: () => void;
}

const ContentCard = ({ title, description, icon: Icon, iconBg, count, onClick }: ContentCardProps) => {
  return (
    <div 
      onClick={onClick}
      className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-sky-primary/50 hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col"
    >
      <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center mb-4 text-white`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <div className="mt-auto flex justify-between items-center">
        <span className="text-xs font-medium px-2 py-1 bg-secondary rounded-lg">{count}</span>
        <span className="text-sky-deep text-sm font-semibold">Lihat Materi →</span>
      </div>
    </div>
  );
};

export default ContentCard;