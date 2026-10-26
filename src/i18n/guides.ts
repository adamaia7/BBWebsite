// რჩევები / სტატიები (SEO-სთვის: პასუხები კითხვებზე, რასაც ხალხი Google-ში ეძებს).
// თითო ჩანაწერი = ერთი გვერდი /guides/<slug>/ მისამართზე, ორივე ენაზე.
// შენიშვნა: ციფრები, ფასები და ვადები განზრახ არ არის, სანამ რეალური არ გვექნება.

import { url, type Lang } from './index';

export interface Guide {
  slug: string;
  /** <title>, საძიებო ფრაზით დასაწყისში */
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  /** გამოქვეყნების თარიღი, YYYY-MM-DD */
  published: string;
  sections: { h2: string; paragraphs: string[] }[];
  faq: { q: string; a: string }[];
  /** სერვისის გვერდი, რომელზეც სტატია ბოლოს მიუთითებს */
  service: string;
}

export const GUIDE_SLUGS = ['house-construction-stages'] as const;

export function guideUrl(lang: Lang, slug?: string): string {
  const path = slug ? `guides/${slug}/` : 'guides/';
  return lang === 'ka' ? url(path) : url(`${lang}/${path}`);
}

export const guideUi: Record<Lang, { eyebrow: string; title: string; metaTitle: string; metaDescription: string; lead: string; faq: string; read: string; service: string; home: string }> = {
  ka: {
    eyebrow: 'რჩევები',
    title: 'რჩევები მშენებლობასა და რემონტზე',
    metaTitle: 'რჩევები მშენებლობასა და რემონტზე | BAU BILD',
    metaDescription: 'პრაქტიკული რჩევები სახლის მშენებლობასა და რემონტზე: ეტაპები, დოკუმენტები და რა უნდა იცოდეთ სამუშაოს დაწყებამდე.',
    lead: 'რა უნდა იცოდეთ სახლის მშენებლობის ან რემონტის დაწყებამდე, მარტივად ახსნილი.',
    faq: 'ხშირი კითხვები',
    read: 'წაკითხვა',
    service: 'დაკავშირებული სერვისი',
    home: 'მთავარი',
  },
  en: {
    eyebrow: 'Guides',
    title: 'Construction and renovation guides',
    metaTitle: 'Construction and Renovation Guides | BAU BILD',
    metaDescription: 'Practical guides to building and renovating a house in Georgia: the stages, the paperwork and what to know before work starts.',
    lead: 'What to know before you start building or renovating, explained simply.',
    faq: 'Frequently asked questions',
    read: 'Read',
    service: 'Related service',
    home: 'Home',
  },
};

