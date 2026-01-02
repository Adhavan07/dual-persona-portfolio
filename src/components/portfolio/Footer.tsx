import React from 'react';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { Github, Linkedin, Twitter, Mail, Terminal, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  const { mode } = usePortfolio();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
  ];

  return (
    <footer className="py-12 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-primary font-display">
            {mode === 'devops' ? (
              <Terminal className="w-5 h-5" />
            ) : (
              <Shield className="w-5 h-5" />
            )}
            <span className="terminal-text">
              {mode === 'devops' ? '<DevOps/>' : '<SecOps/>'}
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">$</span> echo "© 2024 Adhavan.J.V.R. All rights reserved."
          </div>
        </div>

        {/* ASCII Art or terminal prompt */}
        <div className="mt-8 text-center font-mono text-xs text-primary/30">
          <pre className="inline-block">
{`
  _____             ____            
 |  __ \\           / __ \\           
 | |  | | _____   | |  | |_ __  ___ 
 | |  | |/ _ \\ \\ / /| |  | | '_ \\/ __|
 | |__| |  __/\\ V / | |__| | |_) \\__ \\
 |_____/ \\___| \\_/   \\____/| .__/|___/
                           | |        
                           |_|        
`}
          </pre>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
