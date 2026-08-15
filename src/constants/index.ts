// Zentrale Konfiguration fuer RKH Consulting.
// Alle Komponenten lesen Name, Kontakt und Domain von hier.
export const siteConfig = {
  name: 'RKHConsulting',
  legalName: 'RKH Consulting GmbH',
  tagline:
    'Bridging the gap between growth-seeking Chinese technology companies and clients in Africa, the Middle East and Europe.',
  description:
    'RKHConsulting is a consulting firm focusing on the development and implementation of international market penetration strategies for Chinese technology firms in Africa, Middle East and Europe.',

  domain: 'rkhconsulting.ch',
  url: 'https://rkhconsulting.ch',

  email: 'roland.huber@rkhconsulting.ch',
  phone: '',
  phoneHref: '',

  address: {
    name: '',
    company: 'RKH Consulting GmbH',
    street: 'Tägerhardmatte 6',
    zip: '5430',
    city: 'Wettingen',
    country: 'Switzerland',
  },
} as const;
