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
      id: 'aws-deployment',
      title: 'Application Deployment on AWS',
      description: 'Linux-based AWS EC2 deployment with CI/CD automation',
      longDescription: 'Provisioned and managed Linux-based AWS EC2 instances for application hosting. Automated application deployment using Bash scripts and Docker containers. Built Jenkins CI/CD pipelines to build images, push to Docker Hub, and deploy on EC2. Configured CloudWatch and SNS alerts for health monitoring and downtime notifications.',
      techStack: ['Linux', 'Bash', 'Docker', 'Jenkins', 'AWS', 'CloudWatch'],
      githubUrl: 'https://github.com',
    },
    {
      id: 'cicd-pipeline',
      title: 'CI/CD DevOps Pipeline Project',
      description: 'End-to-end CI/CD pipeline with security scanning',
      longDescription: 'Designed and implemented an end-to-end CI/CD pipeline on Linux-based infrastructure. Automated pipeline stages using Bash scripts and Linux command-line tools. Provisioned CI/CD infrastructure and Kubernetes resources using Terraform (IaC). Integrated security scanning (Trivy), code quality checks (SonarQube), and artifact management (Nexus). Monitored Jenkins and Kubernetes clusters using Prometheus and Grafana.',
      techStack: ['Linux', 'Bash', 'Terraform', 'Jenkins', 'Kubernetes', 'AWS', 'Trivy', 'SonarQube'],
      githubUrl: 'https://github.com/Adhavan07/ci-cd-devops-pipeline',
    },
    {
      id: 'mlops-project',
      title: 'MLOps: Diabetes Prediction Model',
      description: 'ML pipeline with Docker and Kubernetes deployment',
      longDescription: 'Built and trained a Random Forest model in Python and exposed predictions via FastAPI. Containerized the application using Docker and deployed on Kubernetes with multiple replicas. Automated ML workflow from data ingestion to deployment using Git-based pipelines.',
      techStack: ['Python', 'Scikit-learn', 'Docker', 'Kubernetes', 'FastAPI'],
      githubUrl: 'https://github.com',
    },
    {
      id: 'monitoring-stack',
      title: 'Infrastructure Monitoring Stack',
      description: 'Full-stack monitoring with Prometheus & Grafana',
      longDescription: 'Designed and implemented a complete observability solution for monitoring application performance and logs. Custom Grafana dashboards provide real-time insights into system health and performance. Integrated with CloudWatch and Azure monitoring services.',
      techStack: ['Prometheus', 'Grafana', 'CloudWatch', 'Azure Monitor', 'Docker'],
      githubUrl: 'https://github.com',
    },
    {
      id: 'Kubernetes-fastapi',
      title: 'DevOps Python FastAPI on Kubernetes',
      description: 'This project demonstrates an end-to-end DevOps workflow for deploying a Python FastAPI application using Docker, Kubernetes, Helm, and GitHub Actions.',
      longDescription: 'The goal of this project is to showcase real-world DevOps practices, including containerization, orchestration, Helm-based deployments, and CI automation.',
      techStack: ['Python','Docker' ,'Kubernetes' ,'Helm' , 'Linux', 'Bash'],
      githubUrl: 'https://github.com/Adhavan07/devops-python-k8s-project',
    }
  ];

  const securityProjects: Project[] = [
    {
      id: 'devsecops-pipeline',
      title: 'DevSecOps Pipeline Integration',
      description: 'Security-first CI/CD pipeline with vulnerability scanning',
      longDescription: 'Integrated security scanning directly into CI/CD pipelines using Trivy for container vulnerability assessment. Implemented SonarQube for code quality and security checks. Ensured all artifacts pass security gates before deployment to production.',
      techStack: ['Trivy', 'SonarQube', 'Jenkins', 'Docker', 'Kubernetes'],
      githubUrl: 'https://github.com',
    },
    {
      id: 'container-security',
      title: 'Container Security Framework',
      description: 'Secure container images and runtime protection',
      longDescription: 'Built a framework for securing Docker containers from build to runtime. Implemented image scanning, runtime security policies, and automated remediation workflows. Integrated with Nexus for secure artifact management.',
      techStack: ['Docker', 'Trivy', 'Nexus', 'Linux', 'Bash'],
      githubUrl: 'https://github.com',
    },
    {
      id: 'log-analysis',
      title: 'Security Log Analysis System',
      description: 'Linux log analysis for threat detection',
      longDescription: 'Developed automated log analysis using Linux command-line tools. Troubleshot pipeline failures and security incidents using centralized logging. Integrated with Grafana for visualization and alerting.',
      techStack: ['Linux', 'Bash', 'Grafana', 'CloudWatch', 'Azure Monitor'],
      githubUrl: 'https://github.com',
    },
    {
      id: 'secure-infra',
      title: 'Secure Infrastructure as Code',
      description: 'Security-hardened Terraform modules',
      longDescription: 'Created security-hardened Terraform modules for AWS infrastructure. Implemented least-privilege IAM policies, VPC security groups, and encryption at rest. Automated compliance checks and security audits.',
      techStack: ['Terraform', 'AWS', 'Linux', 'Security Groups', 'IAM'],
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
