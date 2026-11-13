import { PortfolioProfile } from '../types/portfolio';

interface FooterProps {
  profile: PortfolioProfile;
  onOpenCustomizer: () => void;
}

export function Footer({ profile, onOpenCustomizer }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-sm font-bold text-slate-900">
            {profile.fullName}
            <span className="mx-2 text-slate-300" aria-hidden="true">
              ·
            </span>
            <span className="font-mono font-medium text-slate-600 tabular-nums">
              {profile.programAndSection}
            </span>
          </p>
          <p className="text-xs text-slate-500 mt-1">
            {profile.department} · {profile.institution} · {profile.course}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-slate-600">
          <a href="#home" className="hover:text-slate-900 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-slate-900 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-slate-900 transition-colors">
            Projects
          </a>
          <a href="#certificates" className="hover:text-slate-900 transition-colors">
            Certificates
          </a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">
            Contact
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source code repository on GitHub"
            title="GitHub Repository"
            className="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 rounded-sm"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="shrink-0"
            >
              <path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12c0 4.64 3.01 8.58 7.18 9.97.52.1.71-.23.71-.5 0-.25-.01-1.08-.01-1.96-2.92.63-3.54-1.24-3.54-1.24-.48-1.21-1.17-1.54-1.17-1.54-.95-.65.07-.64.07-.64 1.05.08 1.61 1.08 1.61 1.08.94 1.61 2.46 1.14 3.06.87.09-.68.37-1.14.67-1.4-2.33-.27-4.78-1.17-4.78-5.19 0-1.15.41-2.08 1.08-2.82-.11-.26-.47-1.33.1-2.78 0 0 .88-.28 2.89 1.08A10.02 10.02 0 0 1 12 6.6c.89 0 1.79.12 2.63.36 2.01-1.36 2.89-1.08 2.89-1.08.57 1.45.21 2.52.1 2.78.67.74 1.08 1.67 1.08 2.82 0 4.03-2.46 4.92-4.8 5.18.38.33.72.97.72 1.96 0 1.42-.01 2.56-.01 2.91 0 .28.19.61.72.5A10.5 10.5 0 0 0 22.5 12C22.5 6.2 17.8 1.5 12 1.5Z" />
            </svg>
            <span>Source Repo</span>
          </a>
          <button
            type="button"
            onClick={onOpenCustomizer}
            className="text-emerald-700 hover:text-emerald-800 font-semibold transition-colors"
          >
            Personalize Portfolio
          </button>
          <span className="text-slate-400 font-mono tabular-nums">© {year}</span>
        </div>
      </div>
    </footer>
  );
}
