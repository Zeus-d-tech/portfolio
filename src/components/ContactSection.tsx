import { Check, Copy, ExternalLink, Mail, MapPin, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { PortfolioProfile } from '../types/portfolio';

interface ContactSectionProps {
  profile: PortfolioProfile;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactSection({ profile }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const nextErrors: FormErrors = {};

    if (!name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!message.trim() || message.trim().length < 10) {
      nextErrors.message = 'Please include a short message (at least 10 characters).';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-emerald-700 mb-2">05. Contact</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance mb-4">
              Let’s connect on academic collaborations or web builds.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Whether you are reviewing this DCIT 26 portfolio, proposing a group capstone project, or discussing an internship opportunity, feel free to reach out directly.
            </p>

            <div className="space-y-4">
              {/* Email Row with Copy Action */}
              <div className="rounded-xl bg-white border border-slate-200 p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-slate-500">University Email</p>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm font-semibold text-slate-900 hover:text-emerald-700 truncate block"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Campus Location */}
              <div className="rounded-xl bg-white border border-slate-200 p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">Campus Location</p>
                  <p className="text-sm font-semibold text-slate-900">{profile.location}</p>
                </div>
              </div>

              {/* External Profile Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-white border border-slate-200 px-4 py-3 flex items-center justify-between gap-2 text-sm font-semibold text-slate-800 hover:border-emerald-700 hover:text-emerald-700 transition-colors"
                >
                  <span className="truncate">{profile.githubHandle}</span>
                  <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>

                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-white border border-slate-200 px-4 py-3 flex items-center justify-between gap-2 text-sm font-semibold text-slate-800 hover:border-emerald-700 hover:text-emerald-700 transition-colors"
                >
                  <span className="truncate">{profile.linkedinHandle}</span>
                  <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <Check className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Message prepared</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, {name}. Your inquiry has been validated. You can also send it directly through your default mail client to{' '}
                    <span className="font-medium text-slate-900">{profile.email}</span>.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={`mailto:${profile.email}?subject=${encodeURIComponent(
                        subject || `Portfolio Inquiry from ${name}`
                      )}&body=${encodeURIComponent(message)}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
                    >
                      <Mail className="w-4 h-4" aria-hidden="true" />
                      <span>Open in Email App</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="px-4 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g., Maria Santos"
                        aria-invalid={Boolean(errors.name)}
                        className="w-full px-3.5 py-2.5 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 transition-colors"
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-600 font-medium mt-1.5">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        aria-invalid={Boolean(errors.email)}
                        className="w-full px-3.5 py-2.5 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 transition-colors"
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-600 font-medium mt-1.5">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-semibold text-slate-800 mb-1.5">
                      Subject (Optional)
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Project inquiry, feedback, or collaboration"
                      className="w-full px-3.5 py-2.5 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-800 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share details about your project, course review, or question..."
                      aria-invalid={Boolean(errors.message)}
                      className="w-full px-3.5 py-2.5 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 transition-colors resize-y"
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-600 font-medium mt-1.5">{errors.message}</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-slate-500">
                      Direct reply via {profile.email}
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-700"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
