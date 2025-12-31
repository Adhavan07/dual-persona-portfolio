import React, { createContext, useContext, useState, useCallback } from 'react';

export type PortfolioMode = 'devops' | 'security' | 'pirate';

interface PortfolioContextType {
  mode: PortfolioMode;
  isTransitioning: boolean;
  setMode: (mode: PortfolioMode) => void;
  toggleMode: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<PortfolioMode>('devops');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const setMode = useCallback((newMode: PortfolioMode) => {
    if (newMode === mode) return;
    
    setIsTransitioning(true);
    
    // Start transition animation
    setTimeout(() => {
      setModeState(newMode);
    }, 500);

    // End transition
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1500);
  }, [mode]);

  const toggleMode = useCallback(() => {
    setIsTransitioning(true);
    
    // Start transition animation
    setTimeout(() => {
      setModeState(prev => prev === 'devops' ? 'security' : 'devops');
    }, 500);

    // End transition
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1500);
  }, []);

  const getModeClass = () => {
    if (mode === 'security') return 'security-mode';
    if (mode === 'pirate') return 'pirate-mode';
    return '';
  };

  return (
    <PortfolioContext.Provider value={{ mode, isTransitioning, setMode, toggleMode }}>
      <div className={getModeClass()}>
        {children}
      </div>
    </PortfolioContext.Provider>
  );
};
