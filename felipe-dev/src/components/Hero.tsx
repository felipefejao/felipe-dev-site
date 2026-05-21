import { Github, Linkedin, Mail, Phone, Globe, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(14,165,233,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600 rounded-full blur-[160px] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-950 border border-primary-800 text-primary-300 text-sm font-mono mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-success-500 animate-pulse" />
          Available for new opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight animate-fade-up">
          Felipe{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
            Silva
          </span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-neutral-400 font-light mb-6 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          Senior Software Engineer &amp; Backend Architect
        </p>

        {/* Sub tagline */}
        <p className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
          13+ years building scalable SaaS platforms, microservices, and mission-critical systems
          for fintechs, marketplaces, and enterprise clients.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary-600/30 hover:-translate-y-0.5"
          >
            Get in touch
          </a>
          <a
            href="#portfolio"
            className="px-8 py-3 rounded-lg border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white font-medium transition-all duration-200 hover:-translate-y-0.5"
          >
            View portfolio
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-5 mb-16 animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <a
            href="https://linkedin.com/in/felipesilvasp"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg text-neutral-500 hover:text-primary-400 hover:bg-primary-950 transition-all duration-200"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:fsilva.web@gmail.com"
            className="p-2.5 rounded-lg text-neutral-500 hover:text-primary-400 hover:bg-primary-950 transition-all duration-200"
            title="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="tel:+5511986887658"
            className="p-2.5 rounded-lg text-neutral-500 hover:text-primary-400 hover:bg-primary-950 transition-all duration-200"
            title="Phone"
          >
            <Phone size={20} />
          </a>
          <a
            href="https://dev7.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg text-neutral-500 hover:text-primary-400 hover:bg-primary-950 transition-all duration-200"
            title="Website"
          >
            <Globe size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg text-neutral-500 hover:text-primary-400 hover:bg-primary-950 transition-all duration-200"
            title="GitHub"
          >
            <Github size={20} />
          </a>
        </div>

        {/* Scroll cue */}
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-1 text-neutral-600 hover:text-neutral-400 transition-colors duration-200 animate-bounce"
        >
          <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
          <ChevronDown size={16} />
        </a>
      </div>
    </section>
  );
}
