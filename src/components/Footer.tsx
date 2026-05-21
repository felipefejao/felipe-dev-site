import { Code2, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-neutral-600 text-sm">
          <Code2 size={16} className="text-primary-600" />
          <span className="font-mono">fsilva.dev</span>
        </div>

        <p className="text-neutral-600 text-sm flex items-center gap-1.5">
          {t('footer.built_with')}{' '}
          <Heart size={12} className="text-red-500 inline" />
          {' '}{t('footer.by')} Felipe Silva &copy; {year}
        </p>

        <nav className="flex gap-4">
          {[
            { href: '#about', label: t('footer.links.about') },
            { href: '#skills', label: t('footer.links.skills') },
            { href: '#experience', label: t('footer.links.experience') },
            { href: '#portfolio', label: t('footer.links.portfolio') },
            { href: '#contact', label: t('footer.links.contact') },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-neutral-600 hover:text-neutral-400 text-xs font-mono transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
