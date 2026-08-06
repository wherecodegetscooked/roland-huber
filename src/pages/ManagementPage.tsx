import React from 'react';
import heroShanghai from '../assets/images/hero-shanghai.jpg';
import rolandHuber from '../assets/images/roland-huber.jpg';
import raymondLacoste from '../assets/images/raymond-lacoste.jpg';
import jinmingWang from '../assets/images/jinming-wang.jpg';
import nathaliaRosa from '../assets/images/nathalia-rosa.jpeg';

const team = [
  {
    name: 'Dr. Roland Huber',
    role: 'Chief Executive Officer',
    image: rolandHuber,
    bio: 'Dr. Huber graduated and got his PhD in Business Administration from the university of St. Gallen (HSG) in Switzerland. Dr. Huber is the founder and owner of RKHConsulting. In the 90s and early 2000 he has gathered significant experience in cross-border consulting with European Firms penetrating the Chinese market. The majority of these projects included a technology transfer and licensing of development and production of industrial products. With the emergence of the Chinese economy and their technical expertise, the nature of RKHConsulting’s focus has shifted. Dr. Huber currently consults Chinese companies in their international market penetration. His latest project includes the role as the leader of a Chinese consortium to supply security cards solutions for government projects.',
  },
  {
    name: 'Mr. Raymond Lacoste',
    role: 'Head Europe, Middle East & Africa',
    image: raymondLacoste,
    bio: 'Mr. Lacoste has a master’s in science (Electrotechnics / Information technologies) and a master’s in business administration. His professional experience includes in-depth experience in Telecom and prepaid card business as a former Managing Director of a major international card manufacturer. In addition, Mr. Lacoste has vast experience in counterfeit protection for banknotes, fiduciary and identity documents. Mr. Lacoste played an instrumental role in the market development of OVD Kinegram™ (a security device used on banknotes, passports/ID Cards and Visas stickers). Overall, Mr. Lacoste has 20 years experience in Security and Defense business. Finally, Mr. Lacoste has been a consultant for various defence and security companies through over the last two decades.',
  },
  {
    name: 'Mr. Jinming Wang',
    role: 'Head China',
    image: jinmingWang,
    bio: 'Mr. Wang graduated from Beijing University of Technology, graduated in 1995 and has since gathered significant experience in consulting international firms penetrating the Chinese market. In the last decade, Mr. Wang has leveraged his extensive experience to enable Chinese firms to penetrate international markets and set up joint-ventures, technology transfers and corporate acquisitions.',
  },
  {
    name: 'Mrs. Nathalia Rosa',
    role: 'General Administration & Business Development',
    image: nathaliaRosa,
    bio: 'Mrs. Nathalia Rosa is responsible for overseeing day-to-day general administration and driving business development initiatives across English- and Portuguese-speaking African countries. Key tasks include identifying market opportunities and supporting business growth.',
  },
];

// Management-Seite: Vorstellung des Managementteams.
export const ManagementPage: React.FC = () => {
  return (
    <>
      {/* Dunkler Hero-Header */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end">
        <div className="absolute inset-0">
          <img src={heroShanghai} alt="Shanghai skyline at night" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">The Management</h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            RKHConsulting&rsquo;s management team has over 80 years of collective experience in
            strategy consulting, specifically in the penetration of new markets.
          </p>
        </div>
      </section>

      {/* Team: grosse, eckige Fotos */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="flex flex-col md:flex-row gap-10 items-start"
            >
              {/* Feste, fuer alle vier identische Bildgroesse; Seite wechselt */}
              <img
                src={member.image}
                alt={member.name}
                className={`w-full md:w-80 h-80 shrink-0 object-cover rounded-lg shadow-xl ${i % 2 === 1 ? 'md:order-2' : ''}`}
              />
              <div className={`flex-1 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <h2 className="text-3xl font-bold text-zinc-900">{member.name}</h2>
                <p className="text-accent text-lg font-medium mb-5">{member.role}</p>
                <p className="text-lg text-zinc-700 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
