import React from 'react';
import heroShanghai from '../assets/images/hero-shanghai.jpg';
import serviceSuppliers from '../assets/images/service-suppliers.jpg';
import serviceDevelopment from '../assets/images/service-development.jpg';
import serviceImplementation from '../assets/images/service-implementation.jpg';

const services = [
  {
    title: 'Evaluation of Best Chinese Suppliers',
    image: serviceSuppliers,
    text: 'RKHC evaluates potential industrial partners, seeking to expand in Africa, Middle East and Europe with the capabilities to supply the latest technology, services, hardware, software and know-how.',
  },
  {
    title: 'Development of Market Penetration Strategies',
    image: serviceDevelopment,
    text: 'RKHC develops and implements market penetration strategies for its Chinese industrial partners. For this purpose, RKHC works with an established network of experienced key partners in Africa, Middle East and Europe. If required, RKHC can arrange the financing of projects.',
  },
  {
    title: 'Implementation of Market Penetration Strategies',
    image: serviceImplementation,
    text: 'RKHC implements the market penetration strategies with the input and know-how of the local key partners. RKHC and its key partners set up a local presence in form of a Joint Venture or Special Purpose Vehicle to handle contracts on behalf of RKHC and the Chinese industrial partner. RKHC can also arrange and accompany a technology transfer to the Joint Venture or Special Purpose Vehicle. In that way the local set up is enabled to provide local content required for the execution of the contracts.',
  },
];

// About-Seite: Firmenbeschreibung und Leistungen.
export const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end">
        <div className="absolute inset-0">
          <img src={heroShanghai} alt="Shanghai skyline at night" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-12 w-full">
          <h1 className="text-4xl sm:text-6xl font-bold text-white">Who we are</h1>
        </div>
      </section>

      {/* Firmenbeschreibung */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-lg leading-relaxed text-zinc-700">
          <p>
            RKHConsulting is a consulting firm focusing on the development and
            implementation of international market penetration strategies for Chinese
            technology firms in Africa, Middle East and Europe.
          </p>
          <p>
            In the same time RKHC is specializing in sourcing innovative Chinese products,
            technologies, services and solutions for customers across Africa, the Middle East
            and Europe.
          </p>
          <p>
            The company was founded by Dr. Roland K. Huber, CEO. The senior management is
            additionally comprised of Jinming Wang, head China, and Raymond J. Lacoste,
            head Europe, Middle East and Africa. A key component of the strategy is RKHC&rsquo;s
            specialisation in securing private and government contracts for clients and in
            establishing a local presence in foreign markets in the form of a joint venture
            or Special Purpose Vehicle.
          </p>
          <p>
            The Joint Venture or Special Purpose Vehicle can act as a distributor, marketing
            and selling products, ensuring after-sale service and adding local content as
            required. In case the projects require or clients demand higher levels of local
            content, RKHC has the experience to arrange technology transfers to the local
            Joint Venture or Special Purpose Vehicle, including the required level of local
            production.
          </p>
        </div>
      </section>

      {/* Leistungen: grosse, imposante Bilder im Wechsel mit Text */}
      <section className="pb-28">
        <div className="max-w-6xl mx-auto px-6 space-y-24">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              <img
                src={service.image}
                alt={service.title}
                className={`w-full h-80 md:h-[32rem] object-cover rounded-xl shadow-2xl md:col-span-7 ${i % 2 === 1 ? 'md:order-2' : ''}`}
              />
              <div className={`md:col-span-5 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-5">
                  {service.title}
                </h2>
                <p className="text-lg text-zinc-700 leading-relaxed">
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
