import React, { useEffect, useState, useRef } from 'react';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { ChevronDown, User } from 'lucide-react';

const Hero: React.FC = () => {
  const { mode, isTransitioning } = usePortfolio();
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const prevModeRef = useRef(mode);

  const devopsTitle = 'DevOps | Cloud | SRE Engineer';
  const securityTitle = 'DevSecOps | Ethical Hacker | Security Engineer';
  
  const targetTitle = mode === 'devops' ? devopsTitle : securityTitle;

  useEffect(() => {
    setDisplayText('');
    setIsTypingComplete(false);
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index < targetTitle.length) {
        setDisplayText(targetTitle.slice(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [mode, targetTitle]);

  // Trigger glitch animation on mode change
  useEffect(() => {
    if (prevModeRef.current !== mode) {
      setIsGlitching(true);
      const timeout = setTimeout(() => setIsGlitching(false), 500);
      prevModeRef.current = mode;
      return () => clearTimeout(timeout);
    }
  }, [mode]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/50 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Terminal prompt */}
          <div className="mb-6 inline-block">
            <span className="text-primary/60 font-mono text-sm md:text-base">
              {mode === 'devops' ? 'root@cloud-server:~$' : 'root@secure-shell:~$'}
            </span>
            <span className="text-primary ml-2 animate-pulse">_</span>
          </div>

          {/* Name with profile picture and welcoming character */}
          <div className="flex items-center justify-center gap-4 mb-4">
            {/* Profile Picture */}
            <div 
              className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-primary overflow-hidden bg-card flex items-center justify-center ${isGlitching ? 'animate-profile-glitch' : ''}`}
            >
              {mode === 'devops' ? (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <User className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center relative">
                  <User className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  {/* Hacker overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[8px] font-mono text-primary opacity-60">
                    {'</>'}
                  </div>
                </div>
              )}
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full border border-primary/50 animate-pulse-glow pointer-events-none" />
            </div>
            
            {/* Animated waving character */}
            <div className="text-4xl md:text-5xl lg:text-6xl animate-wave">
              👋
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold neon-glow">
              JOHN DOE
            </h1>
          </div>

          {/* Animated title */}
          <div className="h-12 md:h-16 flex items-center justify-center mb-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-display text-primary terminal-text">
              {displayText}
              <span className={`ml-1 border-r-2 border-primary ${isTypingComplete ? 'animate-blink' : ''}`}>
                &nbsp;
              </span>
            </h2>
          </div>
          <p className="text-muted-foreground font-mono text-sm md:text-base max-w-2xl mx-auto mb-12 leading-relaxed">
            {mode === 'devops' ? (
              <>
                <span className="text-primary">{'>'}</span> Passionate about building scalable infrastructure, 
                automating everything, and ensuring 99.99% uptime. 
                <span className="text-accent"> Kubernetes</span> enthusiast and 
                <span className="text-accent"> CI/CD</span> architect.
              </>
            ) : (
              <>
                <span className="text-primary">{'>'}</span> Dedicated to securing digital assets, 
                finding vulnerabilities before the bad actors do, and building 
                <span className="text-accent"> secure-by-design</span> systems. 
                <span className="text-accent"> Ethical hacker</span> & security advocate.
              </>
            )}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="group px-8 py-3 bg-primary text-primary-foreground font-display font-semibold rounded border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 neon-border"
            >
              <span className="mr-2">{'['}</span>
              View Projects
              <span className="ml-2">{']'}</span>
            </a>
            <a
              href="#resume"
              onClick={(e) => { e.preventDefault(); document.querySelector('#resume')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="group px-8 py-3 bg-transparent text-primary font-display font-semibold rounded border border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <span className="mr-2">{'{'}</span>
              Download Resume
              <span className="ml-2">{'}'}</span>
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-primary/60 hover:text-primary transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
