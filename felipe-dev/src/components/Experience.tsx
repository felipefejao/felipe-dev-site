import { useInView } from '../hooks/useInView';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Rock Encantech',
    period: 'Mar 2025 – Jan 2026',
    highlights: [
      'Led backend initiatives and architectural improvements for a microservices-based loyalty marketplace platform.',
      'Designed and developed scalable integrations and business-critical features focused on loyalty points management and exchange operations.',
      'Worked on scalability, security, and high-availability improvements supporting enterprise-level operations.',
      'Collaborated in technical decision-making and long-term platform evolution.',
    ],
    tags: ['Microservices', 'Loyalty Platform', 'High Availability'],
  },
  {
    title: 'Senior Software Engineer',
    company: 'LL Loyalty',
    period: 'Jun 2024 – Mar 2025',
    highlights: [
      'Developed scalable backend solutions and enterprise integrations for loyalty marketplace platforms.',
      'Participated in MVP technical planning and implementation for fintech-oriented products.',
      'Improved production stability, maintainability, and engineering quality in critical environments.',
      'Worked with microservices architecture focused on scalability and operational efficiency.',
    ],
    tags: ['Fintech', 'MVP', 'Microservices'],
  },
  {
    title: 'Senior Full Stack Developer',
    company: 'Pasquali Solution',
    period: 'Aug 2023 – Jul 2024',
    highlights: [
      'Designed and developed scalable enterprise integrations and backend solutions for strategic clients.',
      'Led modernization efforts in legacy systems improving maintainability and long-term scalability.',
      'Implemented automated tests and engineering best practices using SOLID and Clean Architecture.',
      'Supported critical production environments and resolved high-priority operational issues.',
      'Worked with Laravel, Symfony, React, Vue.js, AWS, MySQL, and PostgreSQL.',
    ],
    tags: ['Laravel', 'Symfony', 'React', 'AWS'],
  },
  {
    title: 'Senior Backend Engineer',
    company: 'Atlas Technologies',
    period: 'Jul 2021 – Apr 2023',
    highlights: [
      'Developed and optimized backend services for a high-traffic marketplace platform handling millions of monthly visits.',
      'Refactored legacy systems improving scalability, maintainability, and engineering quality.',
      'Built integrations and new platform features supporting large-scale marketplace operations.',
      'Collaborated in strategic technical improvements focused on long-term platform reliability and performance.',
      'Main client: Fatal Model.',
    ],
    tags: ['High-Traffic', 'Marketplace', 'Legacy Modernization'],
  },
  {
    title: 'Web Developer',
    company: 'YouSync',
    period: 'Apr 2019 – Jun 2021',
    highlights: [
      'Developed integrations and automation routines for HealthTech enterprise clients.',
      'Delivered business-critical solutions for companies including Petz and Ricoh.',
      'Worked on operational efficiency improvements and scalable management systems.',
    ],
    tags: ['HealthTech', 'Automation', 'Integrations'],
  },
  {
    title: 'Web Developer',
    company: 'Union Softwares',
    period: 'May 2017 – Nov 2019',
    highlights: [
      'Maintained and evolved systems focused on the real estate market.',
      'Supported the migration of more than 5,000 active clients while maintaining platform stability and uninterrupted operations.',
      'Worked on workflow optimization and system modernization initiatives.',
    ],
    tags: ['Real Estate', 'Client Migration', 'System Modernization'],
  },
];

export function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-24 bg-neutral-950">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionLabel>Experience</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Professional <span className="text-primary-400">journey</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 top-2 bottom-2 w-px bg-neutral-800 hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <ExperienceCard key={i} exp={exp} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, index }: { exp: (typeof experiences)[0]; index: number }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`relative md:pl-16 transition-all duration-500 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Timeline dot */}
      <div className="absolute left-2.5 top-5 w-5 h-5 rounded-full bg-neutral-800 border-2 border-primary-600 hidden md:flex items-center justify-center">
        <Briefcase size={10} className="text-primary-400" />
      </div>

      <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-primary-800/50 transition-all duration-300 group">
        <div className="flex flex-wrap justify-between gap-2 mb-3">
          <div>
            <h3 className="text-white font-semibold text-lg group-hover:text-primary-300 transition-colors duration-200">
              {exp.title}
            </h3>
            <p className="text-primary-500 font-medium">{exp.company}</p>
          </div>
          <span className="text-neutral-500 text-sm font-mono self-start whitespace-nowrap">
            {exp.period}
          </span>
        </div>

        <ul className="space-y-1.5 mb-4">
          {exp.highlights.map((h, j) => (
            <li key={j} className="text-neutral-400 text-sm leading-relaxed flex gap-2">
              <span className="text-primary-600 mt-1.5 flex-shrink-0">▸</span>
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded text-xs font-mono text-neutral-500 bg-neutral-800 border border-neutral-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
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
