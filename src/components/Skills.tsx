import { useInView } from '../hooks/useInView';
import { useTranslation } from 'react-i18next';

export function Skills() {
  const { ref, inView } = useInView();
  const { t } = useTranslation();

  const skillGroups = [
    {
      category: t('skills.categories.backend'),
      color: 'primary',
      skills: ['PHP', 'Laravel', 'Symfony', 'Zend Framework', 'REST APIs', 'Microservices', 'SOLID', 'Clean Architecture', 'SaaS Platforms'],
    },
    {
      category: t('skills.categories.frontend'),
      color: 'accent',
      skills: ['React', 'Vue.js', 'JavaScript', 'TypeScript', 'HTML/CSS'],
    },
    {
      category: t('skills.categories.cloud'),
      color: 'success',
      skills: ['AWS', 'Docker', 'CI/CD', 'Production Environments'],
    },
    {
      category: t('skills.categories.databases'),
      color: 'warning',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server', 'Oracle'],
    },
    {
      category: t('skills.categories.practices'),
      color: 'primary',
      skills: ['PHPUnit', 'Code Review', 'Refactoring', 'Legacy Modernization', 'Technical Planning', 'Agile/Scrum'],
    },
  ];

  const colorMap: Record<string, { tag: string; dot: string }> = {
    primary: { tag: 'bg-primary-950 border-primary-800 text-primary-300', dot: 'bg-primary-500' },
    accent: { tag: 'bg-orange-950 border-orange-800 text-orange-300', dot: 'bg-orange-500' },
    success: { tag: 'bg-green-950 border-green-800 text-green-300', dot: 'bg-green-500' },
    warning: { tag: 'bg-yellow-950 border-yellow-800 text-yellow-300', dot: 'bg-yellow-500' },
  };

  return (
    <section id="skills" className="py-24 bg-neutral-900">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionLabel>{t('skills.label')}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            {t('skills.title_start')}<span className="text-primary-400">{t('skills.title_highlight')}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skillGroups.map((group) => {
              const c = colorMap[group.color] ?? colorMap.primary;
              return (
                <div
                  key={group.category}
                  className="p-6 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-colors duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                    <h3 className="text-white font-semibold text-sm uppercase tracking-wide">
                      {group.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${c.tag}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
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
