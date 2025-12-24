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

interface TimelineProps {
  type: 'education' | 'experience';
}

const Timeline: React.FC<TimelineProps> = ({ type }) => {
  const { mode } = usePortfolio();

  const educationItems: TimelineItem[] = [
    {
      id: 'masters',
      title: 'Master of Science in Computer Science',
      organization: 'Tech University',
      location: 'San Francisco, CA',
      startDate: '2020',
      endDate: '2022',
      description: 'Specialized in Distributed Systems and Cloud Computing',
      highlights: ['GPA: 3.9/4.0', 'Research in Container Orchestration', 'Teaching Assistant for Cloud Computing'],
    },
    {
      id: 'bachelors',
      title: 'Bachelor of Technology in IT',
      organization: 'State Engineering College',
      location: 'Boston, MA',
      startDate: '2016',
      endDate: '2020',
      description: 'Focused on Software Engineering and Network Administration',
      highlights: ['GPA: 3.7/4.0', 'President of Coding Club', 'Hackathon Winner 2019'],
    },
    {
      id: 'high-school',
      title: 'High School Diploma',
      organization: 'Central High School',
      location: 'Chicago, IL',
      startDate: '2014',
      endDate: '2016',
      description: 'Science stream with focus on Mathematics and Computer Science',
      highlights: ['Valedictorian', 'State Science Fair Winner', 'National Merit Scholar'],
    },
  ];

  const experienceItems: TimelineItem[] = [
    {
      id: 'senior-devops',
      title: mode === 'devops' ? 'Senior DevOps Engineer' : 'Senior Security Engineer',
      organization: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      startDate: '2023',
      endDate: 'Present',
      description: mode === 'devops' 
        ? 'Leading DevOps initiatives for a team of 50+ engineers'
        : 'Leading security initiatives for a team of 50+ engineers',
      highlights: mode === 'devops'
        ? ['Reduced deployment time by 70%', 'Implemented GitOps with ArgoCD', 'Managed 100+ microservices']
        : ['Conducted 50+ security assessments', 'Implemented zero-trust architecture', 'Reduced vulnerabilities by 80%'],
    },
    {
      id: 'devops-engineer',
      title: mode === 'devops' ? 'DevOps Engineer' : 'Security Analyst',
      organization: 'CloudSoft Solutions',
      location: 'Seattle, WA',
      startDate: '2022',
      endDate: '2023',
      description: mode === 'devops'
        ? 'Built and maintained CI/CD pipelines and cloud infrastructure'
        : 'Performed security analysis and incident response',
      highlights: mode === 'devops'
        ? ['Migrated 20+ apps to Kubernetes', 'Designed multi-region DR solution', 'Implemented IaC with Terraform']
        : ['Investigated 100+ security incidents', 'Developed security automation', 'Built threat detection rules'],
    },
    {
      id: 'sre-intern',
      title: mode === 'devops' ? 'SRE Intern' : 'Security Intern',
      organization: 'StartupXYZ',
      location: 'Austin, TX',
      startDate: '2021',
      endDate: '2022',
      description: mode === 'devops'
        ? 'Supported site reliability engineering team'
        : 'Supported the security operations team',
      highlights: mode === 'devops'
        ? ['Set up monitoring with Prometheus', 'Wrote automation scripts', 'On-call rotation experience']
        : ['Assisted in penetration testing', 'Analyzed malware samples', 'Created security documentation'],
    },
    {
      id: 'developer-intern',
      title: 'Software Development Intern',
      organization: 'CodeFactory',
      location: 'Remote',
      startDate: '2020',
      endDate: '2021',
      description: 'Developed features for web applications',
      highlights: ['Built RESTful APIs', 'Wrote unit tests', 'Participated in code reviews'],
    },
  ];

  const items = type === 'education' ? educationItems : experienceItems;
  const Icon = type === 'education' ? GraduationCap : Briefcase;
  const sectionId = type === 'education' ? 'education' : 'experience';
  const sectionTitle = type === 'education' 
    ? (mode === 'devops' ? '$ cat /education/history' : '$ cat /training/certifications')
    : (mode === 'devops' ? '$ cat /experience/work' : '$ cat /operations/missions');

  return (
    <section id={sectionId} className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary/60 font-mono text-sm">
              {`// SECTION: ${type.toUpperCase()}`}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold neon-glow">
            {sectionTitle}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 transform md:-translate-x-1/2" />

          {items.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-background animate-pulse-glow z-10" />

              {/* Content Card */}
              <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <div className="bg-card border border-primary/20 rounded p-6 hover:border-primary/50 transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-primary font-mono text-sm">{item.organization}</p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 mb-4 text-xs font-mono text-muted-foreground">
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
                  <p className="text-muted-foreground font-mono text-sm mb-4">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
