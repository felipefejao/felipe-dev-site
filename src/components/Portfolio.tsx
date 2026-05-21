import { useInView } from '../hooks/useInView';
import { ExternalLink, Github, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import debtoHome from '../img/debto-home.png';

interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo: string;
  featured: boolean;
}

export function Portfolio() {
  const { ref, inView } = useInView();
  const { t } = useTranslation();

  const projects = t('portfolio.items', { returnObjects: true }) as ProjectItem[];

  return (
    <section id="portfolio" className="py-24 bg-neutral-900">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionLabel>{t('portfolio.label')}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('portfolio.title_start')}<span className="text-primary-400">{t('portfolio.title_highlight')}</span>
          </h2>
          <p className="text-neutral-500 mb-12 max-w-xl">
            {t('portfolio.description')}
          </p>

          {/* Featured project */}
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <FeaturedCard key={project.title} project={project} />
            ))}

          {/* Grid projects */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ project }: { project: ProjectItem }) {
  const { t } = useTranslation();
  const imageSrc = project.image === 'img/debto-home.png' ? debtoHome : project.image;
  
  return (
    <div className="mb-6 rounded-xl overflow-hidden border border-neutral-800 hover:border-primary-800/60 transition-colors duration-300 group bg-neutral-950">
      <div className="grid md:grid-cols-2">
        <div className="relative h-56 md:h-auto overflow-hidden">
          <img
            src={imageSrc}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-neutral-950/60" />
          <div className="absolute top-4 left-4">
            <span className="px-2.5 py-1 rounded text-xs font-mono bg-primary-600 text-white">
              {t('portfolio.featured_label')}
            </span>
          </div>
        </div>
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-white text-xl font-bold mb-3 group-hover:text-primary-300 transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-5">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-mono text-primary-400 bg-primary-950 border border-primary-900"
                >
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href={project.github}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 text-sm transition-colors duration-200"
            >
              <Github size={14} />
              {t('portfolio.code_link')}
            </a>
            <a
              href={project.demo}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-sm transition-colors duration-200"
            >
              <ExternalLink size={14} />
              {t('portfolio.demo_link')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const { ref, inView } = useInView();
  const { t } = useTranslation();
  const imageSrc = project.image === 'img/debto-home.png' ? debtoHome : project.image;

  return (
    <div
      ref={ref}
      className={`rounded-xl overflow-hidden border border-neutral-800 hover:border-primary-800/60 transition-all duration-300 group bg-neutral-950 flex flex-col ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={imageSrc}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-white font-bold mb-2 group-hover:text-primary-300 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-neutral-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-xs font-mono text-neutral-500 bg-neutral-800 border border-neutral-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={project.github}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-500 text-xs transition-colors duration-200"
          >
            <Github size={12} />
            {t('portfolio.code_link')}
          </a>
          <a
            href={project.demo}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-primary-600 hover:bg-primary-500 text-white text-xs transition-colors duration-200"
          >
            <ExternalLink size={12} />
            {t('portfolio.demo_link')}
          </a>
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
