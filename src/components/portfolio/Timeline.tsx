import React from 'react';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights?: string[];
}

const Timeline: React.FC = () => {
  const { mode } = usePortfolio();

  const educationItems: TimelineItem[] = [
    {
      id: 'bachelors',
      title: 'B.E. Computer Science',
      organization: 'Misrimal Navajee Munoth Jain Engineering College',
      location: 'Chennai, India',
      startDate: '2020',
      endDate: '2024',
      description: 'Focused on Computer Science and Engineering fundamentals',
      highlights: ['CGPA: 8.0', 'DevOps & Cloud Computing Focus', 'Linux Systems Administration'],
    },
    {
      id: 'cert-cicd',
      title: 'CI/CD Certification',
      organization: 'Infosys Springboard',
      location: 'Online',
      startDate: '2024',
      endDate: '2024',
      description: 'Professional certification in Continuous Integration and Continuous Deployment',
      highlights: ['Jenkins Pipelines', 'GitHub Actions', 'Docker Hub Integration'],
    },
    {
      id: 'cert-devops',
      title: 'DevOps Certification',
      organization: 'GUVI',
      location: 'Online',
      startDate: '2024',
      endDate: '2024',
      description: 'Comprehensive DevOps practices and tools certification',
      highlights: ['Cloud Infrastructure', 'Container Orchestration', 'Infrastructure as Code'],
    },
  ];

  const experienceItems: TimelineItem[] = [
    {
      id: 'devops-intern',
      title: mode === 'devops' ? 'DevOps Intern' : 'DevSecOps Intern',
      organization: 'Xenovex Technologies Pvt. Ltd',
      location: 'India',
      startDate: 'June 2025',
      endDate: 'Aug 2025',
      description: mode === 'devops' 
        ? 'Worked on Linux-based CI/CD environments, configuring Jenkins pipelines and managing build agents'
        : 'Integrated security practices into CI/CD pipelines and monitored application security',
      highlights: mode === 'devops'
        ? ['Configured Jenkins pipelines', 'Automated build/deployment with Docker & Bash', 'Troubleshot pipeline failures using Linux logs', 'Monitored with Grafana & Azure']
        : ['Security integration in pipelines', 'Log analysis for security events', 'Azure monitoring services', 'Container security practices'],
    },
  ];

  const educationTitle = mode === 'devops' ? '$ cat /education/history' : '$ cat /training/certifications';
  const experienceTitle = mode === 'devops' ? '$ cat /experience/work' : '$ cat /operations/missions';

  const renderTimelineCard = (item: TimelineItem, Icon: typeof GraduationCap) => (
    <div key={item.id} className="bg-card border border-primary/20 rounded p-5 hover:border-primary/50 transition-all duration-300 group card-zoom">
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div className="p-2 bg-primary/10 rounded">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
            {item.title}
          </h3>
          <p className="text-primary font-mono text-xs">{item.organization}</p>
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-3 mb-3 text-xs font-mono text-muted-foreground">
        <span className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {item.startDate} - {item.endDate}
        </span>
        <span className="flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          {item.location}
        </span>
      </div>

      {/* Description */}
      <p className="text-muted-foreground font-mono text-xs mb-3">
        {item.description}
      </p>

      {/* Highlights */}
      {item.highlights && (
        <ul className="space-y-1">
          {item.highlights.map((highlight, i) => (
            <li key={i} className="flex items-center gap-2 text-xs font-mono text-foreground/70">
              <span className="text-primary">{'>'}</span>
              {highlight}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <section id="timeline" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary/60 font-mono text-sm">
              {`// SECTION: JOURNEY`}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold neon-glow">
            My Journey
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Education */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-display font-semibold text-primary">
                {educationTitle}
              </h3>
              <p className="text-muted-foreground font-mono text-sm mt-2">Education & Training</p>
            </div>
            
            {/* Education Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-primary/30" />
              
              <div className="space-y-6">
                {educationItems.map((item, index) => (
                  <div key={item.id} className="relative pl-12">
                    {/* Timeline Node */}
                    <div className="absolute left-2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background animate-pulse-glow z-10" />
                    {renderTimelineCard(item, GraduationCap)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-display font-semibold text-primary">
                {experienceTitle}
              </h3>
              <p className="text-muted-foreground font-mono text-sm mt-2">Work Experience</p>
            </div>
            
            {/* Experience Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-primary/30" />
              
              <div className="space-y-6">
                {experienceItems.map((item, index) => (
                  <div key={item.id} className="relative pl-12">
                    {/* Timeline Node */}
                    <div className="absolute left-2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background animate-pulse-glow z-10" />
                    {renderTimelineCard(item, Briefcase)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;