const ka: Guide[] = [
  {
    slug: GUIDE_SLUGS[0],
    metaTitle: 'სახლის მშენებლობის ეტაპები: პროექტიდან გასაღებამდე | BAU BILD',
    metaDescription:
      'სახლის მშენებლობის ეტაპები თანმიმდევრობით: ნაკვეთი და დოკუმენტები, პროექტი, ნებართვა, საძირკველი, შავი, თეთრი და მწვანე კარკასი, ჩაბარება.',
    h1: 'სახლის მშენებლობის ეტაპები: პროექტიდან გასაღების ჩაბარებამდე',
    lead: 'კერძო სახლის აშენება გრძელი პროცესია, მაგრამ ყოველთვის ერთი და იგივე თანმიმდევრობით მიდის. აქ ყველა ეტაპს მოკლედ ავხსნით, რომ იცოდეთ, რა გელით და რა უნდა მოამზადოთ წინასწარ.',
    published: '2026-10-26',
    sections: [
      {
        h2: '1. ნაკვეთი და დოკუმენტები',
        paragraphs: [
          'პირველ რიგში გადაამოწმეთ ნაკვეთის საკუთრება საჯარო რეესტრის ამონაწერით და გაარკვიეთ, რომელ ფუნქციურ ზონაში მდებარეობს. ზონაზეა დამოკიდებული, რა ზომისა და სიმაღლის სახლის აშენება შეიძლება (განაშენიანების კოეფიციენტები K1 და K2).',
          'ასევე ნახეთ, მიდის თუ არა ნაკვეთთან წყალი, კანალიზაცია, ელექტროენერგია და გაზი. თუ არა, მიერთების საკითხი მშენებლობის დაწყებამდე უნდა დაიგეგმოს.',
        ],
      },
      {
        h2: '2. გრუნტის კვლევა',
        paragraphs: [
          'გეოლოგიური კვლევა აჩვენებს, როგორ გრუნტზე დგება სახლი. ამ მონაცემებით კონსტრუქტორი ირჩევს საძირკვლის ტიპს და სიღრმეს. კვლევაზე დაზოგვა ხშირად შემდეგ ბზარებითა და ძვირი შეკეთებით ბრუნდება.',
        ],
      },
      {
        h2: '3. პროექტი',
        paragraphs: [
          'პროექტი ორი ძირითადი ნაწილისგან შედგება: არქიტექტურული (გეგმები, ფასადები, ოთახების განლაგება) და კონსტრუქციული (საძირკველი, კედლები, გადახურვები, არმირება). მას ემატება საინჟინრო ნაწილი: ელექტროობა, წყალი, კანალიზაცია, გათბობა და ვენტილაცია.',
          'კარგი პროექტი არის ზუსტი ხარჯთაღრიცხვის საფუძველი. რაც უფრო დეტალურია, მით ნაკლები სიურპრიზი ხვდება მშენებლობის დროს.',
        ],
      },
      {
        h2: '4. მშენებლობის ნებართვა',
        paragraphs: [
          'ნებართვას გასცემს ადგილობრივი მუნიციპალიტეტი, თბილისში ეს მერიის ურბანული განვითარების სამსახურია. განაცხადს თან ერთვის პროექტი და ნაკვეთის დოკუმენტები.',
          'მცირე ზომის ზოგიერთ ნაგებობას ნებართვა არ სჭირდება, მაგრამ ეს თქვენი ნაკვეთისა და პროექტისთვის წინასწარ უნდა დაზუსტდეს. ნებართვის გარეშე დაწყებული მშენებლობა ჯარიმითა და შეჩერებით შეიძლება დასრულდეს.',
        ],
      },
      {
        h2: '5. ხარჯთაღრიცხვა და ხელშეკრულება',
        paragraphs: [
          'პროექტის მიხედვით მზადდება ხარჯთაღრიცხვა: სამუშაოების და მასალების ჩამონათვალი ფასებით. ხელშეკრულებაში უნდა ჩაიწეროს სამუშაოს მოცულობა, ეტაპები, ვადები, გადახდის გრაფიკი და გარანტია.',
          'სჯობს, გადახდა ეტაპებზე იყოს მიბმული: შემდეგ ეტაპზე გადასვლამდე მიმდინარე ეტაპი ერთად მოწმდება.',
        ],
      },
      {
        h2: '6. საძირკველი',
        paragraphs: [
          'ნაკვეთის მომზადებისა და დაკვალვის შემდეგ იწყება მიწის სამუშაოები და საძირკვლის მოწყობა: არმირება, ბეტონის ჩასხმა და ჰიდროიზოლაცია. ბეტონს სიმტკიცის მოსაკრებად დრო სჭირდება და ამ ეტაპის აჩქარება არ შეიძლება.',
        ],
      },
      {
        h2: '7. შავი კარკასი',
        paragraphs: [
          'შავი კარკასი ნიშნავს, რომ დგას სახლის მზიდი კონსტრუქცია: კედლები, სვეტები, გადახურვები და კიბე. ამავე ეტაპზე ეწყობა სახურავი, რომ შენობა ნალექისგან დაცული იყოს.',
        ],
      },
      {
        h2: '8. თეთრი კარკასი',
        paragraphs: [
          'თეთრ კარკასზე ყენდება ფანჯრები და შესასვლელი კარი, გაჰყავთ საინჟინრო ქსელები (ელექტროობა, წყალი, კანალიზაცია, გათბობა), კედლები ილესება და იატაკზე კეთდება მოჭიმვა. პარალელურად შეიძლება ფასადზე მუშაობა: დათბუნება და მოპირკეთება.',
        ],
      },
      {
        h2: '9. მწვანე კარკასი და ინტერიერი',
        paragraphs: [
          'მწვანე კარკასი ანუ საცხოვრებლად მზა მდგომარეობა: იატაკი, კედლების საბოლოო მოპირკეთება, შიდა კარები, სველი წერტილები, განათება და სანტექნიკა. ამ ეტაპზე სასურველია ინტერიერის პროექტი უკვე მზად გქონდეთ, რომ შემდეგ არაფრის დანგრევა არ მოგიწიოთ.',
        ],
      },
      {
        h2: '10. ჩაბარება',
        paragraphs: [
          'დასრულების შემდეგ ობიექტი ერთად მოწმდება და შენიშვნები დასრულებამდე სწორდება. შენობის კლასის მიხედვით შეიძლება საჭირო გახდეს ექსპლუატაციაში მიღების აქტი, რომლის შემდეგაც სახლი საჯარო რეესტრში რეგისტრირდება.',
        ],
      },
    ],
    faq: [
      {
        q: 'რამდენ ხანს გრძელდება სახლის მშენებლობა?',
        a: 'ეს სახლის ფართზე, კონსტრუქციაზე, სეზონსა და ნებართვის ვადებზეა დამოკიდებული. ზუსტ გრაფიკს ეტაპების მიხედვით ხარჯთაღრიცხვასთან ერთად ვადგენთ.',
      },
      {
        q: 'რა განსხვავებაა შავ, თეთრ და მწვანე კარკასს შორის?',
        a: 'შავი კარკასი არის მზიდი კონსტრუქცია და სახურავი. თეთრს ემატება ფანჯრები, საინჟინრო ქსელები, ლესვა და მოჭიმვა. მწვანე კარკასი უკვე საცხოვრებლად მზა მდგომარეობაა.',
      },
      {
        q: 'შეიძლება მშენებლობა პროექტის გარეშე დავიწყო?',
        a: 'არ გირჩევთ. პროექტის გარეშე ვერც ნებართვას აიღებთ და ვერც ზუსტ ხარჯთაღრიცხვას მიიღებთ. ამის შედეგი თითქმის ყოველთვის გადახარჯვა და გადაკეთებაა.',
      },
      {
        q: 'შეგიძლიათ ყველა ეტაპი ერთმა გუნდმა გააკეთოს?',
        a: 'დიახ. BAU BILD სახლს საძირკვლიდან გასაღების ჩაბარებამდე აშენებს და მთელი პროცესის განმავლობაში ერთი პასუხისმგებელი პირი გყავთ.',
      },
    ],
    service: 'residential-construction',
  },
];

