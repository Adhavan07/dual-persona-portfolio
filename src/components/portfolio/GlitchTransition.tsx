import React, { useEffect, useState } from 'react';
import { usePortfolio } from '@/contexts/PortfolioContext';

const GlitchTransition: React.FC = () => {
  const { isTransitioning, mode } = usePortfolio();
  const [glitchText, setGlitchText] = useState('');

  const devopsTexts = [
    'INITIATING SYSTEM OVERRIDE...',
    'ACCESSING SECURITY PROTOCOLS...',
    'SWITCHING TO SECURITY MODE...',
    'HACK THE PLANET...',
  ];

  const securityTexts = [
    'RESTORING INFRASTRUCTURE...',
    'LOADING DEVOPS MODULES...',
    'SWITCHING TO DEVOPS MODE...',
    'DEPLOYING PIPELINES...',
  ];

  const pirateTexts = [
    'SETTING SAIL...',
    'CHARTING NEW WATERS...',
    'RAISING THE FLAG...',
    'ADVENTURE AWAITS...',
    'FINDING THE ONE PIECE...',
  ];

  useEffect(() => {
    if (isTransitioning) {
      let texts: string[];
      switch (mode) {
        case 'devops':
          texts = devopsTexts;
          break;
        case 'security':
          texts = securityTexts;
          break;
        case 'pirate':
          texts = pirateTexts;
          break;
      }
      
      let index = 0;
      const interval = setInterval(() => {
        setGlitchText(texts[index % texts.length]);
        index++;
      }, 300);
      return () => clearInterval(interval);
    }
  }, [isTransitioning, mode]);

  if (!isTransitioning) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none">
      {/* Black overlay with scanlines */}
      <div className="absolute inset-0 bg-background animate-glitch-overlay" />
      
      {/* Glitch bars */}
      <div className="absolute inset-0 flex flex-col">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="h-[5vh] bg-primary/20"
            style={{
              transform: `translateX(${Math.random() * 100 - 50}px)`,
              animation: `glitch 0.1s ${i * 0.05}s infinite`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-display text-primary animate-glitch neon-glow">
            {glitchText}
          </h2>
          <div className="mt-4 flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-primary animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Static noise overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default GlitchTransition;
