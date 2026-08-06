import React, { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Button } from '../components/Button';
import { siteConfig } from '../constants';

// Kontaktseite: Formular (mailto-Versand) und Adresse.
export const ContactPage: React.FC = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${form.firstName} ${form.lastName}`);
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\n` +
        `E-Mail: ${form.email}\n` +
        `Phone: ${form.phone}\n\n` +
        `${form.message}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    'w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent';

  return (
    <section className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl sm:text-6xl font-bold text-zinc-900 dark:text-white mb-12 text-center">
          Get in touch
        </h1>

        <div className="grid md:grid-cols-[1fr_320px] gap-12">
          {/* Formular */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                required
                value={form.firstName}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                required
                value={form.lastName}
                onChange={handleChange}
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
              className={inputClass}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
            />
            <textarea
              name="message"
              placeholder="Your message"
              required
              rows={6}
              value={form.message}
              onChange={handleChange}
              className={inputClass}
            />
            <p className="text-xs text-zinc-500 dark:text-gray-400">
              By submitting the contact form, you agree that your data will be stored for
              the purpose of processing your request (for further information and revocation
              instructions, please refer to the Privacy policy).
            </p>
            <Button type="submit" variant="primary" className="px-8 py-3 text-base">
              Send message
            </Button>
          </form>

          {/* Adresse */}
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
                <address className="not-italic text-zinc-700 dark:text-gray-300 leading-relaxed">
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
                  className="text-zinc-900 dark:text-white hover:text-accent dark:hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
