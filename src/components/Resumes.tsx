import { useInView } from '../hooks/useInView';
import { FileText, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ResumeItem {
  name: string;
  href: string;
  lang: string;
}

export function Resumes() {
  const { ref, inView } = useInView();
  const { t } = useTranslation();

  const resumes = t('resumes.items', { returnObjects: true }) as ResumeItem[];
  return (
    <section id="resumes" className="py-24 bg-neutral-900">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionLabel>{t('resumes.label')}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('resumes.title_start')}<span className="text-primary-400">{t('resumes.title_highlight')}</span>
          </h2>
          <p className="text-neutral-500 mb-12 max-w-xl">
            {t('resumes.description')}
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {resumes.map((resume) => (
              <a
                key={resume.name}
                href={resume.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-primary-800/60 transition-all duration-300 flex items-start gap-4"
              >
                <div className="p-3 rounded-lg bg-primary-950 text-primary-400">
                  <FileText size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-white font-semibold group-hover:text-primary-300 transition-colors duration-200">
                      {resume.name}
                    </h3>
                    <ExternalLink size={16} className="text-neutral-500 group-hover:text-primary-400 transition-colors duration-200" />
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded text-xs font-mono text-primary-400 bg-primary-950 border border-primary-900">
                    {resume.lang}
                  </span>
                </div>
              </a>
            ))}
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
