import { PortfolioProvider, usePortfolio } from '@/contexts/PortfolioContext';
import Hero from '@/components/portfolio/Hero';
import Navigation from '@/components/portfolio/Navigation';
import About from '@/components/portfolio/About';
import Projects from '@/components/portfolio/Projects';
import Timeline from '@/components/portfolio/Timeline';
import ResumeDownload from '@/components/portfolio/ResumeDownload';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';
import FloatingActionButton from '@/components/portfolio/FloatingActionButton';
import GlitchTransition from '@/components/portfolio/GlitchTransition';

const PortfolioContent = () => {
  const { mode } = usePortfolio();
  const isPirateMode = mode === 'pirate';

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <GlitchTransition />
      {!isPirateMode && <Navigation />}
      <Hero />
      {!isPirateMode && (
        <>
          <About />
          <Projects />
          <Timeline />
          <ResumeDownload />
        </>
      )}
      <Contact />
      {!isPirateMode && <Footer />}
      <FloatingActionButton />
    </div>
  );
};

const Index = () => {
  return (
    <PortfolioProvider>
      <PortfolioContent />
    </PortfolioProvider>
  );
};

export default Index;
