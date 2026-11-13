import { Plus, RotateCcw, X } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { CertificateItem, PortfolioProfile, ProjectItem } from '../types/portfolio';

interface CustomizeDrawerProps {
  isOpen: boolean;
  profile: PortfolioProfile;
  onClose: () => void;
  onSaveProfile: (updated: PortfolioProfile) => void;
  onResetProfile: () => void;
}

export function CustomizeDrawer({
  isOpen,
  profile,
  onClose,
  onSaveProfile,
  onResetProfile,
}: CustomizeDrawerProps) {
  const [draft, setDraft] = useState<PortfolioProfile>(profile);
  const [newProjectTitle, setNewProjectTitle] = useState('');
  const [newProjectSummary, setNewProjectSummary] = useState('');
  const [newProjectTech, setNewProjectTech] = useState('React, TypeScript, Tailwind CSS');
  const [newCertTitle, setNewCertTitle] = useState('');
  const [newCertIssuer, setNewCertIssuer] = useState('');
  const [savedNotice, setSavedNotice] = useState(false);

  useEffect(() => {
    setDraft(profile);
  }, [profile, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const computeInitials = (name: string) => {
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return 'AA';
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  };

  const handleSave = (event: FormEvent) => {
    event.preventDefault();
    const updated: PortfolioProfile = {
      ...draft,
      initials: computeInitials(draft.fullName),
    };
    onSaveProfile(updated);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2000);
  };

  const handleAddProject = () => {
    if (!newProjectTitle.trim() || !newProjectSummary.trim()) return;
    const project: ProjectItem = {
      id: `proj-${Date.now()}`,
      title: newProjectTitle.trim(),
      category: 'Web Apps',
      year: String(new Date().getFullYear()),
      role: 'Student Developer',
      summary: newProjectSummary.trim(),
      challenge: 'Designed to solve a practical workflow bottleneck in coursework and daily productivity.',
      solution: 'Implemented with clean semantic markup, responsive Grid/Flexbox layout, and TypeScript validation.',
      outcome: 'Built and tested across desktop and mobile viewports for DCIT 26 submission.',
      technologies: newProjectTech
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      image: '/images/project-cvsu-portal.svg',
      imageAlt: `Interface preview for ${newProjectTitle.trim()}`,
      repoUrl: draft.githubUrl || 'https://github.com',
      liveUrl: '#projects',
    };
    const nextDraft = { ...draft, projects: [project, ...draft.projects] };
    setDraft(nextDraft);
    onSaveProfile(nextDraft);
    setNewProjectTitle('');
    setNewProjectSummary('');
  };

  const handleAddCertificate = () => {
    if (!newCertTitle.trim() || !newCertIssuer.trim()) return;
    const cert: CertificateItem = {
      id: `cert-${Date.now()}`,
      title: newCertTitle.trim(),
      issuer: newCertIssuer.trim(),
      date: 'November 2026',
      credentialId: `DCIT26-${String(Date.now()).slice(-4)}`,
      summary: `Verified credential issued by ${newCertIssuer.trim()} recognizing technical competency.`,
      image: '/images/cert-emerging-tech.svg',
      imageAlt: `Certificate for ${newCertTitle.trim()} issued by ${newCertIssuer.trim()}`,
      verificationUrl: '#certificates',
    };
    const nextDraft = { ...draft, certificates: [cert, ...draft.certificates] };
    setDraft(nextDraft);
    onSaveProfile(nextDraft);
    setNewCertTitle('');
    setNewCertIssuer('');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="customizer-title"
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex justify-end"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white h-full overflow-y-auto border-l border-slate-200 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-xs px-6 py-4 border-b border-slate-200 flex items-center justify-between gap-4">
          <div>
            <h2 id="customizer-title" className="text-lg font-bold text-slate-900">
              Personalize Portfolio Details
            </h2>
            <p className="text-xs text-slate-500">
              Update your CvSU student identity, bio, projects, and certificates locally.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close personalization panel"
            className="w-10 h-10 inline-flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave} className="p-6 space-y-6 flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="edit-fullname" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Student Full Name
              </label>
              <input
                id="edit-fullname"
                type="text"
                value={draft.fullName}
                onChange={(e) => setDraft({ ...draft, fullName: e.target.value })}
                className="w-full px-3 py-2 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-emerald-700"
              />
            </div>

            <div>
              <label htmlFor="edit-program" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Program and Section
              </label>
              <input
                id="edit-program"
                type="text"
                value={draft.programAndSection}
                onChange={(e) => setDraft({ ...draft, programAndSection: e.target.value })}
                placeholder="e.g., BSCS 3-2 or BSIT 3-1"
                className="w-full px-3 py-2 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-emerald-700"
              />
            </div>
          </div>

          <div>
            <label htmlFor="edit-location" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Location
            </label>
            <input
              id="edit-location"
              type="text"
              value={draft.location}
              onChange={(e) => setDraft({ ...draft, location: e.target.value })}
              placeholder="e.g., Las Piñas City, Philippines"
              className="w-full px-3 py-2 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-emerald-700"
            />
          </div>

          <div>
            <label htmlFor="edit-tagline" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Personal Brand Tagline
            </label>
            <input
              id="edit-tagline"
              type="text"
              value={draft.tagline}
              onChange={(e) => setDraft({ ...draft, tagline: e.target.value })}
              className="w-full px-3 py-2 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-emerald-700"
            />
          </div>

          <div>
            <label htmlFor="edit-intro" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Hero Introduction
            </label>
            <textarea
              id="edit-intro"
              rows={3}
              value={draft.heroIntro}
              onChange={(e) => setDraft({ ...draft, heroIntro: e.target.value })}
              className="w-full px-3 py-2 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-emerald-700"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="edit-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Contact Email
              </label>
              <input
                id="edit-email"
                type="email"
                value={draft.email}
                onChange={(e) => setDraft({ ...draft, email: e.target.value })}
                className="w-full px-3 py-2 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-emerald-700"
              />
            </div>
            <div>
              <label htmlFor="edit-github" className="block text-xs font-semibold text-slate-700 mb-1.5">
                GitHub Display Label
              </label>
              <input
                id="edit-github"
                type="text"
                value={draft.githubHandle}
                onChange={(e) => setDraft({ ...draft, githubHandle: e.target.value })}
                className="w-full px-3 py-2 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-emerald-700"
              />
            </div>
          </div>

          <div>
            <label htmlFor="edit-github-url" className="block text-xs font-semibold text-slate-700 mb-1.5">
              GitHub Repository URL
            </label>
            <input
              id="edit-github-url"
              type="url"
              value={draft.githubUrl}
              onChange={(e) => setDraft({ ...draft, githubUrl: e.target.value })}
              placeholder="https://github.com/username/repository"
              className="w-full px-3 py-2 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-emerald-700"
            />
          </div>

          {/* Add New Project Quick Form */}
          <div className="pt-5 border-t border-slate-200 space-y-3">
            <h3 className="text-sm font-bold text-slate-900">Add a Project Entry</h3>
            <input
              type="text"
              placeholder="Project Title"
              value={newProjectTitle}
              onChange={(e) => setNewProjectTitle(e.target.value)}
              className="w-full px-3 py-2 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-emerald-700"
            />
            <textarea
              rows={2}
              placeholder="Brief project description and purpose"
              value={newProjectSummary}
              onChange={(e) => setNewProjectSummary(e.target.value)}
              className="w-full px-3 py-2 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-emerald-700"
            />
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Technologies (comma-separated)"
                value={newProjectTech}
                onChange={(e) => setNewProjectTech(e.target.value)}
                className="flex-1 px-3 py-2 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-emerald-700"
              />
              <button
                type="button"
                onClick={handleAddProject}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Add Project</span>
              </button>
            </div>
          </div>

          {/* Add New Certificate Quick Form */}
          <div className="pt-5 border-t border-slate-200 space-y-3">
            <h3 className="text-sm font-bold text-slate-900">Add a Certificate</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Certificate Title"
                value={newCertTitle}
                onChange={(e) => setNewCertTitle(e.target.value)}
                className="w-full px-3 py-2 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-emerald-700"
              />
              <input
                type="text"
                placeholder="Issuing Organization"
                value={newCertIssuer}
                onChange={(e) => setNewCertIssuer(e.target.value)}
                className="w-full px-3 py-2 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-emerald-700"
              />
            </div>
            <button
              type="button"
              onClick={handleAddCertificate}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <Plus className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Add Certificate</span>
            </button>
          </div>

          <div className="pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={onResetProfile}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Reset to Default</span>
            </button>

            <div className="flex items-center gap-3">
              {savedNotice && (
                <span className="text-xs font-semibold text-emerald-700">Saved locally</span>
              )}
              <button
                type="submit"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
