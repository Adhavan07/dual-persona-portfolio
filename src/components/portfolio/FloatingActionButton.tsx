import React, { useState } from 'react';
import { usePortfolio, PortfolioMode } from '@/contexts/PortfolioContext';
import { Shield, Server, RefreshCw, Anchor } from 'lucide-react';
import luffyIcon from '@/assets/luffy-icon.png';

const FloatingActionButton: React.FC = () => {
  const { mode, isTransitioning, setMode } = usePortfolio();
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleModeSelect = (newMode: PortfolioMode) => {
    setMode(newMode);
    setShowPopup(false);
  };

  const getModeIcon = () => {
    if (isTransitioning) return <RefreshCw className="w-7 h-7 text-primary animate-spin" />;
    
    switch (mode) {
      case 'devops':
        return <Server className="w-7 h-7 text-primary" />;
      case 'security':
        return <Shield className="w-7 h-7 text-primary" />;
      case 'pirate':
        return <Anchor className="w-7 h-7 text-primary" />;
    }
  };

  const getModeLabel = () => {
    switch (mode) {
      case 'devops': return 'devops';
      case 'security': return 'security';
      case 'pirate': return 'pirate';
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {/* Mode Selection Popup */}
      {showPopup && !isTransitioning && (
        <div className="absolute bottom-full right-0 mb-4 animate-scale-in">
          <div className="bg-card border border-primary/40 rounded-lg p-4 neon-border min-w-[200px]">
            <p className="font-mono text-xs text-muted-foreground mb-3 uppercase tracking-wider">
              Switch Identity
            </p>
            
            {/* DevOps Option */}
            <button
              onClick={() => handleModeSelect('devops')}
              disabled={mode === 'devops'}
              className={`w-full flex items-center gap-3 p-3 rounded mb-2 transition-all ${
                mode === 'devops' 
                  ? 'bg-primary/20 border border-primary cursor-default' 
                  : 'hover:bg-primary/10 border border-transparent hover:border-primary/30'
              }`}
            >
              <Server className="w-6 h-6 text-primary" />
              <div className="text-left">
                <p className="font-mono text-sm text-foreground">DevOps</p>
                <p className="font-mono text-[10px] text-muted-foreground">Cloud Engineer</p>
              </div>
            </button>

            {/* Security Option */}
            <button
              onClick={() => handleModeSelect('security')}
              disabled={mode === 'security'}
              className={`w-full flex items-center gap-3 p-3 rounded mb-2 transition-all ${
                mode === 'security' 
                  ? 'bg-primary/20 border border-primary cursor-default' 
                  : 'hover:bg-primary/10 border border-transparent hover:border-primary/30'
              }`}
            >
              <Shield className="w-6 h-6 text-primary" />
              <div className="text-left">
                <p className="font-mono text-sm text-foreground">Security</p>
                <p className="font-mono text-[10px] text-muted-foreground">Ethical Hacker</p>
              </div>
            </button>

            {/* Pirate Option */}
            <button
              onClick={() => handleModeSelect('pirate')}
              disabled={mode === 'pirate'}
              className={`w-full flex items-center gap-3 p-3 rounded transition-all ${
                mode === 'pirate' 
                  ? 'bg-primary/20 border border-primary cursor-default' 
                  : 'hover:bg-primary/10 border border-transparent hover:border-primary/30'
              }`}
            >
              <img 
                src={luffyIcon} 
                alt="Luffy" 
                className="w-6 h-6 rounded-full object-cover border border-primary/50"
              />
              <div className="text-left">
                <p className="font-mono text-sm text-foreground">Pirate</p>
                <p className="font-mono text-[10px] text-muted-foreground">Tech Adventurer</p>
              </div>
            </button>
          </div>
          
          {/* Arrow */}
          <div className="absolute top-full right-6 border-8 border-transparent border-t-primary/40" />
        </div>
      )}

      {/* Tooltip (when not showing popup) */}
      {!showPopup && (
        <div
          className={`absolute bottom-full right-0 mb-3 transition-all duration-300 ${
            isHovered && !isTransitioning ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <div className="bg-card border border-primary/40 rounded px-4 py-2 whitespace-nowrap neon-border">
            <p className="font-mono text-sm text-foreground">
              Click to switch portfolio
            </p>
          </div>
          {/* Arrow */}
          <div className="absolute top-full right-6 border-8 border-transparent border-t-primary/40" />
        </div>
      )}

      {/* Button */}
      <button
        onClick={() => setShowPopup(!showPopup)}
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
          ${showPopup ? 'scale-110 shadow-xl' : ''}
        `}
      >
        {/* Inner glow effect */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/30 to-transparent" />
        
        {/* Icon */}
        <div className={`relative z-10 transition-transform duration-500 ${showPopup ? 'rotate-180' : 'group-hover:rotate-12'}`}>
          {getModeIcon()}
        </div>

        {/* Ripple effect on hover */}
        <div className="absolute inset-0 rounded-full border border-primary/50 scale-100 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500" />
        <div className="absolute inset-0 rounded-full border border-primary/30 scale-100 group-hover:scale-175 group-hover:opacity-0 transition-all duration-700 delay-100" />
      </button>

      {/* Mode indicator */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
        <span className="font-mono text-[10px] text-primary/60 uppercase tracking-widest">
          {getModeLabel()}
        </span>
      </div>

      {/* Click outside to close popup */}
      {showPopup && (
        <div 
          className="fixed inset-0 z-[-1]" 
          onClick={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default FloatingActionButton;
