import { useInView } from '../hooks/useInView';
import { Mail, Phone, MapPin, Linkedin, Globe, Github, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Contact() {
  const { ref, inView } = useInView();
  const { t } = useTranslation();

  const contactItems = [
    {
      icon: Mail,
      label: t('contact.labels.Email'),
      value: 'fsilva.web@gmail.com',
      href: 'mailto:fsilva.web@gmail.com',
    },
    {
      icon: Phone,
      label: t('contact.labels.Phone'),
      value: '+55 11 98688-7658',
      href: 'tel:+5511986887658',
    },
    {
      icon: MapPin,
      label: t('contact.labels.Location'),
      value: t('contact.values.Location'),
      href: null,
    },
    {
      icon: Linkedin,
      label: t('contact.labels.LinkedIn'),
      value: 'linkedin.com/in/felipesilvasp',
      href: 'https://linkedin.com/in/felipesilvasp',
    },
    {
      icon: Globe,
      label: t('contact.labels.Website'),
      value: 'dev7.com.br',
      href: 'https://dev7.com.br',
    },
    {
      icon: Github,
      label: t('contact.labels.GitHub'),
      value: 'github.com/felipefejao',
      href: 'https://github.com/felipefejao',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-neutral-900">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionLabel>{t('contact.label')}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('contact.title_start')}<span className="text-primary-400">{t('contact.title_highlight')}</span>
          </h2>
          <p className="text-neutral-400 mb-12 max-w-xl">
            {t('contact.description')}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact info */}
            <div className="space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div
                    className={`flex items-center gap-4 p-4 rounded-xl bg-neutral-950 border border-neutral-800 transition-all duration-200 group ${
                      item.href
                        ? 'hover:border-primary-800/60 cursor-pointer hover:-translate-y-0.5'
                        : ''
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-950 border border-primary-900 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-primary-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-neutral-500 text-xs mb-0.5">{item.label}</p>
                      <p className="text-neutral-200 text-sm font-medium truncate">{item.value}</p>
                    </div>
                    {item.href && (
                      <ArrowUpRight
                        size={14}
                        className="text-neutral-600 group-hover:text-primary-400 transition-colors duration-200 flex-shrink-0"
                      />
                    )}
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            {/* CTA card */}
            <div className="flex flex-col justify-between p-8 rounded-xl bg-gradient-to-br from-primary-950 via-neutral-950 to-neutral-900 border border-primary-900">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-600/20 border border-primary-700 flex items-center justify-center mb-6">
                  <Mail size={20} className="text-primary-400" />
                </div>
                <h3 className="text-white text-xl font-bold mb-3">{t('contact.cta_card.title')}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                  {t('contact.cta_card.description')}
                </p>
              </div>
              <a
                href="mailto:fsilva.web@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary-600/30 hover:-translate-y-0.5"
              >
                <Mail size={16} />
                {t('contact.cta_card.button')}
              </a>
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
