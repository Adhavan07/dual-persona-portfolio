import React, { useState } from 'react';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { ExternalLink, Github, X, Folder, Anchor } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

const Projects: React.FC = () => {
  const { mode } = usePortfolio();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const devopsProjects: Project[] = [
    {
      id: 'k8s-cluster',
      title: 'K8s Multi-Cluster Manager',
      description: 'Automated multi-cluster Kubernetes management with GitOps',
      longDescription: 'A comprehensive solution for managing multiple Kubernetes clusters across different cloud providers. Features include automated deployments, centralized monitoring, and GitOps-based configuration management using ArgoCD.',
      techStack: ['Kubernetes', 'ArgoCD', 'Terraform', 'Go', 'Prometheus'],
      githubUrl: 'https://github.com',
    },
    {
      id: 'ci-cd-platform',
      title: 'Enterprise CI/CD Platform',
      description: 'Scalable CI/CD platform with self-healing pipelines',
      longDescription: 'Built a custom CI/CD platform that handles thousands of builds daily. Includes features like automatic retry on failures, intelligent caching, and parallel execution optimization.',
      techStack: ['Jenkins', 'Docker', 'Python', 'Redis', 'PostgreSQL'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      id: 'infra-as-code',
      title: 'IaC Template Library',
      description: 'Reusable Terraform modules for cloud infrastructure',
      longDescription: 'A comprehensive library of production-ready Terraform modules for AWS, GCP, and Azure. Includes networking, compute, databases, and security configurations with best practices built-in.',
      techStack: ['Terraform', 'AWS', 'GCP', 'Azure', 'Python'],
      githubUrl: 'https://github.com',
    },
    {
      id: 'monitoring-stack',
      title: 'Observability Stack',
      description: 'Full-stack monitoring with custom dashboards',
      longDescription: 'Designed and implemented a complete observability solution including metrics, logs, and traces. Custom Grafana dashboards provide real-time insights into system health and performance.',
      techStack: ['Prometheus', 'Grafana', 'Loki', 'Jaeger', 'OpenTelemetry'],
      githubUrl: 'https://github.com',
    },
    {
      id: 'cost-optimizer',
      title: 'Cloud Cost Optimizer',
      description: 'ML-powered cloud resource optimization tool',
      longDescription: 'An intelligent tool that analyzes cloud resource usage patterns and provides recommendations for cost optimization. Uses machine learning to predict usage and automatically scale resources.',
      techStack: ['Python', 'TensorFlow', 'AWS', 'Docker', 'FastAPI'],
      githubUrl: 'https://github.com',
    },
    {
      id: 'disaster-recovery',
      title: 'DR Automation Suite',
      description: 'Automated disaster recovery with one-click failover',
      longDescription: 'A disaster recovery solution that enables one-click failover between primary and secondary data centers. Includes automated testing, data replication, and compliance reporting.',
      techStack: ['Ansible', 'Python', 'AWS', 'Vault', 'Consul'],
      githubUrl: 'https://github.com',
    },
  ];

  const securityProjects: Project[] = [
    {
      id: 'vuln-scanner',
      title: 'Custom Vulnerability Scanner',
      description: 'Automated security scanning with ML-based detection',
      longDescription: 'A custom-built vulnerability scanner that uses machine learning to identify potential security issues. Supports multiple protocols and integrates with CI/CD pipelines for shift-left security.',
      techStack: ['Python', 'TensorFlow', 'Nmap', 'Docker', 'PostgreSQL'],
      githubUrl: 'https://github.com',
    },
    {
      id: 'siem-solution',
      title: 'Custom SIEM Dashboard',
      description: 'Real-time security event monitoring and alerting',
      longDescription: 'Built a custom SIEM solution that ingests logs from multiple sources, applies threat intelligence, and provides real-time alerting. Includes custom correlation rules and automated response playbooks.',
      techStack: ['ELK Stack', 'Python', 'Redis', 'Kafka', 'React'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      id: 'ctf-platform',
      title: 'CTF Training Platform',
      description: 'Capture The Flag platform for security training',
      longDescription: 'A comprehensive CTF platform for training security professionals. Includes challenges across web security, cryptography, reverse engineering, and forensics with automated scoring.',
      techStack: ['Python', 'Docker', 'Flask', 'PostgreSQL', 'Redis'],
      githubUrl: 'https://github.com',
    },
    {
      id: 'pentest-toolkit',
      title: 'Penetration Testing Toolkit',
      description: 'Automated pentest tools with reporting',
      longDescription: 'A collection of automated penetration testing tools that streamline the assessment process. Includes automated reconnaissance, vulnerability scanning, and professional report generation.',
      techStack: ['Python', 'Bash', 'Metasploit', 'Burp Suite', 'Nmap'],
      githubUrl: 'https://github.com',
    },
    {
      id: 'threat-intel',
      title: 'Threat Intelligence Platform',
      description: 'Aggregated threat feeds with correlation engine',
      longDescription: 'A platform that aggregates threat intelligence from multiple sources, correlates indicators, and provides actionable insights. Includes STIX/TAXII support and API integration.',
      techStack: ['Python', 'Elasticsearch', 'Neo4j', 'FastAPI', 'React'],
      githubUrl: 'https://github.com',
    },
    {
      id: 'secure-code-analyzer',
      title: 'Secure Code Analyzer',
      description: 'Static analysis tool for security vulnerabilities',
      longDescription: 'A static code analysis tool that identifies security vulnerabilities in source code. Supports multiple languages and integrates with popular IDEs and CI/CD systems.',
      techStack: ['Python', 'AST', 'Docker', 'GraphQL', 'React'],
      githubUrl: 'https://github.com',
    },
  ];

  const pirateProjects: Project[] = [
    {
      id: 'treasure-hunt-game',
      title: 'Treasure Hunt Game',
      description: 'An adventure game inspired by One Piece',
      longDescription: 'A web-based adventure game where players sail across islands, collect treasures, and battle enemies. Built with modern web technologies and featuring anime-inspired graphics and storylines.',
      techStack: ['React', 'Three.js', 'TypeScript', 'Canvas API', 'Node.js'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      id: 'anime-tracker',
      title: 'Anime Watch Tracker',
      description: 'Track your anime journey like a ship log',
      longDescription: 'A personal project to track anime watching progress, rate episodes, and discover new series. Features personalized recommendations and social sharing capabilities.',
      techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind', 'tRPC'],
      githubUrl: 'https://github.com',
    },
    {
      id: 'crew-finder',
      title: 'Developer Crew Finder',
      description: 'Find your nakama for side projects',
      longDescription: 'A platform to connect developers looking for collaborators on side projects. Match based on skills, interests, and availability. Build your dream team!',
      techStack: ['React', 'Firebase', 'TypeScript', 'Tailwind', 'Algolia'],
      githubUrl: 'https://github.com',
    },
    {
      id: 'island-generator',
      title: 'Procedural Island Generator',
      description: 'Generate unique fantasy islands',
      longDescription: 'A creative tool that generates procedural islands with unique terrains, climates, and treasures. Perfect for game developers, writers, and dreamers.',
      techStack: ['TypeScript', 'Canvas', 'WebGL', 'Perlin Noise', 'React'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      id: 'bounty-board',
      title: 'Open Source Bounty Board',
      description: 'Claim bounties on open source issues',
      longDescription: 'A gamified platform that adds bounty rewards to open source issues. Contributors can earn reputation, badges, and recognition for their contributions.',
      techStack: ['Next.js', 'Supabase', 'Stripe', 'GitHub API', 'TypeScript'],
      githubUrl: 'https://github.com',
    },
    {
      id: 'dream-log',
      title: 'Dream Journal App',
      description: 'Log your dreams like a captain logs voyages',
      longDescription: 'A beautiful dream journal application with AI-powered analysis, pattern recognition, and dream interpretation. Track your subconscious adventures!',
      techStack: ['React Native', 'OpenAI', 'SQLite', 'Expo', 'TypeScript'],
      githubUrl: 'https://github.com',
    },
  ];

  const getProjects = () => {
    switch (mode) {
      case 'devops': return devopsProjects;
      case 'security': return securityProjects;
      case 'pirate': return pirateProjects;
    }
  };

  const projects = getProjects();

  const getSectionTitle = () => {
    switch (mode) {
      case 'devops': return '$ ls -la /projects';
      case 'security': return '$ cat /exploits';
      case 'pirate': return '$ cat /treasure-map';
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary/60 font-mono text-sm">
              {mode === 'pirate' ? '// SECTION: TREASURES' : '// SECTION: PROJECTS'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold neon-glow">
            {getSectionTitle()}
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-card border border-primary/20 rounded overflow-hidden hover:border-primary/60 transition-all duration-300 card-zoom"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  {mode === 'pirate' ? (
                    <Anchor className="w-10 h-10 text-primary group-hover:animate-pulse" />
                  ) : (
                    <Folder className="w-10 h-10 text-primary group-hover:animate-pulse" />
                  )}
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground font-mono text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs font-mono rounded card-zoom"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 text-muted-foreground text-xs font-mono">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-card border border-primary/40 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-auto neon-border"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-primary/20">
              <div className="flex items-center gap-2 text-primary/60 font-mono text-sm">
                <span className="w-3 h-3 rounded-full bg-destructive" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2">{selectedProject.title.toLowerCase().replace(/\s/g, '-')}.md</span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-2xl font-display font-bold text-primary mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-mono text-primary mb-3">
                  {mode === 'pirate' ? '< Treasure Components >' : '< Tech Stack >'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-mono rounded border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-mono text-sm rounded border border-primary/30 hover:bg-primary/20 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Source
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-mono text-sm rounded hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {mode === 'pirate' ? 'Explore Treasure' : 'Live Demo'}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
