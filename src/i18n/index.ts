// საიტის ყველა ტექსტი ორ ენაზე. ახალი ენის დასამატებლად: დაამატე ობიექტი `dict`-ში
// და გვერდი src/pages/<ენა>/index.astro.
// შენიშვნა: ციფრები, პროექტები და შეფასებები სატესტოა (იხ. README).

export type Lang = 'ka' | 'en';
export const LANGS: Lang[] = ['ka', 'en'];

const ka = {
  meta: {
    title: 'BAU BILD — მშენებლობა და რემონტი',
    description:
      'BAU BILD: მშენებლობა და რემონტი სრული ციკლით, კარკასიდან ინტერიერამდე. პროექტიდან გასაღების ჩაბარებამდე.',
  },
  tagline: 'მშენებლობა · რემონტი',
  taglineA: 'მშენებლობა',
  taglineB: 'რემონტი',
  nav: {
    label: 'მთავარი მენიუ',
    menu: 'მენიუ',
    close: 'დახურვა',
    services: 'სერვისები',
    projects: 'პროექტები',
    about: 'ჩვენ შესახებ',
    reviews: 'შეფასებები',
    contact: 'კონტაქტი',
  },
  themeToDark: 'მუქ თემაზე გადართვა',
  themeToLight: 'ღია თემაზე გადართვა',
  langLabel: 'ენა',
  hero: {
    title: 'ვაშენებთ და ვარემონტებთ, ზუსტად და დროულად',
    lead: 'სრული ციკლი ერთ გუნდში: კარკასი, სახურავი, ფასადი და ინტერიერი, პროექტიდან გასაღების ჩაბარებამდე.',
    link: 'ჩვენი პროექტები',
  },
  photo: '[ფოტო]',
  more: 'ვრცლად',
  services: {
    title: 'ვაშენებთ ნულიდან ბოლომდე',
    items: [
      { title: 'საცხოვრებელი სახლები', sub: 'კერძო სახლები და აგარაკები' },
      { title: 'კომერციული ობიექტები', sub: 'აფთიაქები, მაღაზიები, ბენზინგასამართი სადგურები' },
      { title: 'საგანმანათლებლო ობიექტები', sub: 'სკოლები და საბავშვო ბაღები' },
      { title: 'ფასადი და სახურავი', sub: 'მოწყობა, შეკეთება და განახლება' },
      { title: 'რემონტი და ინტერიერი', sub: 'შავი კარკასიდან მზა ინტერიერამდე' },
    ],
  },
  projects: {
    title: 'შერჩეული პროექტები',
    all: 'ყველა პროექტი',
    items: [
      { service: 1, name: 'აფთიაქი, საბურთალო', meta: 'თბილისი · 320 მ² · 2025', image: 'images/project-pharmacy.jpg' },
      { service: 0, name: 'კერძო სახლი, წყნეთი', meta: 'წყნეთი · 240 მ² · 2024', image: '' },
      { service: 2, name: 'საბავშვო ბაღი, ვაკე', meta: 'თბილისი · 680 მ² · 2024', image: '' },
    ],
  },
  stats: {
    label: 'ციფრებში',
    items: [
      { big: '12', small: 'წელი გამოცდილება' },
      { big: '85+', small: 'დასრულებული პროექტი' },
      { big: '40 000 მ²', small: 'აშენებული და გარემონტებული ფართი' },
      { big: '5 წელი', small: 'გარანტია სამუშაოზე' },
    ],
  },
  about: {
    title: 'ერთი კომპანია, ერთი პასუხისმგებლობა',
    text: 'პროექტს ვიღებთ ნულიდან და ბოლომდე მივყავართ: საძირკველი, კარკასი, სახურავი, ფასადი, ინტერიერი. დამკვეთს ერთი კონტაქტი ჰყავს მთელი პროცესის განმავლობაში. 12 წელია ვმუშაობთ თბილისსა და მის შემოგარენში.',
    photo: '[ფოტო: გუნდი ობიექტზე]',
    link: 'კომპანიის შესახებ',
  },
  process: {
    eyebrow: 'როგორ ვმუშაობთ',
    title: 'ოთხი ეტაპი',
    steps: [
      { title: 'კონსულტაცია', text: 'გვიყვებით, რა გჭირდებათ. ვსაუბრობთ ვადებსა და ბიუჯეტზე.' },
      { title: 'შეფასება', text: 'ვნახულობთ ობიექტს და გიმზადებთ ხარჯთაღრიცხვას.' },
      { title: 'შესრულება', text: 'ვმუშაობთ შეთანხმებული გეგმით და გაცნობებთ ყოველ ეტაპს.' },
      { title: 'ჩაბარება', text: 'ერთად ვამოწმებთ შედეგს და გადმოგცემთ ობიექტს.' },
    ],
  },
  reviews: {
    title: 'კლიენტების შეფასებები',
    items: [
      {
        quote: 'აფთიაქი ოთხ თვეში აგვიშენეს, ზუსტად შეთანხმებული ვადით. ყოველ ეტაპს წინასწარ გვიხსნიდნენ და ბიუჯეტი არ შეცვლილა.',
        name: 'ნინო კ.',
        meta: 'კომერციული · თბილისი',
      },
      {
        quote: 'შავი კარკასის სახლი ვიყიდეთ და სრულად მზა მივიღეთ. სახურავიდან ინტერიერამდე ყველაფერი ერთმა გუნდმა გააკეთა.',
        name: 'გიორგი მ.',
        meta: 'საცხოვრებელი · წყნეთი',
      },
      {
        quote: 'საბავშვო ბაღი სასწავლო წლის დაწყებამდე ჩაგვაბარეს. სუფთა სამუშაო და ყოველთვის ხელმისაწვდომი გუნდი.',
        name: 'თამარ ბ.',
        meta: 'საგანმანათლებლო · თბილისი',
      },
    ],
  },
  contact: {
    title: 'დაგვიკავშირდით',
    text: 'აღგვიწერეთ სამუშაო და 24 საათში გიპასუხებთ.',
    phone: 'ტელეფონი',
    email: 'ელფოსტა',
    address: 'მისამართი',
    addressValue: 'გიორგი ბრწყინვალე 4',
    messengers: 'WhatsApp · Viber',
    mapTitle: 'რუკა: გიორგი ბრწყინვალე 4',
    form: {
      name: 'სახელი',
      type: 'სამუშაოს ტიპი',
      choose: 'აირჩიეთ',
      other: 'სხვა',
      message: 'შეტყობინება',
      send: 'გაგზავნა',
      sending: 'იგზავნება...',
      success: 'მადლობა! შეტყობინება მიღებულია, მალე დაგიკავშირდებით.',
      error: 'შეტყობინება ვერ გაიგზავნა. დაგვირეკეთ ან მოგვწერეთ ელფოსტაზე.',
      notConfigured: 'ფორმა ჯერ არ არის ჩართული. დაგვირეკეთ ან მოგვწერეთ ელფოსტაზე.',
      subject: 'ახალი შეტყობინება საიტიდან',
    },
  },
  footer: {
    social: 'სოციალური ქსელები',
    rights: '© 2026 BAU BILD. ყველა უფლება დაცულია.',
  },
  notFound: {
    title: 'გვერდი ვერ მოიძებნა',
    text: 'ასეთი გვერდი არ არსებობს ან გადატანილია.',
    back: 'მთავარ გვერდზე დაბრუნება',
  },
};

