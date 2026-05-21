import { useInView } from '../hooks/useInView';
import { MapPin, Calendar } from 'lucide-react';

export function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 bg-neutral-950">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionLabel>About</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Building software that{' '}
            <span className="text-primary-400">scales</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                Senior Software Engineer with <strong className="text-white">13+ years</strong> of
                experience designing, modernizing, and scaling business-critical systems for
                fintechs, marketplaces, loyalty platforms, logistics, and healthtech companies.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Strong expertise in backend architecture, legacy modernization, microservices, cloud
                environments, and enterprise integrations. Proven track record working on
                high-traffic applications and scalable SaaS platforms focused on performance,
                maintainability, and long-term reliability.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Experienced in driving architectural improvements, reducing technical debt, improving
                engineering quality, and supporting mission-critical systems used by thousands of
                users and enterprise clients.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 text-neutral-400 text-sm">
                  <MapPin size={16} className="text-primary-500" />
                  São Paulo, Brazil
                </div>
                <div className="flex items-center gap-2 text-neutral-400 text-sm">
                  <Calendar size={16} className="text-primary-500" />
                  13+ years experience
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '13+', label: 'Years of experience' },
                { value: '5+', label: 'Industries served' },
                { value: '5K+', label: 'Client migrations supported' },
                { value: 'M+', label: 'Monthly users reached' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-primary-800 transition-colors duration-300"
                >
                  <div className="text-3xl font-bold text-primary-400 mb-1">{stat.value}</div>
                  <div className="text-neutral-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-8 h-px bg-primary-500" />
      <span className="text-primary-500 text-sm font-mono uppercase tracking-widest">{children}</span>
    </div>
  );
}
