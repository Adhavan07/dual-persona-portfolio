import React, { createContext, useContext, useState, useCallback } from 'react';

type PortfolioMode = 'devops' | 'security';

interface PortfolioContextType {
  mode: PortfolioMode;
  isTransitioning: boolean;
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
  const [mode, setMode] = useState<PortfolioMode>('devops');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleMode = useCallback(() => {
    setIsTransitioning(true);
    
    // Start transition animation
    setTimeout(() => {
      setMode(prev => prev === 'devops' ? 'security' : 'devops');
    }, 500);

    // End transition
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1500);
  }, []);

  return (
    <PortfolioContext.Provider value={{ mode, isTransitioning, toggleMode }}>
      <div className={mode === 'security' ? 'security-mode' : ''}>
        {children}
      </div>
    </PortfolioContext.Provider>
  );
};
