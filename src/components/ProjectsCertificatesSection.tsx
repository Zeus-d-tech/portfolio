import { ArrowUpRight, Award, ExternalLink, Layers, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CertificateItem, PortfolioProfile, ProjectCategory, ProjectItem } from '../types/portfolio';

interface ProjectsCertificatesSectionProps {
  profile: PortfolioProfile;
}

const PROJECT_CATEGORIES: ProjectCategory[] = ['All', 'Web Apps', 'Emerging Tech', 'UI Systems'];

export function ProjectsCertificatesSection({ profile }: ProjectsCertificatesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [activeCert, setActiveCert] = useState<CertificateItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProject(null);
        setActiveCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const availableCategories: ProjectCategory[] = [
    'All',
    ...PROJECT_CATEGORIES.slice(1).filter((cat) =>
      profile.projects.some((project) => project.category === cat)
    ),
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? profile.projects
      : profile.projects.filter((project) => project.category === selectedCategory);

  const markImageFailed = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <>
      {/* Projects Section */}
      <section id="projects" className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-emerald-700 mb-2">
                02. Featured Project &amp; Case Study
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
                Sustainable engineering built for real-world efficiency.
              </h2>
            </div>

            {/* Interactive Filter Tabs (shown when multiple categories exist) */}
            {availableCategories.length > 2 && (
              <div
                role="tablist"
                aria-label="Filter projects by category"
                className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg self-start md:self-auto"
              >
                {availableCategories.map((category) => {
                  const isActive = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 ${
                        isActive
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Dynamic Bento / Editorial Project Grid */}
          {filteredProjects.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-12 text-center">
              <p className="text-base font-semibold text-slate-900">No projects in this category yet</p>
              <p className="text-sm text-slate-600 mt-1">
                Select another category filter or add a new project via Personalize Details.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => {
                const isLead =
                  index === 0 &&
                  (filteredProjects.length === 1 ||
                    (selectedCategory === 'All' && filteredProjects.length > 2));
                return (
                  <article
                    key={project.id}
                    className={`group rounded-2xl border border-slate-200 bg-slate-50/70 overflow-hidden flex flex-col transition-colors duration-150 hover:border-slate-300 ${
                      isLead ? 'lg:col-span-2 lg:grid lg:grid-cols-12' : ''
                    }`}
                  >
                    {/* Visual Preview Frame */}
                    <div
                      className={`bg-slate-100 border-b lg:border-b-0 ${
                        isLead ? 'lg:col-span-7 lg:border-r border-slate-200' : 'border-b border-slate-200'
                      } aspect-[16/11] overflow-hidden relative`}
                    >
                      {!failedImages[project.id] ? (
                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          referrerPolicy="no-referrer"
                          onError={() => markImageFailed(project.id)}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-slate-100 text-slate-500">
                          <Layers className="w-8 h-8 mb-3 text-emerald-700" aria-hidden="true" />
                          <p className="text-sm font-semibold text-slate-800 text-center">{project.title}</p>
                        </div>
                      )}
                    </div>

                    {/* Content Body */}
                    <div
                      className={`p-6 sm:p-8 flex flex-col justify-between ${
                        isLead ? 'lg:col-span-5' : ''
                      }`}
                    >
                      <div>
                        {/* Unboxed Metadata Line (Zero-Pill Rule) */}
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-slate-500 mb-3">
                          <span className="text-emerald-700 font-semibold">{project.category}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono tabular-nums">{project.year}</span>
                          <span aria-hidden="true">·</span>
                          <span>{project.role}</span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                          {project.title}
                        </h3>

                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
                          {project.summary}
                        </p>

                        {/* Outcome Highlight */}
                        <p className="text-sm text-slate-700 leading-relaxed mb-5 pt-4 border-t border-slate-200">
                          <span className="font-semibold text-slate-900">Outcome: </span>
                          {project.outcome}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                        {/* Unboxed Tech Stack String */}
                        <p className="text-xs font-mono text-slate-500">
                          {project.technologies.join(' · ')}
                        </p>

                        <button
                          type="button"
                          onClick={() => setActiveProject(project)}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 rounded-sm"
                        >
                          <span>Inspect Case Study</span>
                          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold text-emerald-700 mb-2">
              03. Certificates &amp; Verified Credentials
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
              Academic colloquiums and verified technical certifications.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {profile.certificates.map((cert) => (
              <article
                key={cert.id}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden flex flex-col justify-between transition-colors duration-150 hover:border-slate-300"
              >
                <div>
                  <div className="aspect-[16/11] bg-slate-100 border-b border-slate-200 overflow-hidden">
                    {!failedImages[cert.id] ? (
                      <img
                        src={cert.image}
                        alt={cert.imageAlt}
                        referrerPolicy="no-referrer"
                        onError={() => markImageFailed(cert.id)}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-slate-500">
                        <Award className="w-8 h-8 mb-2 text-emerald-700" aria-hidden="true" />
                        <p className="text-sm font-semibold text-slate-800 text-center">{cert.title}</p>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 mb-2">
                      <span className="font-semibold text-emerald-700">{cert.date}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{cert.credentialId}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 mb-3">{cert.issuer}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{cert.summary}</p>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveCert(cert)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 rounded-sm"
                  >
                    <span>View Credential</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Project Case Study Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-white rounded-2xl border border-slate-200 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white/95 backdrop-blur-xs px-6 py-4 border-b border-slate-200 flex items-center justify-between gap-4">
              <div className="text-xs font-medium text-slate-500">
                <span className="text-emerald-700 font-semibold">{activeProject.category}</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">{activeProject.year}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close case study modal"
                className="w-10 h-10 inline-flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50 aspect-[16/10]">
                <img
                  src={activeProject.image}
                  alt={activeProject.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {activeProject.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1">{activeProject.role}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-200">
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 mb-1.5">Problem Statement</h4>
                  <p className="text-sm text-slate-700 leading-relaxed">{activeProject.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 mb-1.5">Technical Solution</h4>
                  <p className="text-sm text-slate-700 leading-relaxed">{activeProject.solution}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 mb-1.5">Measured Outcome</h4>
                  <p className="text-sm text-slate-700 leading-relaxed">{activeProject.outcome}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs font-mono text-slate-600">
                  Stack: {activeProject.technologies.join(' · ')}
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={activeProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Source Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveProject(null)}
                    className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    Done Reading
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Certificate Lightbox Modal */}
      {activeCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between gap-4">
              <p className="text-xs font-mono text-slate-500 tabular-nums">
                Credential ID: {activeCert.credentialId}
              </p>
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                aria-label="Close certificate preview"
                className="w-10 h-10 inline-flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50 aspect-[16/11]">
                <img
                  src={activeCert.image}
                  alt={activeCert.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="text-xs font-semibold text-emerald-700 mb-1">
                  {activeCert.issuer} · {activeCert.date}
                </p>
                <h3 id="cert-modal-title" className="text-xl sm:text-2xl font-bold text-slate-900">
                  {activeCert.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-2">{activeCert.summary}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
