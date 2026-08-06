import React from 'react';
import { siteConfig } from '../constants';

// Datenschutzerklaerung. Angepasst an die neue Seite: die Abschnitte zu
// Cookies, Google Analytics und LinkedIn wurden entfernt, da die neue
// Seite diese Dienste nicht einsetzt (kein Cookie-Banner, kein Tracking).
// Google Web Fonts, Kontaktformular und SSL bleiben, da zutreffend.
export const PrivacyPage: React.FC = () => {
  return (
    <>
      <section className="bg-[#080808] pt-36 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Privacy policy</h1>
        </div>
      </section>

      <section className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="space-y-10 text-zinc-700 leading-relaxed">
          <div>
            <p>
              The responsible party within the meaning of data protection laws, in particular the
              EU General Data Protection Regulation (DSGVO), is:
            </p>
            <address className="not-italic mt-3">
              RKH Consulting GmbH
              <br />
              Seestrasse 2
              <br />
              8800 Thalwil
            </address>
            <p className="mt-3">
              E-Mail:{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                {siteConfig.email}
              </a>
              <br />
              Website:{' '}
              <a href={siteConfig.url} className="text-accent hover:underline">
                {siteConfig.url}/
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">General notice</h2>
            <p>
              Based on Article 13 of the Swiss Federal Constitution and the data protection
              regulations of the Swiss Confederation (Data Protection Act, DSG), every person has
              the right to protection of their privacy as well as protection against misuse of
              their personal data. The operators of these pages take the protection of your
              personal data very seriously. We treat your personal data confidentially and in
              accordance with the legal data protection regulations as well as this privacy policy.
            </p>
            <p className="mt-3">
              In cooperation with our hosting providers, we make every effort to protect the
              databases as well as possible against unauthorized access, loss, misuse or
              falsification.
            </p>
            <p className="mt-3">
              We would like to point out that data transmission on the Internet (e.g. communication
              by e-mail) can have security gaps. A complete protection of data against access by
              third parties is not possible.
            </p>
            <p className="mt-3">
              By using this website, you consent to the collection, processing and use of data in
              accordance with the following description. This website can generally be visited
              without registration. Data such as pages accessed or names of files accessed, date
              and time are stored on the server for statistical purposes without this data being
              directly related to your person. Personal data, in particular name, address or
              e-mail address are collected as far as possible on a voluntary basis. No data will be
              passed on to third parties without your consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              Privacy policy for SSL/TLS encryption
            </h2>
            <p>
              This website uses SSL/TLS encryption for security reasons and to protect the
              transmission of confidential content, such as inquiries that you send to us as the
              site operator. You can recognize an encrypted connection by the fact that the address
              line of the browser changes from «http://» to «https://» and by the lock symbol in
              your browser line.
            </p>
            <p className="mt-3">
              If SSL or TLS encryption is activated, the data you transmit to us cannot be read by
              third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              Privacy policy for contact form
            </h2>
            <p>
              If you send us inquiries via contact form, your data from the inquiry form, including
              the contact data you provided there, will be stored by us for the purpose of
              processing the inquiry and in case of follow-up questions. We do not pass on this data
              without your consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              Privacy policy for the use of Google Web Fonts
            </h2>
            <p>
              This website uses so-called web fonts provided by Google for the uniform display of
              fonts. When you call up a page, your browser loads the required web fonts into its
              browser cache in order to display texts and fonts correctly. If your browser does not
              support web fonts, a standard font is used by your computer.
            </p>
            <p className="mt-3">
              For more information on Google Web Fonts, please visit{' '}
              <a href="https://developers.google.com/fonts/faq" className="text-accent hover:underline">
                https://developers.google.com/fonts/faq
              </a>{' '}
              and read Google&rsquo;s privacy policy:{' '}
              <a href="https://www.google.com/policies/privacy/" className="text-accent hover:underline">
                https://www.google.com/policies/privacy/
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">General disclaimer</h2>
            <p>
              All information on our website has been carefully checked. We make every effort to
              ensure that the information we provide is up-to-date, correct and complete.
              Nevertheless, the occurrence of errors cannot be completely ruled out, which means
              that we cannot guarantee the completeness, correctness and up-to-dateness of
              information, including journalistic and editorial information. Liability claims
              regarding damage caused by the use of any information provided, including any kind of
              information which is incomplete or incorrect, will therefore be rejected.
            </p>
            <p className="mt-3">
              The publisher may change or delete texts at his own discretion and without notice and
              is not obliged to update the contents of this website. The use of or access to this
              website is at the visitor&rsquo;s own risk. The publisher, its clients or partners are
              not responsible for damages, such as direct, indirect, incidental, consequential or
              punitive damages, allegedly caused by the visit of this website and consequently
              assume no liability for such damages.
            </p>
            <p className="mt-3">
              The publisher also accepts no responsibility or liability for the content and
              availability of third-party websites that can be accessed via external links on this
              website. The operators of the linked sites are solely responsible for their content.
              The publisher thus expressly distances itself from all third-party content that may be
              relevant under criminal or liability law or that may be contrary to public morals.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">Changes</h2>
            <p>
              We can adapt this data protection declaration at any time without prior notice. The
              current version published on our website shall apply. Insofar as the data protection
              declaration is part of an agreement with you, we will inform you of the change by
              e-mail or other suitable means in the event of an update.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              Questions to the data protection officer
            </h2>
            <p>
              If you have any questions about data protection, please write to us by e-mail or
              contact directly the responsible person in our organization listed for data protection
              at the beginning of the data protection statement.
            </p>
          </div>

          <p className="text-sm text-zinc-500">Thalwil, 05.05.2022</p>
        </div>
      </div>
      </section>
    </>
  );
};
