import React from 'react';
import { Trophy, Star, Zap } from 'lucide-react';

interface ProgressBarProps {
  progress: number;
  level: number;
  xp: number;
  maxXp: number;
}

const ProgressBar = ({ progress, level, xp, maxXp }: ProgressBarProps) => {
  return (
    <div className="glass-card p-4 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-sunshine/20 rounded-xl flex items-center justify-center">
            <Trophy className="w-6 h-6 text-sunshine" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Level Saat Ini</p>
            <p className="text-xl font-bold text-foreground">Level {level}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-sky-primary/20 rounded-lg">
          <Zap className="w-4 h-4 text-sky-deep" />
          <span className="font-semibold text-sky-deep">{xp} XP</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Progress ke Level {level + 1}</span>
          <span className="font-medium text-foreground">{Math.round(progress)}%</span>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-sky-primary to-sky-deep rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground text-right">
          {xp} / {maxXp} XP untuk naik level
        </p>
      </div>

      {/* Achievement badges */}
      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/50">
        <span className="text-sm text-muted-foreground">Lencana:</span>
        <div className="flex gap-1">
          {[
            { color: 'bg-sunshine', icon: Star },
            { color: 'bg-sky-primary', icon: Trophy },
            { color: 'bg-sunset', icon: Zap },
          ].map((badge, i) => (
            <div
              key={i}
              className={`w-8 h-8 ${badge.color} rounded-lg flex items-center justify-center shadow-soft`}
            >
              <badge.icon className="w-4 h-4 text-primary-foreground" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
