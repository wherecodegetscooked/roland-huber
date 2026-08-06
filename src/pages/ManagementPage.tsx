import React from 'react';
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
    <section className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
            The Management
          </h1>
          <p className="text-lg text-zinc-600 dark:text-gray-400 max-w-2xl mx-auto">
            RKHConsulting&rsquo;s management team has over 80 years of collective experience in
            strategy consulting, specifically in the penetration of new markets.
          </p>
        </div>

        <div className="space-y-16">
          {team.map((member) => (
            <div
              key={member.name}
              className="grid md:grid-cols-[220px_1fr] gap-8 items-start"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover mx-auto md:mx-0 shadow-lg"
              />
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  {member.name}
                </h2>
                <p className="text-accent font-medium mb-4">{member.role}</p>
                <p className="text-zinc-700 dark:text-gray-300 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
