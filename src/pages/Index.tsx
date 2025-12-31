import { PortfolioProvider } from '@/contexts/PortfolioContext';
import Hero from '@/components/portfolio/Hero';
import Contact from '@/components/portfolio/Contact';
import FloatingActionButton from '@/components/portfolio/FloatingActionButton';
import GlitchTransition from '@/components/portfolio/GlitchTransition';

const Index = () => {
  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <GlitchTransition />
        <Hero />
        <Contact />
        <FloatingActionButton />
      </div>
    </PortfolioProvider>
  );
};

export default Index;