const en: Guide[] = [
  {
    slug: GUIDE_SLUGS[0],
    metaTitle: 'House Construction Stages in Georgia: From Design to Handover | BAU BILD',
    metaDescription:
      'The stages of building a house in Georgia, in order: plot and paperwork, design, permit, foundation, black, white and green frame, and handover.',
    h1: 'The stages of building a house: from design to handover',
    lead: 'Building a private house takes time, but it always follows the same order. Here is a short explanation of every stage, so you know what to expect and what to prepare in advance.',
    published: '2026-10-26',
    sections: [
      {
        h2: '1. The plot and its paperwork',
        paragraphs: [
          'First, confirm ownership of the plot with an extract from the Public Registry and find out which functional zone it is in. The zone decides how large and how tall a house you can build (the K1 and K2 development coefficients).',
          'Also check whether water, sewerage, electricity and gas reach the plot. If they do not, plan the connections before construction starts.',
        ],
      },
      {
        h2: '2. Soil survey',
        paragraphs: [
          'A geological survey shows what kind of ground the house will stand on. The structural engineer uses it to choose the type and depth of the foundation. Saving on the survey often comes back later as cracks and expensive repairs.',
        ],
      },
      {
        h2: '3. Design',
        paragraphs: [
          'The design has two main parts: architectural (plans, facades, room layout) and structural (foundation, walls, floor slabs, reinforcement). The engineering part is added to these: electrics, water, sewerage, heating and ventilation.',
          'A good design is the basis of an accurate estimate. The more detailed it is, the fewer surprises you meet on site.',
        ],
      },
      {
        h2: '4. Construction permit',
        paragraphs: [
          'Permits are issued by the local municipality; in Tbilisi this is the City Hall\'s Urban Development Service. The application includes the design and the plot documents.',
          'Some small structures do not need a permit, but check this for your plot and design in advance. Building without a permit can end in a fine and a stop order.',
        ],
      },
      {
        h2: '5. Estimate and contract',
        paragraphs: [
          'An estimate is prepared from the design: a list of works and materials with prices. The contract should set out the scope, stages, deadlines, payment schedule and warranty.',
          'It is better to tie payments to stages: each stage is checked together before moving on to the next.',
        ],
      },
      {
        h2: '6. Foundation',
        paragraphs: [
          'Once the plot is prepared and set out, earthworks and the foundation begin: reinforcement, pouring concrete and waterproofing. Concrete needs time to gain strength, and this stage cannot be rushed.',
        ],
      },
      {
        h2: '7. Black frame',
        paragraphs: [
          'Black frame means the load-bearing structure of the house is standing: walls, columns, floor slabs and stairs. The roof is built at this stage too, so the building is protected from the weather.',
        ],
      },
      {
        h2: '8. White frame',
        paragraphs: [
          'At white frame, windows and the entrance door are installed, the engineering networks are run (electrics, water, sewerage, heating), walls are plastered and floors are screeded. Facade work, insulation and cladding, can go on in parallel.',
        ],
      },
      {
        h2: '9. Green frame and interior',
        paragraphs: [
          'Green frame means ready to live in: flooring, final wall finishes, interior doors, bathrooms, lighting and plumbing. Ideally the interior design is ready by this stage, so nothing has to be torn out later.',
        ],
      },
      {
        h2: '10. Handover',
        paragraphs: [
          'When the work is finished, the house is inspected together and any remarks are fixed before handover. Depending on the building class, a commissioning act may be required, after which the house is registered with the Public Registry.',
        ],
      },
    ],
    faq: [
      {
        q: 'How long does it take to build a house?',
        a: 'It depends on the size of the house, the structure, the season and how long the permit takes. We set an exact stage-by-stage schedule together with the estimate.',
      },
      {
        q: 'What is the difference between black, white and green frame?',
        a: 'Black frame is the load-bearing structure and roof. White frame adds windows, engineering networks, plaster and screed. Green frame is ready to live in.',
      },
      {
        q: 'Can I start building without a design?',
        a: 'We do not recommend it. Without a design you cannot get a permit or an accurate estimate, and the result is almost always overspending and rework.',
      },
      {
        q: 'Can one team handle every stage?',
        a: 'Yes. BAU BILD builds houses from the foundation to handover, and you have one person responsible throughout the whole process.',
      },
    ],
    service: 'residential-construction',
  },
];

export const guides: Record<Lang, Guide[]> = { ka, en };
