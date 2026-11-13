import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { CustomizeDrawer } from './components/CustomizeDrawer';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { MaintenancePlanSection } from './components/MaintenancePlanSection';
import { Navbar } from './components/Navbar';
import { ProjectsCertificatesSection } from './components/ProjectsCertificatesSection';
import { DEFAULT_PORTFOLIO } from './data/defaultPortfolio';
import { PortfolioProfile } from './types/portfolio';

const STORAGE_KEY = 'dcit26_portfolio_profile_v4';

export default function App() {
  const [profile, setProfile] = useState<PortfolioProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved) as PortfolioProfile;
      }
    } catch {
      // Fallback safely to default portfolio data
    }
    return DEFAULT_PORTFOLIO;
  });

  const [activeSection, setActiveSection] = useState('home');
  const [customizerOpen, setCustomizerOpen] = useState(false);

  // Sync document title when student name is personalized
  useEffect(() => {
    document.title = `${profile.fullName} – Personal Portfolio | CvSU DCIT 26`;
  }, [profile.fullName]);

  // Track visible section for subtle navigation highlight
  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'certificates', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.05 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const handleSaveProfile = (updated: PortfolioProfile) => {
    setProfile(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignore storage quota errors cleanly
    }
  };

  const handleResetProfile = () => {
    setProfile(DEFAULT_PORTFOLIO);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage errors
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-700 focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar
        fullName={profile.fullName}
        initials={profile.initials}
        activeSection={activeSection}
        githubUrl={profile.githubUrl}
      />

      <main id="main-content" className="flex-1">
        <HeroSection
          profile={profile}
          onOpenCustomizer={() => setCustomizerOpen(true)}
        />
        <AboutSection profile={profile} />
        <ProjectsCertificatesSection profile={profile} />
        <MaintenancePlanSection profile={profile} />
        <ContactSection profile={profile} />
      </main>

      <Footer
        profile={profile}
        onOpenCustomizer={() => setCustomizerOpen(true)}
      />

      <CustomizeDrawer
        isOpen={customizerOpen}
        profile={profile}
        onClose={() => setCustomizerOpen(false)}
        onSaveProfile={handleSaveProfile}
        onResetProfile={handleResetProfile}
      />
    </div>
  );
}
