import React from 'react';
import { Coins, TrendingUp, Wallet, CreditCard, PiggyBank, Target } from 'lucide-react';

const FloatingIcons = () => {
  const icons = [
    { Icon: Coins, className: 'floating-icon top-1/4 left-[15%] text-sunshine', size: 40 },
    { Icon: TrendingUp, className: 'floating-icon-delayed top-1/3 right-[20%] text-sky-deep', size: 36 },
    { Icon: Wallet, className: 'floating-icon-slow top-2/3 left-[10%] text-sunset', size: 32 },
    { Icon: CreditCard, className: 'floating-icon top-1/2 right-[15%] text-sky-primary', size: 38 },
    { Icon: PiggyBank, className: 'floating-icon-delayed top-[60%] right-[25%] text-sunshine', size: 34 },
    { Icon: Target, className: 'floating-icon-slow top-[40%] left-[25%] text-sky-deep', size: 30 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map(({ Icon, className, size }, index) => (
        <div
          key={index}
          className={`absolute ${className} opacity-60`}
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          <div className="p-3 bg-card/50 backdrop-blur-sm rounded-2xl shadow-soft">
            <Icon size={size} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
