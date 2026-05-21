import { useState, useEffect } from 'react';
import { Menu, X, Code2, Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  const navLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#portfolio', label: t('nav.portfolio') },
    { href: '#education', label: t('nav.education') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'pt-BR' : 'en';
    i18n.changeLanguage(nextLang);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800/60 shadow-xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 text-white font-bold text-lg hover:text-primary-400 transition-colors duration-200"
        >
          <Code2 size={20} className="text-primary-500" />
          <span className="font-mono text-sm">fsilva.dev</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  active === link.href.slice(1)
                    ? 'text-primary-400 bg-primary-950'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="ml-2 mr-2">
            <button
              onClick={toggleLanguage}
              className="p-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800/50 transition-all duration-200 flex items-center gap-1.5"
              title={i18n.language === 'en' ? 'Português' : 'English'}
            >
              <Languages size={18} />
              <span className="text-xs font-bold uppercase">{i18n.language.split('-')[0]}</span>
            </button>
          </li>
          <li>
            <a
              href="#contact"
              className="px-4 py-1.5 rounded-md text-sm font-medium bg-primary-600 hover:bg-primary-500 text-white transition-colors duration-200"
            >
              {t('nav.hire_me')}
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLanguage}
            className="p-2 text-neutral-400 hover:text-white transition-colors duration-200"
            aria-label="Toggle language"
          >
            <Languages size={20} />
          </button>
          <button
            className="p-2 text-neutral-400 hover:text-white transition-colors duration-200"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-neutral-950/98 backdrop-blur-md border-b border-neutral-800 px-6 py-4">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    active === link.href.slice(1)
                      ? 'text-primary-400 bg-primary-950'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium bg-primary-600 hover:bg-primary-500 text-white transition-colors duration-200 text-center"
              >
                {t('nav.hire_me')}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
