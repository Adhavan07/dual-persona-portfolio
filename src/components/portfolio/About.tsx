import React, { useState } from 'react';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { 
  Cloud, Database, Server, GitBranch, Container, 
  Shield, Lock, Bug, Eye, Fingerprint,
  Terminal, X, Anchor, Map, Compass, Ship, Sword, Gem
} from 'lucide-react';

const About: React.FC = () => {
  const { mode } = usePortfolio();
  const [terminalState, setTerminalState] = useState<'normal' | 'minimized' | 'maximized' | 'closed'>('normal');

  const devopsSkills = [
    { name: 'Kubernetes', icon: Container },
    { name: 'Docker', icon: Container },
    { name: 'AWS/GCP/Azure', icon: Cloud },
    { name: 'Terraform', icon: Server },
    { name: 'CI/CD', icon: GitBranch },
    { name: 'Linux', icon: Terminal },
    { name: 'Python', icon: Terminal },
    { name: 'Ansible', icon: Server },
    { name: 'Prometheus', icon: Database },
    { name: 'Grafana', icon: Database },
  ];

  const securitySkills = [
    { name: 'Penetration Testing', icon: Bug },
    { name: 'SIEM/SOAR', icon: Eye },
    { name: 'Network Security', icon: Shield },
    { name: 'Vulnerability Assessment', icon: Lock },
    { name: 'Incident Response', icon: Shield },
    { name: 'Cryptography', icon: Fingerprint },
    { name: 'Security Audits', icon: Eye },
    { name: 'Threat Modeling', icon: Bug },
    { name: 'Malware Analysis', icon: Bug },
    { name: 'OWASP', icon: Shield },
  ];

  const pirateSkills = [
    { name: 'React/Next.js', icon: Compass },
    { name: 'TypeScript', icon: Sword },
    { name: 'Node.js', icon: Ship },
    { name: 'Game Dev', icon: Gem },
    { name: 'Mobile Apps', icon: Map },
    { name: 'AI/ML Projects', icon: Anchor },
    { name: 'Open Source', icon: Ship },
    { name: 'Side Hustles', icon: Gem },
    { name: 'Hobby Projects', icon: Compass },
    { name: 'Learning', icon: Map },
  ];

  const getSkills = () => {
    switch (mode) {
      case 'devops': return devopsSkills;
      case 'security': return securitySkills;
      case 'pirate': return pirateSkills;
    }
  };

  const skills = getSkills();

  const getTerminalContent = () => {
    switch (mode) {
      case 'devops':
        return (
          <>
            <p>
              <span className="text-primary">{'>'}</span>{' '}
              <span className="text-muted-foreground">
                Hello! I'm a passionate <span className="text-primary">DevOps Engineer</span> with 
                expertise in cloud infrastructure, automation, and building resilient systems. 
                I thrive on optimizing deployment pipelines and ensuring high availability.
              </span>
            </p>
            
            <p>
              <span className="text-primary">{'>'}</span>{' '}
              <span className="text-muted-foreground">
                With experience in managing <span className="text-accent">Kubernetes clusters</span>, 
                implementing <span className="text-accent">Infrastructure as Code</span>, and 
                designing <span className="text-accent">microservices architectures</span>, 
                I help teams ship faster and more reliably.
              </span>
            </p>

            <p>
              <span className="text-primary">{'>'}</span>{' '}
              <span className="text-muted-foreground">
                When I'm not automating infrastructure, 
                you'll find me contributing to open-source projects, writing technical blogs, 
                or exploring the latest in cloud-native technologies.
              </span>
            </p>
          </>
        );
      case 'security':
        return (
          <>
            <p>
              <span className="text-primary">{'>'}</span>{' '}
              <span className="text-muted-foreground">
                Hello! I'm a dedicated <span className="text-primary">Security Professional</span> with 
                expertise in ethical hacking, vulnerability assessment, and building secure systems. 
                I thrive on finding security flaws before malicious actors do.
              </span>
            </p>
            
            <p>
              <span className="text-primary">{'>'}</span>{' '}
              <span className="text-muted-foreground">
                With experience in <span className="text-accent">penetration testing</span>, 
                implementing <span className="text-accent">security controls</span>, and 
                conducting <span className="text-accent">security audits</span>, 
                I help organizations protect their critical assets.
              </span>
            </p>

            <p>
              <span className="text-primary">{'>'}</span>{' '}
              <span className="text-muted-foreground">
                When I'm not hunting vulnerabilities, 
                you'll find me contributing to open-source projects, writing technical blogs, 
                or exploring the latest in cybersecurity research.
              </span>
            </p>
          </>
        );
      case 'pirate':
        return (
          <>
            <p>
              <span className="text-primary">{'>'}</span>{' '}
              <span className="text-muted-foreground">
                Ahoy! I'm a <span className="text-primary">Tech Pirate</span> sailing through 
                the vast ocean of technology! Just like Luffy searching for the One Piece, 
                I'm on an adventure to discover amazing tech treasures.
              </span>
            </p>
            
            <p>
              <span className="text-primary">{'>'}</span>{' '}
              <span className="text-muted-foreground">
                I travel through <span className="text-accent">different companies</span> like 
                islands in the Grand Line, each one teaching me new skills and 
                <span className="text-accent"> expanding my crew</span> of technologies.
              </span>
            </p>

            <p>
              <span className="text-primary">{'>'}</span>{' '}
              <span className="text-muted-foreground">
                My personal projects are my <span className="text-accent">treasure map</span> - 
                each one leads to new discoveries, new friendships, and endless adventure!
                The journey is the real treasure! 🏴‍☠️
              </span>
            </p>
          </>
        );
    }
  };

  const getSectionHeader = () => {
    switch (mode) {
      case 'devops': return '$ whoami';
      case 'security': return '$ id';
      case 'pirate': return '$ captain --info';
    }
  };

  const getTechStackLabel = () => {
    switch (mode) {
      case 'devops': return '< Tech Stack />';
      case 'security': return '< Security Arsenal />';
      case 'pirate': return '< Adventure Gear />';
    }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary/60 font-mono text-sm">
              {'// SECTION: ABOUT'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold neon-glow">
            {getSectionHeader()}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content / Terminal */}
          <div className="space-y-6">
            {terminalState === 'closed' ? (
              /* Closed state - skills pop out */
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-display font-semibold text-primary terminal-text">
                    {mode === 'pirate' ? 'Treasures Revealed!' : 'Skills Unleashed!'}
                  </h3>
                  <button
                    onClick={() => setTerminalState('normal')}
                    className="px-3 py-1 bg-primary/10 border border-primary/30 rounded text-primary text-sm font-mono hover:bg-primary/20 transition-colors flex items-center gap-2"
                  >
                    <Terminal className="w-4 h-4" />
                    Reopen Terminal
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 animate-fade-in">
                  {skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-3 p-3 bg-card border border-primary/20 rounded hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 card-zoom animate-scale-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <skill.icon className="w-5 h-5 text-primary group-hover:animate-pulse" />
                      <span className="font-mono text-sm text-foreground/80 group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Terminal window */
              <div 
                className={`bg-card border border-primary/30 rounded neon-border transition-all duration-300 ${
                  terminalState === 'maximized' ? 'fixed inset-4 z-50' : ''
                } ${terminalState === 'minimized' ? 'h-10 overflow-hidden' : 'p-6'}`}
              >
                {/* Window controls */}
                <div className={`flex items-center gap-2 ${terminalState === 'minimized' ? 'p-2' : 'mb-4'} text-primary/60 font-mono text-sm`}>
                  <button
                    onClick={() => setTerminalState('closed')}
                    className="w-3 h-3 rounded-full bg-destructive hover:brightness-110 transition-all cursor-pointer"
                    title="Close"
                  />
                  <button
                    onClick={() => setTerminalState(terminalState === 'minimized' ? 'normal' : 'minimized')}
                    className="w-3 h-3 rounded-full bg-yellow-500 hover:brightness-110 transition-all cursor-pointer"
                    title="Minimize"
                  />
                  <button
                    onClick={() => setTerminalState(terminalState === 'maximized' ? 'normal' : 'maximized')}
                    className="w-3 h-3 rounded-full bg-green-500 hover:brightness-110 transition-all cursor-pointer"
                    title="Maximize"
                  />
                  <span className="ml-2">{mode === 'pirate' ? 'ships-log' : 'terminal'}</span>
                  {terminalState === 'maximized' && (
                    <button
                      onClick={() => setTerminalState('normal')}
                      className="ml-auto text-primary hover:text-primary/80 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                
                {terminalState !== 'minimized' && (
                  <div className="font-mono text-sm leading-relaxed space-y-4">
                    {getTerminalContent()}

                    <div className="pt-2">
                      <span className="text-primary">{'>'}</span>{' '}
                      <span className="text-muted-foreground">_</span>
                      <span className="animate-blink border-r-2 border-primary">&nbsp;</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 text-primary terminal-text">
              {getTechStackLabel()}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group flex items-center gap-3 p-3 bg-card border border-primary/20 rounded hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 card-zoom"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <skill.icon className="w-5 h-5 text-primary group-hover:animate-pulse" />
                  <span className="font-mono text-sm text-foreground/80 group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
