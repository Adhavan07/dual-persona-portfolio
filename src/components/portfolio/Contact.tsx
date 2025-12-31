import React, { useState } from 'react';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { Mail, Send, User, MessageSquare, Terminal, Shield, Anchor, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { mode } = usePortfolio();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: mode === 'pirate' ? "Message in a bottle sent! 🏴‍☠️" : "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const getIcon = () => {
    if (mode === 'security') return <Shield className="w-6 h-6" />;
    if (mode === 'pirate') return <Anchor className="w-6 h-6" />;
    return <Terminal className="w-6 h-6" />;
  };

  const getTitle = () => {
    if (mode === 'security') return '$ secure-channel --connect';
    if (mode === 'pirate') return '$ send-pigeon --message';
    return '$ contact --init';
  };

  const getSubtitle = () => {
    if (mode === 'security') return 'Establish a secure connection';
    if (mode === 'pirate') return 'Send a message across the seas';
    return 'Let\'s build something together';
  };

  const getButtonText = () => {
    if (isSubmitting) return 'Sending...';
    if (mode === 'security') return 'Encrypt & Send';
    if (mode === 'pirate') return 'Launch Message';
    return 'Send Message';
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-primary">{getIcon()}</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary terminal-text">
              {getTitle()}
            </h2>
          </div>
          <p className="text-muted-foreground font-mono">{getSubtitle()}</p>
        </div>

        {/* Contact Form */}
        <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 md:p-8">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-primary/20">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="font-mono text-xs text-muted-foreground ml-2">
              {mode === 'pirate' ? 'message-in-bottle.sh' : 'contact-form.sh'}
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-mono text-foreground/80">
                  <User className="w-4 h-4 text-primary" />
                  <span className="text-primary">$</span> name
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={mode === 'pirate' ? "Captain's name..." : "Your name..."}
                  required
                  className="bg-background/50 border-primary/30 focus:border-primary font-mono"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-mono text-foreground/80">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-primary">$</span> email
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={mode === 'pirate' ? "pirate@seas.com" : "your@email.com"}
                  required
                  className="bg-background/50 border-primary/30 focus:border-primary font-mono"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-mono text-foreground/80">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="text-primary">$</span> message
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={mode === 'pirate' ? "Ahoy! Your message here..." : "Your message..."}
                required
                rows={5}
                className="bg-background/50 border-primary/30 focus:border-primary font-mono resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-8 font-mono"
            >
              <Send className="w-4 h-4 mr-2" />
              {getButtonText()}
            </Button>
          </form>
        </div>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <p className="text-sm font-mono text-muted-foreground mb-4">
            <span className="text-primary">$</span> find-me --social
          </p>
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200 border border-transparent hover:border-primary/30"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-16 text-center font-mono text-xs text-muted-foreground">
          <span className="text-primary">$</span> echo "© 2024 John Doe. All rights reserved."
        </div>
      </div>
    </section>
  );
};

export default Contact;
