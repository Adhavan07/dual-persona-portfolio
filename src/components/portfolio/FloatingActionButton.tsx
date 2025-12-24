import React, { useState } from 'react';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { Shield, Server, RefreshCw } from 'lucide-react';

const FloatingActionButton: React.FC = () => {
  const { mode, isTransitioning, toggleMode } = usePortfolio();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {/* Tooltip */}
      <div
        className={`absolute bottom-full right-0 mb-3 transition-all duration-300 ${
          isHovered && !isTransitioning ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <div className="bg-card border border-primary/40 rounded px-4 py-2 whitespace-nowrap neon-border">
          <p className="font-mono text-sm text-foreground">
            {mode === 'devops' ? 'Switch to Security Mode' : 'Switch to DevOps Mode'}
          </p>
          <p className="font-mono text-xs text-muted-foreground mt-1">
            {mode === 'devops' ? 'Become: Ethical Hacker' : 'Become: Cloud Engineer'}
          </p>
        </div>
        {/* Arrow */}
        <div className="absolute top-full right-6 border-8 border-transparent border-t-primary/40" />
      </div>

      {/* Button */}
      <button
        onClick={toggleMode}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        disabled={isTransitioning}
        className={`
          group relative w-16 h-16 rounded-full 
          bg-gradient-to-br from-primary/20 to-primary/10
          border-2 border-primary
          flex items-center justify-center
          transition-all duration-300
          hover:scale-110 hover:shadow-xl
          animate-pulse-glow
          ${isTransitioning ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
        `}
      >
        {/* Inner glow effect */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/30 to-transparent" />
        
        {/* Icon */}
        <div className={`relative z-10 transition-transform duration-500 ${isTransitioning ? 'animate-spin' : 'group-hover:rotate-180'}`}>
          {isTransitioning ? (
            <RefreshCw className="w-7 h-7 text-primary" />
          ) : mode === 'devops' ? (
            <Shield className="w-7 h-7 text-primary" />
          ) : (
            <Server className="w-7 h-7 text-primary" />
          )}
        </div>

        {/* Ripple effect on hover */}
        <div className="absolute inset-0 rounded-full border border-primary/50 scale-100 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500" />
        <div className="absolute inset-0 rounded-full border border-primary/30 scale-100 group-hover:scale-175 group-hover:opacity-0 transition-all duration-700 delay-100" />
      </button>

      {/* Mode indicator */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
        <span className="font-mono text-[10px] text-primary/60 uppercase tracking-widest">
          {mode === 'devops' ? 'devops' : 'security'}
        </span>
      </div>
    </div>
  );
};

export default FloatingActionButton;
