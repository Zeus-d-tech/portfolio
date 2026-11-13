import { ArrowRight, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';
import { PortfolioProfile } from '../types/portfolio';

interface HeroSectionProps {
  profile: PortfolioProfile;
  onOpenCustomizer: () => void;
}

export function HeroSection({ profile, onOpenCustomizer }: HeroSectionProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-sm font-medium text-emerald-700 tracking-normal mb-4">
              {profile.institution}
              <span className="mx-2 text-slate-300" aria-hidden="true">
                ·
              </span>
              <span className="text-slate-600">{profile.programAndSection}</span>
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-slate-900 tracking-tight leading-[1.1] text-balance mb-6">
              {profile.tagline}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              {profile.heroIntro}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-700"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={onOpenCustomizer}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-700"
              >
                <SlidersHorizontal className="w-4 h-4" aria-hidden="true" />
                <span>Personalize Details</span>
              </button>
            </div>
          </div>

          {/* Right Column: Matching-Height Visual Showcase */}
          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center min-h-[340px] lg:min-h-[460px]">
              {!imageError ? (
                <img
                  src="/images/hero-showcase.svg"
                  alt={`Architectural portfolio showcase and developer monogram for ${profile.fullName}`}
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="p-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-slate-900 text-white flex items-center justify-center font-display text-2xl font-bold">
                    {profile.initials}
                  </div>
                  <p className="text-base font-semibold text-slate-900">{profile.fullName}</p>
                  <p className="text-sm text-slate-500 mt-1">{profile.department}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Summary Strip Below Split */}
        <div className="mt-14 pt-10 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <p className="text-xs font-medium text-slate-500 mb-1.5">Student &amp; Section</p>
            <p className="text-lg font-semibold text-slate-900">{profile.fullName}</p>
            <p className="text-sm text-slate-600 font-mono tabular-nums mt-0.5">
              {profile.programAndSection}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-500 mb-1.5">Academic Course</p>
            <p className="text-lg font-semibold text-slate-900">DCIT 26</p>
            <p className="text-sm text-slate-600 mt-0.5">Application Dev’t &amp; Emerging Tech</p>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-500 mb-1.5">Featured Builds</p>
            <p className="text-2xl font-bold text-slate-900 font-mono tabular-nums">
              {String(profile.projects.length).padStart(2, '0')}
            </p>
            <p className="text-sm text-slate-600 mt-0.5">Documented case studies</p>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-500 mb-1.5">Verified Credentials</p>
            <p className="text-2xl font-bold text-emerald-700 font-mono tabular-nums">
              {String(profile.certificates.length).padStart(2, '0')}
            </p>
            <p className="text-sm text-slate-600 mt-0.5">Completed certifications</p>
          </div>
        </div>
      </div>
    </section>
  );
}
