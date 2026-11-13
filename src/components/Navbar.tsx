import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  fullName: string;
  initials: string;
  activeSection: string;
  githubUrl: string;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'certificates', label: 'Certificates', href: '#certificates' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

function GitHubIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12c0 4.64 3.01 8.58 7.18 9.97.52.1.71-.23.71-.5 0-.25-.01-1.08-.01-1.96-2.92.63-3.54-1.24-3.54-1.24-.48-1.21-1.17-1.54-1.17-1.54-.95-.65.07-.64.07-.64 1.05.08 1.61 1.08 1.61 1.08.94 1.61 2.46 1.14 3.06.87.09-.68.37-1.14.67-1.4-2.33-.27-4.78-1.17-4.78-5.19 0-1.15.41-2.08 1.08-2.82-.11-.26-.47-1.33.1-2.78 0 0 .88-.28 2.89 1.08A10.02 10.02 0 0 1 12 6.6c.89 0 1.79.12 2.63.36 2.01-1.36 2.89-1.08 2.89-1.08.57 1.45.21 2.52.1 2.78.67.74 1.08 1.67 1.08 2.82 0 4.03-2.46 4.92-4.8 5.18.38.33.72.97.72 1.96 0 1.42-.01 2.56-.01 2.91 0 .28.19.61.72.5A10.5 10.5 0 0 0 22.5 12C22.5 6.2 17.8 1.5 12 1.5Z" />
    </svg>
  );
}

export function Navbar({ fullName, initials, activeSection, githubUrl }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Title with custom SVG emblem */}
        <a
          href="#home"
          className="inline-flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 rounded-md"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <rect width="32" height="32" rx="7" fill="#0F172A" />
            <rect x="3" y="3" width="26" height="26" rx="5" stroke="#047857" strokeWidth="1.5" />
            <text
              x="16"
              y="20.5"
              textAnchor="middle"
              fill="#F8FAFC"
              fontSize="12"
              fontWeight="700"
              fontFamily="Outfit, sans-serif"
              letterSpacing="-0.03em"
            >
              {initials.slice(0, 2).toUpperCase()}
            </text>
          </svg>
          <span>{fullName}</span>
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative py-1 text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 rounded-sm ${
                  isActive
                    ? 'text-emerald-700'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 -bottom-0.5 h-0.5 bg-emerald-700 transition-transform duration-150 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Persistent GitHub Repository Link Icon + Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source code repository on GitHub"
            title="GitHub Repository"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors duration-150 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
          >
            <GitHubIcon />
          </a>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-700"
          >
            Get in Touch
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-800'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-1 inline-flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              <GitHubIcon />
              <span>GitHub Repository</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
