import { useInView } from '../hooks/useInView';
import { Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  highlights: string[];
  tags: string[];
}

export function Experience() {
  const { ref, inView } = useInView();
  const { t } = useTranslation();

  const experiences = t('experience.items', { returnObjects: true }) as ExperienceItem[];

  return (
    <section id="experience" className="py-24 bg-neutral-950">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionLabel>{t('experience.label')}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            {t('experience.title_start')}<span className="text-primary-400">{t('experience.title_highlight')}</span>
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

function ExperienceCard({ exp, index }: { exp: ExperienceItem; index: number }) {
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
