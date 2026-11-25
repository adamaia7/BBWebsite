// დასრულებული პროექტების გვერდები (portfolio / case study), თითო პროექტი = /projects/<slug>/ ორივე ენაზე.
//
// მნიშვნელოვანი: აქ მხოლოდ რეალური, დასრულებული ობიექტები იწერება, რეალური ფოტოებით და დამკვეთის თანხმობით.
// მთავარ გვერდზე ამჟამად ნაჩვენები 3 პროექტი (src/i18n/index.ts → projects.items) სატესტოა და აქ არ გადმოდის.
// სანამ სია ცარიელია, პროექტების გვერდები არ იქმნება და მთავარი გვერდი ძველებურად სატესტო ბარათებს აჩვენებს.
// პირველივე ჩანაწერის დამატებისას: იქმნება /projects/<slug>/ და /en/projects/<slug>/, ემატება sitemap-ში,
// სერვისის გვერდზე ჩნდება ბლოკი „შესრულებული პროექტები“, ხოლო მთავარ გვერდზე სატესტო ბარათებს რეალური ცვლის.
//
// ფოტოები: public/images/projects/<slug>/ საქაღალდეში (jpg/webp, სიგანე ~1600px), გზა იწერება 'images/projects/<slug>/01.jpg'.

import { url, type Lang } from './index';

/** ენაზე დამოკიდებული ტექსტები */
export interface ProjectText {
  /** <title>, საძიებო ფრაზით: ობიექტის ტიპი + უბანი/ქალაქი */
  metaTitle: string;
  metaDescription: string;
  /** მაგ. „აფთიაქის მოწყობა საბურთალოზე“ */
  h1: string;
  /** მოკლე სახელი ბარათისთვის, მაგ. „აფთიაქი, საბურთალო“ */
  name: string;
  lead: string;
  /** ადგილი, როგორც ტექსტში ჩანს, მაგ. „თბილისი, საბურთალო“ */
  location: string;
  /** რა იყო ამოცანა / საწყისი მდგომარეობა */
  challenge: string[];
  /** რა გავაკეთეთ */
  solution: string[];
  /** შესრულებული სამუშაოების სია */
  scope: string[];
  /** ფოტოების alt ტექსტები, იმავე რიგით, რაც images-ში */
  imageAlts: string[];
}

export interface ProjectCase {
  slug: string;
  /** სერვისის slug (SERVICE_SLUGS-იდან), საიდანაც პროექტის გვერდზე ბმული მიდის */
  service: string;
  /** დასრულების წელი */
  year: number;
  /** ფართი მ²-ში, თუ ცნობილია */
  area?: number;
  /** ხანგრძლივობა თვეებში, თუ ცნობილია */
  months?: number;
  /** ფოტოები public/-დან, პირველი მთავარია */
  images: string[];
  ka: ProjectText;
  en: ProjectText;
}

// რეალური პროექტები. ახალი ობიექტი: ჩანაწერი აქ + ფოტოები public/images/projects/<slug>/.
export const PROJECT_CASES: ProjectCase[] = [];

export function projectUrl(lang: Lang, slug: string): string {
  const path = `projects/${slug}/`;
  return lang === 'ka' ? url(path) : url(`${lang}/${path}`);
}

export const projectUi: Record<
  Lang,
  {
    eyebrow: string;
    home: string;
    facts: string;
    location: string;
    year: string;
    area: string;
    duration: string;
    months: (n: number) => string;
    service: string;
    challenge: string;
    solution: string;
    scope: string;
    gallery: string;
    related: string;
    others: string;
    cta: string;
  }
> = {
  ka: {
    eyebrow: 'პროექტი',
    home: 'მთავარი',
    facts: 'პროექტის მონაცემები',
    location: 'ადგილი',
    year: 'წელი',
    area: 'ფართი',
    duration: 'ხანგრძლივობა',
    months: (n) => `${n} თვე`,
    service: 'სერვისი',
    challenge: 'ამოცანა',
    solution: 'რა გავაკეთეთ',
    scope: 'შესრულებული სამუშაოები',
    gallery: 'ფოტოები',
    related: 'შესრულებული პროექტები',
    others: 'სხვა პროექტები',
    cta: 'მსგავსი პროექტის შეფასება',
  },
  en: {
    eyebrow: 'Project',
    home: 'Home',
    facts: 'Project facts',
    location: 'Location',
    year: 'Year',
    area: 'Area',
    duration: 'Duration',
    months: (n) => `${n} month${n === 1 ? '' : 's'}`,
    service: 'Service',
    challenge: 'The brief',
    solution: 'What we did',
    scope: 'Scope of work',
    gallery: 'Photos',
    related: 'Completed projects',
    others: 'Other projects',
    cta: 'Get an estimate for a similar project',
  },
};
