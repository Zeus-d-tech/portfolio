import { Globe, RefreshCw } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';

interface MaintenancePlanSectionProps {
  profile: PortfolioProfile;
}

export function MaintenancePlanSection({ profile }: MaintenancePlanSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Deployment & Domain Architecture */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-emerald-700 mb-2">
              04. Deployment &amp; Maintenance Plan
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance mb-4">
              Built for continuous updates, accessibility, and reliable hosting.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              A personal portfolio is a living engineering document. Below is the structured hosting configuration and ongoing maintenance roadmap keeping this site accurate across semesters.
            </p>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-emerald-700 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Hosting &amp; Domain Setup</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-1">
                    Bundled via Vite with zero-runtime bloat, HTTPS edge delivery, semantic HTML5 landmarks, OpenGraph social cards, and Schema.org structured metadata.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-start gap-3">
                <RefreshCw className="w-5 h-5 text-emerald-700 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Cross-Browser Compatibility</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-1">
                    Verified across modern Chromium, Firefox, Edge, and Safari viewports with fluid CSS Grid, Flexbox, and reduced-motion accessibility support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Scheduled Update Cadence */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {profile.maintenancePlan.map((item, idx) => (
              <article
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-semibold text-slate-400 tabular-nums">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700">{item.cadence}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>

                <p className="mt-5 pt-4 border-t border-slate-100 text-xs font-medium text-slate-500">
                  Target: {item.deliverable}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
