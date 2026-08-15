import React from 'react';
import { siteConfig } from '../constants';

// Disclaimer / Impressum.
export const DisclaimerPage: React.FC = () => {
  return (
    <>
      <section className="bg-[#080808] pt-36 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Disclaimer</h1>
        </div>
      </section>

      <section className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="space-y-10 text-zinc-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">Contact address</h2>
            <address className="not-italic">
              RKH Consulting Ltd.
              <br />
              Tägerhardmatte 6
              <br />
              5430 Wettingen
              <br />
              Switzerland
            </address>
            <p className="mt-3">
              E-mail:{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                {siteConfig.email}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">Authorized representative(s)</h2>
            <p>Roland Huber, Managing Director</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">Commercial register entry</h2>
            <p>Registered company name:<br />RKH Consulting GmbH</p>
            <p className="mt-3">Company No. (UID):<br />CHE-188.581.045</p>
            <p className="mt-3">Value added tax number<br />CHE-188.581.045 VALUE ADDED TAX</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">Disclaimer</h2>
            <p>
              The author assumes no responsibility for the correctness, accuracy, timeliness,
              reliability and completeness of the information.
            </p>
            <p className="mt-3">
              Liability claims regarding damage caused by the use of any information provided,
              including any kind of information which is incomplete or incorrect, will therefore
              be rejected.
            </p>
            <p className="mt-3">
              All offers are non-binding. Parts of the pages or the complete publication including
              all offers and information might be extended, changed or partly or completely deleted
              by the author without separate announcement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">Disclaimer for links</h2>
            <p>
              References and links to third party websites are beyond our responsibility. Any
              responsibility for such websites is declined. The access and use of such websites is
              at the own risk of the respective user.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">Copyrights</h2>
            <p>
              The copyright and all other rights to the content, images, photos or other files on
              this website belong exclusively to the company RKH Consulting GmbH or to the
              specifically named copyright holders. For the reproduction of any elements, the
              written consent of the copyright holder must be obtained in advance.
            </p>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};
