import { useState } from 'react';
import { PortfolioProfile, SkillCategory } from '../types/portfolio';

interface AboutSectionProps {
  profile: PortfolioProfile;
}

const SKILL_CATEGORIES: SkillCategory[] = ['All', 'Frontend', 'Backend & Data', 'Emerging Tech'];

export function AboutSection({ profile }: AboutSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('All');

  const visibleSkills =
    selectedCategory === 'All'
      ? profile.skills
      : profile.skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="about" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Narrative Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-emerald-700 mb-2">01. About the Developer</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance mb-6">
              {profile.aboutHeadline}
            </h2>

            {/* Clean Academic Identification Block (hairline border, no thick left bar) */}
            <dl className="rounded-xl bg-white border border-slate-200 p-6 space-y-4">
              <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-slate-100">
                <dt className="text-xs font-medium text-slate-500">Full Name</dt>
                <dd className="text-sm font-semibold text-slate-900 text-right">{profile.fullName}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-slate-100">
                <dt className="text-xs font-medium text-slate-500">Program &amp; Section</dt>
                <dd className="text-sm font-semibold text-slate-900 font-mono tabular-nums text-right">
                  {profile.programAndSection}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-slate-100">
                <dt className="text-xs font-medium text-slate-500">Department</dt>
                <dd className="text-sm font-medium text-slate-800 text-right">{profile.department}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-slate-100">
                <dt className="text-xs font-medium text-slate-500">Campus</dt>
                <dd className="text-sm font-medium text-slate-800 text-right">{profile.institution}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-xs font-medium text-slate-500">Location</dt>
                <dd className="text-sm font-medium text-slate-800 text-right">{profile.location}</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {profile.aboutParagraphs.map((paragraph, idx) => (
              <p key={idx} className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Skills & Practical Application Matrix */}
            <div className="pt-6 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Technical Skills &amp; Practical Examples
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Core competencies applied directly in coursework and personal software builds.
                  </p>
                </div>

                {/* Interactive Category Filter Buttons */}
                <div
                  role="tablist"
                  aria-label="Filter technical skills by category"
                  className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 rounded-lg self-start"
                >
                  {SKILL_CATEGORIES.map((category) => {
                    const active = selectedCategory === category;
                    return (
                      <button
                        key={category}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 ${
                          active
                            ? 'bg-white text-slate-900 shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {visibleSkills.map((skill) => (
                  <article
                    key={skill.id}
                    className="rounded-xl bg-white border border-slate-200 p-5 transition-colors duration-150 hover:border-slate-300"
                  >
                    <div className="flex items-baseline justify-between gap-3 mb-2">
                      <h4 className="text-base font-semibold text-slate-900">{skill.name}</h4>
                      <span className="text-xs font-medium text-emerald-700 whitespace-nowrap shrink-0">
                        {skill.proficiency}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mb-2.5">{skill.category}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {skill.practicalExample}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
