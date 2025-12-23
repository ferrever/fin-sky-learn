import React from 'react';

const Cloud = ({ className, size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = {
    sm: 'w-24 h-12',
    md: 'w-40 h-20',
    lg: 'w-64 h-32',
  };

  return (
    <div className={`absolute ${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 200 100" className="w-full h-full drop-shadow-lg">
        <defs>
          <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.95" />
            <stop offset="100%" stopColor="white" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <ellipse cx="60" cy="60" rx="40" ry="30" fill="url(#cloudGradient)" />
        <ellipse cx="100" cy="50" rx="50" ry="35" fill="url(#cloudGradient)" />
        <ellipse cx="150" cy="60" rx="35" ry="25" fill="url(#cloudGradient)" />
        <ellipse cx="80" cy="70" rx="45" ry="25" fill="url(#cloudGradient)" />
        <ellipse cx="130" cy="65" rx="40" ry="28" fill="url(#cloudGradient)" />
      </svg>
    </div>
  );
};

const CloudBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Sky gradient background */}
      <div className="absolute inset-0 bg-sky-gradient" />
      
      {/* Animated clouds */}
      <Cloud size="lg" className="cloud-move top-10 opacity-90" />
      <Cloud size="md" className="cloud-move-slow top-24 opacity-80" />
      <Cloud size="sm" className="cloud-move-fast top-16 opacity-70" />
      <Cloud size="lg" className="cloud-move-slow top-40 opacity-60" />
      <Cloud size="md" className="cloud-move top-8 opacity-85" />
      <Cloud size="sm" className="cloud-move-fast top-32 opacity-75" />
      
      {/* Static decorative clouds */}
      <div className="absolute top-20 right-10 w-32 h-16 opacity-40">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <ellipse cx="100" cy="50" rx="60" ry="35" fill="white" />
          <ellipse cx="60" cy="60" rx="40" ry="25" fill="white" />
          <ellipse cx="140" cy="55" rx="35" ry="28" fill="white" />
        </svg>
      </div>
      
      <div className="absolute top-48 left-20 w-24 h-12 opacity-30">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <ellipse cx="100" cy="50" rx="50" ry="30" fill="white" />
        </svg>
      </div>
    </div>
  );
};

export default CloudBackground;
