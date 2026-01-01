import React, { useState } from 'react';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { Download, FileText, Cloud, Server, Shield, Lock, Bug } from 'lucide-react';

interface ResumeOption {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  filename: string;
}

const ResumeDownload: React.FC = () => {
  const { mode } = usePortfolio();
  const [isExpanded, setIsExpanded] = useState(false);

  const devopsResumes: ResumeOption[] = [
    {
      id: 'devops',
      title: 'DevOps Engineer Resume',
      description: 'Focus on CI/CD, automation, and infrastructure management',
      icon: Server,
      filename: 'Adhavan_JVR_Resume.pdf',
    },
    {
      id: 'cloud',
      title: 'Cloud Engineer Resume',
      description: 'Emphasis on AWS, Azure, and cloud architecture',
      icon: Cloud,
      filename: 'Adhavan_JVR_Resume.pdf',
    },
  ];

  const securityResumes: ResumeOption[] = [
    {
      id: 'devsecops',
      title: 'DevSecOps Engineer Resume',
      description: 'Focus on security integration in DevOps pipelines',
      icon: Shield,
      filename: 'Adhavan_JVR_Resume.pdf',
    },
    {
      id: 'security-analyst',
      title: 'Security Analyst Resume',
      description: 'Highlights security scanning, Trivy, and SonarQube',
      icon: Lock,
      filename: 'Adhavan_JVR_Resume.pdf',
    },
  ];

  const resumes = mode === 'devops' ? devopsResumes : securityResumes;

  const handleDownload = (resume: ResumeOption) => {
    // Download the actual resume file
    const link = document.createElement('a');
    link.href = '/Adhavan_JVR_Resume.pdf';
    link.download = resume.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary/60 font-mono text-sm">
              {'// SECTION: RESUME'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold neon-glow">
            {mode === 'devops' ? '$ wget /resume/download' : '$ curl /credentials/download'}
          </h2>
          <p className="mt-4 text-muted-foreground font-mono text-sm max-w-lg mx-auto">
            Choose the resume that best fits your requirements
          </p>
        </div>

        {/* Resume Selector */}
        <div className="max-w-2xl mx-auto">
          {/* Main Download Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full group flex items-center justify-center gap-4 p-6 bg-card border border-primary/40 rounded-lg hover:border-primary transition-all duration-300 neon-border mb-4"
          >
            <Download className="w-6 h-6 text-primary group-hover:animate-bounce" />
            <span className="font-display text-xl text-primary">
              {isExpanded ? 'Select Resume Type' : 'Download Resume'}
            </span>
          </button>

          {/* Resume Options */}
          <div
            className={`space-y-3 overflow-hidden transition-all duration-500 ${
              isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {resumes.map((resume, index) => (
              <button
                key={resume.id}
                onClick={() => handleDownload(resume)}
                className="w-full group flex items-center gap-4 p-5 bg-card border border-primary/20 rounded hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 bg-primary/10 rounded group-hover:bg-primary/20 transition-colors">
                  <resume.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {resume.title}
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    {resume.description}
                  </p>
                </div>
                <Download className="w-5 h-5 text-primary/50 group-hover:text-primary transition-colors" />
              </button>
            ))}
          </div>

          {/* Terminal-style note */}
          <div className="mt-8 p-4 bg-card/50 border border-primary/10 rounded font-mono text-xs text-muted-foreground">
            <span className="text-primary">$</span> echo "All resumes are available in PDF format"
            <br />
            <span className="text-primary">$</span> echo "Click to download your preferred version"
            <br />
            <span className="text-primary">$</span> _<span className="animate-blink border-r border-primary">&nbsp;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeDownload;
