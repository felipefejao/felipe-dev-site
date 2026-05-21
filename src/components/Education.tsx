import { useInView } from '../hooks/useInView';
import { GraduationCap, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: string;
}

interface CertificationItem {
  name: string;
  issuer: string;
}

interface LanguageItem {
  language: string;
  level: string;
  pct: number;
}

export function Education() {
  const { ref, inView } = useInView();
  const { t } = useTranslation();

  const education = t('education.items', { returnObjects: true }) as EducationItem[];
  const certifications = t('education.certifications', { returnObjects: true }) as CertificationItem[];
  const languages = t('education.languages', { returnObjects: true }) as LanguageItem[];

  return (
    <section id="education" className="py-24 bg-neutral-950">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionLabel>{t('education.label')}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            {t('education.title_start')}<span className="text-primary-400">{t('education.title_highlight')}</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap size={18} className="text-primary-500" />
                <h3 className="text-white font-semibold">{t('education.education_title')}</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="p-5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-primary-800/50 transition-colors duration-300"
                  >
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h4 className="text-white font-medium text-sm">{edu.degree}</h4>
                      <span
                        className={`flex-shrink-0 text-xs px-2 py-0.5 rounded-full font-mono ${
                          edu.status === 'In progress' || edu.status === 'Em andamento'
                            ? 'bg-primary-950 text-primary-400 border border-primary-800'
                            : 'bg-neutral-800 text-neutral-500 border border-neutral-700'
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-primary-500 text-sm">{edu.institution}</p>
                    <p className="text-neutral-600 text-xs font-mono mt-1">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award size={18} className="text-primary-500" />
                <h3 className="text-white font-semibold">{t('education.certifications_title')}</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-primary-800/50 transition-colors duration-300 flex gap-3 items-start"
                  >
                    <span className="text-primary-500 mt-0.5 flex-shrink-0">▸</span>
                    <div>
                      <p className="text-neutral-200 text-sm font-medium">{cert.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-primary-500 text-lg">🌐</span>
                <h3 className="text-white font-semibold">{t('education.languages_title')}</h3>
              </div>
              <div className="space-y-5">
                {languages.map((lang) => (
                  <div key={lang.language}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-neutral-200 text-sm font-medium">{lang.language}</span>
                      <span className="text-neutral-500 text-xs">{lang.level}</span>
                    </div>
                    <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full transition-all duration-1000"
                        style={{ width: `${lang.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
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
