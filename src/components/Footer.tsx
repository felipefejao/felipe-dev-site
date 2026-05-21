import { Code2, Heart } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-neutral-600 text-sm">
          <Code2 size={16} className="text-primary-600" />
          <span className="font-mono">fsilva.dev</span>
        </div>

        <p className="text-neutral-600 text-sm flex items-center gap-1.5">
          Built with{' '}
          <Heart size={12} className="text-red-500 inline" />
          {' '}by Felipe Silva &copy; {year}
        </p>

        <nav className="flex gap-4">
          {['#about', '#skills', '#experience', '#portfolio', '#contact'].map((href) => (
            <a
              key={href}
              href={href}
              className="text-neutral-600 hover:text-neutral-400 text-xs font-mono capitalize transition-colors duration-200"
            >
              {href.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
