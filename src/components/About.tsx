import { useInView } from '../hooks/useInView';
import { MapPin, Calendar } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export function About() {
  const { ref, inView } = useInView();
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-neutral-950">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionLabel>{t('about.label')}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            {t('about.title_start')}{' '}
            <span className="text-primary-400">{t('about.title_highlight')}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                <Trans i18nKey="about.p1">
                  Senior Software Engineer with <strong className="text-white">13+ years</strong> of
                  experience designing, modernizing, and scaling business-critical systems for
                  fintechs, marketplaces, loyalty platforms, logistics, and healthtech companies.
                </Trans>
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                {t('about.p2')}
              </p>
              <p className="text-neutral-400 leading-relaxed">
                {t('about.p3')}
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 text-neutral-400 text-sm">
                  <MapPin size={16} className="text-primary-500" />
                  {t('about.location')}
                </div>
                <div className="flex items-center gap-2 text-neutral-400 text-sm">
                  <Calendar size={16} className="text-primary-500" />
                  {t('about.experience')}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '13+', label: t('about.stat_years') },
                { value: '5+', label: t('about.stat_industries') },
                { value: '5K+', label: t('about.stat_migrations') },
                { value: 'M+', label: t('about.stat_users') },
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