export type Dict = typeof ka;

const en: Dict = {
  meta: {
    title: 'BAU BILD — Construction and Renovation',
    description:
      'BAU BILD: construction and renovation as a full cycle, from structure to interior. From design to handover.',
  },
  tagline: 'CONSTRUCTION · RENOVATION',
  taglineA: 'CONSTRUCTION',
  taglineB: 'RENOVATION',
  nav: {
    label: 'Main menu',
    menu: 'Menu',
    close: 'Close',
    services: 'Services',
    projects: 'Projects',
    about: 'About',
    reviews: 'Reviews',
    contact: 'Contact',
  },
  themeToDark: 'Switch to dark theme',
  themeToLight: 'Switch to light theme',
  langLabel: 'Language',
  hero: {
    title: 'We build and renovate, precisely and on time',
    lead: 'The full cycle in one team: structure, roof, facade and interior, from design to handover.',
    link: 'Our projects',
  },
  photo: '[Photo]',
  more: 'Learn more',
  services: {
    title: 'We build from the ground up',
    items: [
      { title: 'Residential', sub: 'Private houses and country homes' },
      { title: 'Commercial', sub: 'Pharmacies, shops and petrol stations' },
      { title: 'Education', sub: 'Schools and kindergartens' },
      { title: 'Facades and roofing', sub: 'Installation, repair and renewal' },
      { title: 'Renovation and interiors', sub: 'From bare shell to finished interior' },
    ],
  },
  projects: {
    title: 'Selected projects',
    all: 'All projects',
    items: [
      { service: 1, name: 'Pharmacy, Saburtalo', meta: 'Tbilisi · 320 m² · 2025', image: 'images/project-pharmacy.jpg' },
      { service: 0, name: 'Private house, Tskneti', meta: 'Tskneti · 240 m² · 2024', image: '' },
      { service: 2, name: 'Kindergarten, Vake', meta: 'Tbilisi · 680 m² · 2024', image: '' },
    ],
  },
  stats: {
    label: 'In numbers',
    items: [
      { big: '12', small: 'years of experience' },
      { big: '85+', small: 'completed projects' },
      { big: '40,000 m²', small: 'built and renovated' },
      { big: '5 yrs', small: 'warranty on our work' },
    ],
  },
  about: {
    title: 'One company, one point of responsibility',
    text: 'We take a project from zero to completion: foundation, structure, roof, facade and interior. The client has one contact throughout the whole process. We have been working in Tbilisi and the surrounding area for 12 years.',
    photo: '[Photo: team on site]',
    link: 'About the company',
  },
  process: {
    eyebrow: 'How we work',
    title: 'Four stages',
    steps: [
      { title: 'Consultation', text: 'You tell us what you need. We discuss timing and budget.' },
      { title: 'Estimate', text: 'We visit the site and prepare a cost estimate.' },
      { title: 'Execution', text: 'We work to the agreed plan and keep you updated at every stage.' },
      { title: 'Handover', text: 'We check the result together and hand the property over.' },
    ],
  },
  reviews: {
    title: 'What clients say',
    items: [
      {
        quote: 'They built our pharmacy in four months, exactly as agreed. Every stage was explained in advance and the budget did not change.',
        name: 'Nino K.',
        meta: 'Commercial · Tbilisi',
      },
      {
        quote: 'We bought a bare-shell house and received it fully finished. One team handled everything, from the roof to the interior.',
        name: 'Giorgi M.',
        meta: 'Residential · Tskneti',
      },
      {
        quote: 'The kindergarten opened on time for the school year. Clean work, and they were always reachable.',
        name: 'Tamar B.',
        meta: 'Education · Tbilisi',
      },
    ],
  },
  contact: {
    title: 'Get in touch',
    text: 'Describe the job and we will reply within 24 hours.',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    addressValue: '4 Giorgi Brtskinvale St., Tbilisi',
    messengers: 'WhatsApp · Viber',
    mapTitle: 'Map: 4 Giorgi Brtskinvale St.',
    form: {
      name: 'Name',
      type: 'Type of work',
      choose: 'Select',
      other: 'Other',
      message: 'Message',
      send: 'Send',
      sending: 'Sending...',
      success: 'Thank you! Your message has been received. We will be in touch soon.',
      error: 'The message could not be sent. Please call or email us.',
      notConfigured: 'The form is not active yet. Please call or email us.',
      subject: 'New message from the website',
    },
  },
  footer: {
    social: 'Social media',
    rights: '© 2026 BAU BILD. All rights reserved.',
  },
  notFound: {
    title: 'Page not found',
    text: 'This page does not exist or has been moved.',
    back: 'Back to the home page',
  },
};

export const dict: Record<Lang, Dict> = { ka, en };

/** აბრუნებს ბმულს base path-ის გათვალისწინებით (მაგ. თუ საიტი ქვესაქაღალდეშია). */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export function homeUrl(lang: Lang): string {
  return lang === 'ka' ? url('') : url(`${lang}/`);
}
