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
    { name: 'Linux (Ubuntu, Fedora, RHEL)', icon: Terminal },
    { name: 'Bash Scripting', icon: Terminal },
    { name: 'Docker', icon: Container },
    { name: 'Kubernetes', icon: Container },
    { name: 'Jenkins', icon: GitBranch },
    { name: 'GitHub Actions', icon: GitBranch },
    { name: 'AWS', icon: Cloud },
    { name: 'Azure', icon: Cloud },
    { name: 'Terraform', icon: Server },
    { name: 'Ansible', icon: Server },
    { name: 'Prometheus', icon: Database },
    { name: 'Grafana', icon: Database },
  ];

  const securitySkills = [
    { name: 'Trivy (Security Scanning)', icon: Shield },
    { name: 'SonarQube', icon: Bug },
    { name: 'DevSecOps', icon: Lock },
    { name: 'Vulnerability Assessment', icon: Bug },
    { name: 'Container Security', icon: Container },
    { name: 'CloudWatch', icon: Eye },
    { name: 'Nexus Artifact Mgmt', icon: Database },
    { name: 'Git/Gitea', icon: GitBranch },
    { name: 'Pipeline Security', icon: Shield },
    { name: 'Linux Logs Analysis', icon: Terminal },
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
                Hello! I'm <span className="text-primary">Adhavan J.V.R</span>, a DevOps-focused engineer 
                with hands-on experience in <span className="text-accent">Linux systems</span>, 
                <span className="text-accent"> Bash scripting</span>, and command-line automation.
              </span>
            </p>
            
            <p>
              <span className="text-primary">{'>'}</span>{' '}
              <span className="text-muted-foreground">
                Skilled in building and operating <span className="text-accent">CI/CD pipelines</span> using 
                <span className="text-accent"> Jenkins</span>, <span className="text-accent">Docker</span>, 
                <span className="text-accent"> Kubernetes</span>, <span className="text-accent">Terraform</span>, 
                and <span className="text-accent">AWS</span>.
              </span>
            </p>

            <p>
              <span className="text-primary">{'>'}</span>{' '}
              <span className="text-muted-foreground">
                Comfortable working with Linux services, logs, and monitoring tools with 
                <span className="text-accent"> Prometheus</span> and <span className="text-accent">Grafana</span>. 
                Strong self-learning mindset aligned to DevOps roles.
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
                Hello! I'm <span className="text-primary">Adhavan J.V.R</span>, focused on 
                integrating <span className="text-accent">security</span> into DevOps pipelines 
                and building secure-by-design systems.
              </span>
            </p>
            
            <p>
              <span className="text-primary">{'>'}</span>{' '}
              <span className="text-muted-foreground">
                Experience in security scanning with <span className="text-accent">Trivy</span>, 
                code quality checks with <span className="text-accent">SonarQube</span>, and 
                artifact management with <span className="text-accent">Nexus</span>.
              </span>
            </p>

            <p>
              <span className="text-primary">{'>'}</span>{' '}
              <span className="text-muted-foreground">
                Monitoring and troubleshooting using <span className="text-accent">CloudWatch</span>, 
                <span className="text-accent"> Grafana</span>, and Linux log analysis to ensure 
                system health and security compliance.
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
                Ahoy! I'm <span className="text-primary">Captain Adhavan</span> sailing through 
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
