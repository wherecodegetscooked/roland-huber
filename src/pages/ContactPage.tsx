import React, { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { siteConfig } from '../constants';

type Status = 'idle' | 'sending' | 'success' | 'error';

// Kontaktseite: Formular wird per POST /api/contact (Cloudflare Worker +
// Resend) verschickt. Adresse rechts.
export const ContactPage: React.FC = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    company_website: '', // Honeypot (unsichtbar, nur Bots fuellen das aus)
  });
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Could not send message. Please try again later.');
      }
      setStatus('success');
      setForm({ firstName: '', lastName: '', email: '', phone: '', message: '', company_website: '' });
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Could not send message. Please try again later.');
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-lg bg-white border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-60';

  return (
    <>
      {/* Dunkler Header-Bereich (damit die weisse Navbar lesbar bleibt) */}
      <section className="bg-[#080808] pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl sm:text-6xl font-bold text-white">Get in touch</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_320px] gap-12">
            {/* Formular */}
            {status === 'success' ? (
              <div className="p-8 rounded-lg bg-accent/5 border border-accent/20 self-start">
                <h2 className="text-2xl font-bold text-zinc-900 mb-2">Thank you</h2>
                <p className="text-zinc-700">
                  Your message has been sent. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    className={inputClass}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    className={inputClass}
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="E-Mail"
                  required
                  value={form.email}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  className={inputClass}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  className={inputClass}
                />
                <textarea
                  name="message"
                  placeholder="Your message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  className={inputClass}
                />

                {/* Honeypot: fuer Menschen unsichtbar */}
                <input
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company_website}
                  onChange={handleChange}
                  className="hidden"
                  aria-hidden="true"
                />

                <p className="text-xs text-zinc-500">
                  By submitting the contact form, you agree that your data will be stored for
                  the purpose of processing your request (for further information and revocation
                  instructions, please refer to the Privacy policy).
                </p>

                {status === 'error' && (
                  <p className="text-sm text-red-600" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-8 py-3 rounded-full text-base font-medium bg-zinc-900 text-white hover:bg-zinc-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}

            {/* Adresse */}
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-white border border-zinc-200">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <address className="not-italic text-zinc-700 leading-relaxed">
                    {siteConfig.address.company}
                    <br />
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.zip} {siteConfig.address.city}
                  </address>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-zinc-900 hover:text-accent"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
