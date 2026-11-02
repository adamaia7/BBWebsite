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

export const GUIDE_SLUGS = ['house-construction-stages', 'apartment-renovation'] as const;

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
  {
    slug: GUIDE_SLUGS[1],
    metaTitle: 'ბინის რემონტი თბილისში: რა უნდა იცოდეთ დაწყებამდე | BAU BILD',
    metaDescription:
      'ბინის რემონტის დაგეგმვა ნაბიჯ-ნაბიჯ: დიზაინი, ხარჯთაღრიცხვა, სამუშაოების თანმიმდევრობა, მეზობლები და ამხანაგობა, ჩაბარება.',
    h1: 'ბინის რემონტი: რა უნდა იცოდეთ დაწყებამდე',
    lead: 'რემონტზე ყველაზე მეტი დრო და ფული იქ იკარგება, სადაც დაწყებამდე არაფერი დაიგეგმა. აქ მოკლედ ავხსნით, რა უნდა გადაწყვიტოთ წინასწარ და რა თანმიმდევრობით მიდის სამუშაო.',
    published: '2026-11-02',
    sections: [
      {
        h2: '1. გადაწყვიტეთ, რა გინდათ',
        paragraphs: [
          'ჯერ განსაზღვრეთ, კოსმეტიკური რემონტი გჭირდებათ (შეღებვა, იატაკი, კარები) თუ სრული, ელექტროობისა და სანტექნიკის შეცვლით. ამაზეა დამოკიდებული ვადაც, ბიუჯეტიც და ის, შეგიძლიათ თუ არა ბინაში ცხოვრება სამუშაოს დროს.',
          'ძველ ბინაში სჯობს, ელექტროგაყვანილობა და მილები ერთხელ და სრულად შეიცვალოს: დასრულებული მოპირკეთების ქვეშ მათი შეცვლა გაცილებით ძვირი ჯდება.',
        ],
      },
      {
        h2: '2. დიზაინი და გეგმა',
        paragraphs: [
          'სამუშაოს დაწყებამდე უნდა იცოდეთ, სად იქნება როზეტები, განათება, სველი წერტილები და ავეჯი. ინტერიერის პროექტი ან თუნდაც დეტალური ნახაზი გიცავთ გადაკეთებისგან, როცა კედელი უკვე შეღებილია.',
          'თუ კედლის გატანას ან გადატანას გეგმავთ, ჯერ გაარკვიეთ, მზიდია თუ არა. მზიდი კონსტრუქციის შეცვლა სპეციალისტის დასკვნისა და შეთანხმების გარეშე არ შეიძლება.',
        ],
      },
      {
        h2: '3. ხარჯთაღრიცხვა და ხელშეკრულება',
        paragraphs: [
          'ხარჯთაღრიცხვაში ცალ-ცალკე უნდა ეწეროს სამუშაოები და მასალები. შეთანხმდით, ვინ ყიდულობს მასალას და როგორ ხდება ცვლილებების შეთანხმება სამუშაოს მიმდინარეობისას.',
          'ბიუჯეტში დატოვეთ რეზერვი გაუთვალისწინებელი ხარჯებისთვის: ძველ ბინაში კედლებისა და იატაკის გახსნისას ხშირად ჩნდება ის, რაც წინასწარ არ ჩანდა.',
        ],
      },
      {
        h2: '4. მეზობლები და ამხანაგობა',
        paragraphs: [
          'ხმაურიანი სამუშაოს დაწყებამდე გააფრთხილეთ მეზობლები და შეუთანხმდით ამხანაგობას ნაგვის გატანასა და ლიფტის გამოყენებაზე. ხმაურიან სამუშაოს დღისით გეგმავენ, საღამოს და დასვენების დღეებში კი ცდილობენ, მეზობლები არ შეაწუხონ.',
        ],
      },
      {
        h2: '5. სამუშაოების თანმიმდევრობა',
        paragraphs: [
          'ჯერ დემონტაჟი, შემდეგ „უხეში“ სამუშაოები: კედლების შეცვლა, ელექტროობა, წყალი და კანალიზაცია, გათბობა. შემდეგ ლესვა, მოჭიმვა და სველი წერტილების ჰიდროიზოლაცია.',
          'ბოლოს მოდის „სუფთა“ სამუშაოები: ფილა, შპაკლი და შეღებვა, იატაკი, კარები, განათება და სანტექნიკა. ამ თანმიმდევრობის დარღვევა თითქმის ყოველთვის ნიშნავს, რომ დასრულებული ზედაპირი თავიდან გასაკეთებელი ხდება.',
        ],
      },
      {
        h2: '6. ჩაბარება',
        paragraphs: [
          'დასრულებისას ბინა ერთად დაათვალიერეთ: შეამოწმეთ როზეტები, ონკანები, კარების დაკეტვა, ფილის სიბრტყე და ნაკერები. შენიშვნები ჩამოწერეთ და გასწორების შემდეგ ჩაიბარეთ. ითხოვეთ ელექტრო და სანტექნიკური ქსელის სქემა, ის მომავალში დაგჭირდებათ.',
        ],
      },
    ],
    faq: [
      {
        q: 'რამდენ ხანს გრძელდება ბინის რემონტი?',
        a: 'ეს ბინის ფართზე, რემონტის სახეობასა და მასალების მიწოდებაზეა დამოკიდებული. ზუსტ გრაფიკს ობიექტის ნახვისა და ხარჯთაღრიცხვის შემდეგ ვადგენთ.',
      },
      {
        q: 'შეიძლება ბინაში ცხოვრება რემონტის დროს?',
        a: 'კოსმეტიკური რემონტისას ხანდახან შესაძლებელია, ოთახ-ოთახ თუ ვიმუშავებთ. სრული რემონტისას, როცა წყალი და ელექტროობა იცვლება, სჯობს დროებით სხვაგან იცხოვროთ.',
      },
      {
        q: 'ვინ ყიდულობს მასალას?',
        a: 'ორივე ვარიანტი შესაძლებელია. მთავარია, ეს ხელშეკრულებაში წინასწარ ჩაიწეროს, რომ გაუგებრობა არ მოხდეს.',
      },
      {
        q: 'რემონტს და ინტერიერის დიზაინს ერთი გუნდი აკეთებს?',
        a: 'დიახ. BAU BILD რემონტს დემონტაჟიდან ჩაბარებამდე ასრულებს და მთელი პროცესის განმავლობაში ერთი პასუხისმგებელი პირი გყავთ.',
      },
    ],
    service: 'renovation-interior',
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
  {
    slug: GUIDE_SLUGS[1],
    metaTitle: 'Apartment Renovation in Tbilisi: What to Know Before You Start | BAU BILD',
    metaDescription:
      'Planning an apartment renovation step by step: design, estimate, the order of works, neighbours and the building association, and handover.',
    h1: 'Apartment renovation: what to know before you start',
    lead: 'Most of the time and money lost on a renovation is lost where nothing was planned in advance. Here is what to decide up front and the order the work follows.',
    published: '2026-11-02',
    sections: [
      {
        h2: '1. Decide what you want',
        paragraphs: [
          'First decide whether you need a cosmetic renovation (paint, flooring, doors) or a full one that replaces the electrics and plumbing. This sets the timeline, the budget and whether you can live in the apartment while the work goes on.',
          'In an older apartment it is better to replace the wiring and pipes once and completely: replacing them under finished surfaces costs far more.',
        ],
      },
      {
        h2: '2. Design and layout',
        paragraphs: [
          'Before work starts you should know where the sockets, lighting, bathrooms and furniture will go. An interior design, or at least a detailed drawing, protects you from rework after the walls are already painted.',
          'If you plan to remove or move a wall, first find out whether it is load-bearing. A load-bearing structure must not be changed without an engineer\'s assessment and approval.',
        ],
      },
      {
        h2: '3. Estimate and contract',
        paragraphs: [
          'The estimate should list works and materials separately. Agree who buys the materials and how changes are approved while the work is under way.',
          'Keep a reserve in the budget for the unexpected: opening up walls and floors in an older apartment often reveals what could not be seen beforehand.',
        ],
      },
      {
        h2: '4. Neighbours and the building association',
        paragraphs: [
          'Before noisy work begins, warn the neighbours and agree with the building association on rubbish removal and use of the lift. Noisy work is planned for the daytime, and evenings and days off are kept as quiet as possible.',
        ],
      },
      {
        h2: '5. The order of works',
        paragraphs: [
          'Demolition comes first, then the rough work: changing walls, electrics, water and sewerage, heating. After that come plastering, screeding and waterproofing of wet areas.',
          'The finishing work comes last: tiling, skimming and painting, flooring, doors, lighting and sanitary ware. Breaking this order almost always means a finished surface has to be redone.',
        ],
      },
      {
        h2: '6. Handover',
        paragraphs: [
          'When the work is finished, inspect the apartment together: check sockets, taps, door locks, tile flatness and joints. Write the remarks down and accept the job once they are fixed. Ask for the wiring and plumbing layout; you will need it later.',
        ],
      },
    ],
    faq: [
      {
        q: 'How long does an apartment renovation take?',
        a: 'It depends on the size of the apartment, the type of renovation and material deliveries. We set an exact schedule after seeing the apartment and preparing the estimate.',
      },
      {
        q: 'Can I live in the apartment during the renovation?',
        a: 'With a cosmetic renovation it is sometimes possible if we work room by room. With a full renovation, when water and electrics are replaced, it is better to stay elsewhere for a while.',
      },
      {
        q: 'Who buys the materials?',
        a: 'Either way works. What matters is that it is written into the contract in advance to avoid misunderstandings.',
      },
      {
        q: 'Does one team handle both the renovation and the interior?',
        a: 'Yes. BAU BILD carries out renovations from demolition to handover, and you have one person responsible throughout the whole process.',
      },
    ],
    service: 'renovation-interior',
  },
];

export const guides: Record<Lang, Guide[]> = { ka, en };
