import React, { useEffect, useState, useRef, useMemo } from 'react';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { ChevronDown } from 'lucide-react';
import profilePic from '@/assets/profile-pic.png';
import luffyIcon from '@/assets/luffy-icon.png';

// Code rain characters
const CODE_CHARS = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン<>/{}[]();:=+-*&%$#@!?';
const PIRATE_CHARS = '⚓☠️🏴‍☠️🗺️💎🔱⛵🌊🦜';

const Hero: React.FC = () => {
  const { mode, isTransitioning } = usePortfolio();
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const prevModeRef = useRef(mode);

  // Generate code rain columns based on mode
  const codeRainColumns = useMemo(() => {
    const chars = mode === 'pirate' ? PIRATE_CHARS : CODE_CHARS;
    return [...Array(30)].map((_, i) => ({
      id: i,
      left: `${(i / 30) * 100}%`,
      delay: Math.random() * 20,
      duration: 15 + Math.random() * 10,
      chars: [...Array(20)].map(() => chars[Math.floor(Math.random() * chars.length)])
    }));
  }, [mode]);

  const devopsTitle = 'DevOps Engineer | Cloud | Mlops';
  const securityTitle = 'DevSecOps | Cyber secrity | Cloud Security';
  const pirateTitle = 'Tech Pirate | Personal Projects | Adventure Seeker';
  
  const getTargetTitle = () => {
    switch (mode) {
      case 'devops': return devopsTitle;
      case 'security': return securityTitle;
      case 'pirate': return pirateTitle;
    }
  };

  const targetTitle = getTargetTitle();

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

  const getTerminalPrompt = () => {
    switch (mode) {
      case 'devops': return 'adhavan@cloud-server:~$';
      case 'security': return 'adhavan@secure-shell:~$';
      case 'pirate': return 'captain@thousand-sunny:~$';
    }
  };

  const getProfileImage = () => {
    if (mode === 'pirate') return luffyIcon;
    return profilePic;
  };

  const getDescription = () => {
    switch (mode) {
      case 'devops':
        return (
          <>
            <span className="text-primary">{'>'}</span> DevOps-focused engineer with hands-on experience in 
            <span className="text-accent"> Linux systems</span>, <span className="text-accent">Bash scripting</span>, and CLI automation. 
            Skilled in <span className="text-accent">Jenkins</span>, <span className="text-accent">Docker</span>, <span className="text-accent">Kubernetes</span>, 
            <span className="text-accent"> Terraform</span>, and <span className="text-accent">AWS</span>.
          </>
        );
      case 'security':
        return (
          <>
            <span className="text-primary">{'>'}</span> Focused on integrating 
            <span className="text-accent"> security</span> into DevOps pipelines, with experience in 
            <span className="text-accent"> vulnerability scanning</span>, <span className="text-accent">Trivy</span>, 
            and <span className="text-accent">SonarQube</span>. Building secure-by-design systems.
          </>
        );
      case 'pirate':
        return (
          <>
            <span className="text-primary">{'>'}</span> Setting sail through the vast tech ocean! 
            Just like a pirate exploring new islands, I travel through companies discovering 
            <span className="text-accent"> new technologies</span> and building 
            <span className="text-accent"> personal adventures</span>. The treasure? Knowledge!
          </>
        );
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Pirate mode - wave effect */}
      {mode === 'pirate' && (
        <div className="absolute bottom-0 left-0 right-0 h-40 opacity-20">
          <div className="absolute inset-0 animate-wave-slow bg-gradient-to-t from-accent/30 to-transparent" />
        </div>
      )}
      
      {/* Code Rain Effect - Extremely Subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {codeRainColumns.map((column) => (
          <div
            key={column.id}
            className="absolute top-0 font-mono text-[10px] text-primary/[0.08] animate-code-rain select-none"
            style={{
              left: column.left,
              animationDelay: `${column.delay}s`,
              animationDuration: `${column.duration}s`,
            }}
          >
            {column.chars.map((char, idx) => (
              <div key={idx} className="leading-4">{char}</div>
            ))}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Terminal prompt */}
          <div className="mb-6 inline-block">
            <span className="text-primary/60 font-mono text-sm md:text-base">
              {getTerminalPrompt()}
            </span>
            <span className="text-primary ml-2 animate-pulse">_</span>
          </div>

          {/* Name with profile picture and welcoming character */}
          <div className="flex items-center justify-center gap-4 mb-4">
            {/* Profile Picture */}
            <div 
              className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-primary overflow-hidden bg-card flex items-center justify-center ${isGlitching ? 'animate-profile-glitch' : ''}`}
            >
              <img 
                src={getProfileImage()} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
              {mode === 'security' && (
                <>
                  {/* Hacker overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-primary/10" />
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[8px] font-mono text-primary opacity-80">
                    {'</>'}
                  </div>
                </>
              )}
              {mode === 'pirate' && (
                <>
                  {/* Pirate overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px]">
                    ⚓
                  </div>
                </>
              )}
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full border border-primary/50 animate-pulse-glow pointer-events-none" />
            </div>
            
            {/* Animated waving character */}
            <div className="text-4xl md:text-5xl lg:text-6xl animate-wave">
              {mode === 'pirate' ? '🏴‍☠️' : '👋'}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold neon-glow">
              {mode === 'pirate' ? 'CAPTAIN ADHAVAN' : 'ADHAVAN J.V.R'}
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
            {getDescription()}
          </p>


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
