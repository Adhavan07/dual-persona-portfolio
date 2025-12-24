import { PortfolioProvider } from '@/contexts/PortfolioContext';
import Navigation from '@/components/portfolio/Navigation';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Projects from '@/components/portfolio/Projects';
import Timeline from '@/components/portfolio/Timeline';
import ResumeDownload from '@/components/portfolio/ResumeDownload';
import FloatingActionButton from '@/components/portfolio/FloatingActionButton';
import Footer from '@/components/portfolio/Footer';
import GlitchTransition from '@/components/portfolio/GlitchTransition';

const Index = () => {
  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <GlitchTransition />
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <ResumeDownload />
        <Footer />
        <FloatingActionButton />
      </div>
    </PortfolioProvider>
  );
};

export default Index;
