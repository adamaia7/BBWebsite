// სერვისების ცალკე გვერდები (SEO-სთვის). თითო ჩანაწერი = ერთი გვერდი /services/<slug>/ მისამართზე.
// სიის რიგი ემთხვევა dict.<lang>.services.items-ის რიგს, რომ მთავარი გვერდის ბარათები სწორ გვერდზე მიდიოდეს.
// შენიშვნა: ტექსტებში ციფრები და ფასები განზრახ არ არის, სანამ რეალური არ გვექნება.

import { url, type Lang } from './index';

export interface ServicePage {
  slug: string;
  /** <title>, საძიებო ფრაზით დასაწყისში */
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  body: string[];
  includesTitle: string;
  includes: string[];
  faq: { q: string; a: string }[];
}

export const SERVICE_SLUGS = [
  'residential-construction',
  'commercial-construction',
  'schools-kindergartens',
  'facade-roofing',
  'renovation-interior',
] as const;

export function serviceUrl(lang: Lang, slug: string): string {
  return lang === 'ka' ? url(`services/${slug}/`) : url(`${lang}/services/${slug}/`);
}

export const serviceUi: Record<Lang, { eyebrow: string; faq: string; cta: string; ctaText: string; call: string; others: string; home: string }> = {
  ka: {
    eyebrow: 'სერვისი',
    faq: 'ხშირი კითხვები',
    cta: 'გაქვთ პროექტი?',
    ctaText: 'აღგვიწერეთ სამუშაო და 24 საათში გიპასუხებთ.',
    call: 'დაგვიკავშირდით',
    others: 'სხვა სერვისები',
    home: 'მთავარი',
  },
  en: {
    eyebrow: 'Service',
    faq: 'Frequently asked questions',
    cta: 'Have a project?',
    ctaText: 'Describe the job and we will reply within 24 hours.',
    call: 'Contact us',
    others: 'Other services',
    home: 'Home',
  },
};

const ka: ServicePage[] = [
  {
    slug: SERVICE_SLUGS[0],
    metaTitle: 'სახლის მშენებლობა თბილისში და მთელ საქართველოში | BAU BILD',
    metaDescription:
      'კერძო სახლისა და აგარაკის მშენებლობა სრული ციკლით: საძირკველი, კარკასი, სახურავი, ფასადი და ინტერიერი. ერთი გუნდი, პროექტიდან გასაღების ჩაბარებამდე.',
    h1: 'კერძო სახლისა და აგარაკის მშენებლობა',
    lead: 'ვაშენებთ საცხოვრებელ სახლს ნულიდან: საძირკვლიდან გასაღების ჩაბარებამდე, ერთი გუნდით და ერთი პასუხისმგებელი პირით.',
    body: [
      'სახლის აშენება დიდი გადაწყვეტილებაა და ბევრ დეტალს მოიცავს. ჩვენ ვიღებთ მთელ პროცესს: ვამზადებთ ხარჯთაღრიცხვას, ვგეგმავთ ვადებს, ვაწყობთ საძირკველს და კარკასს, ვხურავთ სახურავს, ვაკეთებთ ფასადს და შიდა სამუშაოებს.',
      'ვმუშაობთ როგორც თბილისში, ისე მის შემოგარენში და საქართველოს სხვა ქალაქებში. კლიენტს ყოველ ეტაპზე აქვს ინფორმაცია, რა გაკეთდა და რა არის შემდეგი ნაბიჯი.',
    ],
    includesTitle: 'რას მოიცავს',
    includes: [
      'კონსულტაცია და ადგილზე დათვალიერება',
      'ხარჯთაღრიცხვა და სამუშაო გრაფიკი',
      'საძირკველი და მიწის სამუშაოები',
      'კარკასი: ბეტონი, ბლოკი ან ლითონი',
      'სახურავის მოწყობა',
      'ფასადი და თბოიზოლაცია',
      'შიდა სამუშაოები: შავიდან მზა ინტერიერამდე',
      'ობიექტის ჩაბარება',
    ],
    faq: [
      {
        q: 'რამდენი დრო სჭირდება სახლის აშენებას?',
        a: 'ვადა დამოკიდებულია სახლის ზომაზე, პროექტზე და მასალებზე. ზუსტ გრაფიკს ობიექტის დათვალიერებისა და ხარჯთაღრიცხვის შემდეგ ვადგენთ.',
      },
      {
        q: 'შეგიძლიათ ააშენოთ ჩემი პროექტით?',
        a: 'დიახ. ვმუშაობთ როგორც კლიენტის მზა პროექტით, ისე ვეხმარებით პროექტის მომზადებაში.',
      },
      {
        q: 'სად მუშაობთ?',
        a: 'თბილისში და მთელ საქართველოში.',
      },
    ],
  },
  {
    slug: SERVICE_SLUGS[1],
    metaTitle: 'კომერციული ობიექტების მშენებლობა და რემონტი | BAU BILD',
    metaDescription:
      'აფთიაქების, მაღაზიების, ოფისებისა და ბენზინგასამართი სადგურების მშენებლობა და რემონტი. ვადების დაცვით, რომ ბიზნესმა დროზე გაიხსნას.',
    h1: 'კომერციული ობიექტების მშენებლობა და რემონტი',
    lead: 'ვაშენებთ და ვარემონტებთ აფთიაქებს, მაღაზიებს, ოფისებსა და ბენზინგასამართ სადგურებს. ვიცით, რომ ბიზნესისთვის ყოველი დღე ფულია, ამიტომ ვადებს ვიცავთ.',
    body: [
      'კომერციულ ობიექტზე მთავარია ვადა და ხარისხი: ფართი უნდა გაიხსნას დაგეგმილ დღეს და სწრაფად არ დაზიანდეს ყოველდღიური დატვირთვით. ამიტომ სამუშაოს წინასწარ ვგეგმავთ და ეტაპებს გრაფიკით ვასრულებთ.',
      'ვმუშაობთ ბრენდის სტანდარტებით: თუ ქსელს აქვს დიზაინის წიგნი ან ტექნიკური მოთხოვნები, ზუსტად მათ მიხედვით ვაწყობთ ობიექტს.',
    ],
    includesTitle: 'რას მოიცავს',
    includes: [
      'ახალი კომერციული შენობის მშენებლობა',
      'არსებული ფართის რეკონსტრუქცია და რემონტი',
      'ვიტრინები, ფასადი და შესასვლელი',
      'შიდა მოპირკეთება ბრენდის სტანდარტით',
      'ინჟინერიის კოორდინაცია: ელექტროობა, წყალი, ვენტილაცია',
      'ობიექტის ჩაბარება გახსნისთვის',
    ],
    faq: [
      {
        q: 'შეგიძლიათ იმუშაოთ ღამით ან შაბათ-კვირას?',
        a: 'თუ ობიექტი მუშაობს და დღისით სამუშაო შეუძლებელია, გრაფიკს ერთად ვადგენთ.',
      },
      {
        q: 'ქსელის რამდენიმე ობიექტზე ერთად მუშაობთ?',
        a: 'დიახ, შეგვიძლია რამდენიმე ობიექტის პარალელურად აწყობა, სხვადასხვა ქალაქშიც.',
      },
    ],
  },
  {
    slug: SERVICE_SLUGS[2],
    metaTitle: 'სკოლისა და საბავშვო ბაღის მშენებლობა და რემონტი | BAU BILD',
    metaDescription:
      'სკოლების და საბავშვო ბაღების მშენებლობა და რემონტი უსაფრთხოების მოთხოვნების დაცვით. სამუშაოს ვგეგმავთ ისე, რომ სასწავლო წლის დაწყებას დაემთხვეს.',
    h1: 'სკოლებისა და საბავშვო ბაღების მშენებლობა',
    lead: 'ვაშენებთ და ვარემონტებთ სკოლებსა და საბავშვო ბაღებს. ბავშვებისთვის განკუთვნილ შენობაში უსაფრთხოება და ხარისხი პირველ ადგილზეა.',
    body: [
      'საგანმანათლებლო ობიექტს განსაკუთრებული მოთხოვნები აქვს: უსაფრთხო მასალები, სწორი განათება და ვენტილაცია, ხელმისაწვდომობა და ხანძარსაწინააღმდეგო ნორმები. ამ ყველაფერს პროექტის ეტაპიდანვე ვითვალისწინებთ.',
      'სამუშაოს ისე ვგეგმავთ, რომ ობიექტი სასწავლო წლის დაწყებამდე ჩაბარდეს, ან სწავლის პარალელურად მიმდინარე რემონტმა პროცესი არ შეაფერხოს.',
    ],
    includesTitle: 'რას მოიცავს',
    includes: [
      'ახალი სკოლის ან ბაღის შენობის მშენებლობა',
      'არსებული შენობის რეკონსტრუქცია',
      'საკლასო ოთახების და სათამაშოების რემონტი',
      'უსაფრთხო, ადვილად მოსავლელი მასალები',
      'სანიტარიული კვანძები და სამზარეულო',
      'ეზოს და შესასვლელის მოწყობა',
    ],
    faq: [
      {
        q: 'შეგიძლიათ რემონტი არდადეგებზე დაასრულოთ?',
        a: 'დიახ, სამუშაოს გრაფიკს არდადეგებზე ვგეგმავთ, რომ სასწავლო წელი დროზე დაიწყოს.',
      },
      {
        q: 'მუშაობთ სახელმწიფო ტენდერებზე?',
        a: 'დაგვიკავშირდით და კონკრეტულ პირობებს ერთად განვიხილავთ.',
      },
    ],
  },
  {
    slug: SERVICE_SLUGS[3],
    metaTitle: 'სახურავის შეკეთება და ფასადის მოპირკეთება თბილისში | BAU BILD',
    metaDescription:
      'სახურავის შეკეთება, გადახურვა და ჟონვის აღმოფხვრა, ფასადის მოპირკეთება და თბოიზოლაცია თბილისში და მთელ საქართველოში. კერძო სახლები, საცხოვრებელი და კომერციული შენობები.',
    h1: 'სახურავის შეკეთება და ფასადის მოპირკეთება',
    lead: 'ვაწყობთ ახალ სახურავს და ფასადს, ვაკეთებთ გადახურვას, შეკეთებასა და თბოიზოლაციას. კარგი სახურავი და ფასადი შენობას ათწლეულობით იცავს.',
    body: [
      'სახურავი და ფასადი შენობის „გარსია“: ისინი იცავს წვიმისგან, ქარისა და სიცივისგან და განსაზღვრავს, როგორ გამოიყურება სახლი. ზედაპირულად შესრულებული სამუშაო ჟონვითა და ბზარებით ვლინდება, ამიტომ ყველა ფენას სწორად ვაწყობთ.',
      'ვმუშაობთ როგორც ახალ შენობებზე, ისე ძველის განახლებაზე: ვცვლით დაზიანებულ სახურავს, ვაკეთებთ ფასადის თბოიზოლაციას და ახალ მოპირკეთებას.',
      'შეკეთებისას ჯერ ადგილზე ვამოწმებთ სახურავის საფარს, კვანძებს, ღარებს და ფასადის მოპირკეთებას, ვპოულობთ, საიდან შემოდის წყალი, და შემდეგ გთავაზობთ ადგილობრივ შეკეთებას ან დაზიანებული ნაწილის შეცვლას.',
      'ბაზა თბილისშია, სახურავისა და ფასადის სამუშაოებს მთელ საქართველოში ვიღებთ.',
    ],
    includesTitle: 'რას მოიცავს',
    includes: [
      'ახალი სახურავის მოწყობა',
      'გადახურვა და ჟონვის აღმოფხვრა',
      'წყალსაწრეტი სისტემა',
      'ფასადის თბოიზოლაცია',
      'ფასადის მოპირკეთება: ბათქაში, ფილა, ვენტილირებადი ფასადი',
      'ძველი ფასადის აღდგენა და განახლება',
    ],
    faq: [
      {
        q: 'სახურავი ჟონავს. მთლიანად შეცვლაა საჭირო?',
        a: 'ყოველთვის არა. ჯერ ადგილზე ვათვალიერებთ და ვადგენთ, საკმარისია შეკეთება თუ საჭიროა გადახურვა.',
      },
      {
        q: 'რომელ სეზონზე ჯობს ფასადის სამუშაოები?',
        a: 'სველი სამუშაოები, მაგალითად ბათქაში და თბოიზოლაცია, თბილ და მშრალ ამინდში სრულდება. გრაფიკს ამის გათვალისწინებით ვგეგმავთ.',
      },
      {
        q: 'აკეთებთ სახურავის სასწრაფო შეკეთებას?',
        a: 'დიახ. როცა სახურავი ჟონავს, ჯერ წყლის შემოსვლას ვაჩერებთ, რომ შიდა სივრცე არ დაზიანდეს, შემდეგ კი სრულ შეკეთებას ვგეგმავთ.',
      },
      {
        q: 'მუშაობთ თბილისის გარეთ?',
        a: 'დიახ. ბაზა თბილისშია, სახურავისა და ფასადის პროექტებს მთელ საქართველოში ვიღებთ.',
      },
    ],
  },
  {
    slug: SERVICE_SLUGS[4],
    metaTitle: 'ბინისა და სახლის რემონტი თბილისში | BAU BILD',
    metaDescription:
      'ბინისა და სახლის რემონტი შავი კარკასიდან მზა ინტერიერამდე: ტიხრები, იატაკი, კედლები, სველი წერტილები, სამზარეულო და აბაზანა. ერთი გუნდი სრულ ციკლზე.',
    h1: 'ბინისა და სახლის რემონტი თბილისში: შავი კარკასიდან მზა ინტერიერამდე',
    lead: 'ვაკეთებთ რემონტს შავი კარკასიდან მზა ინტერიერამდე. ერთი გუნდი ასრულებს ყველა სამუშაოს, ასე რომ სხვადასხვა ხელოსნის კოორდინაცია აღარ გიწევთ.',
    body: [
      'რემონტში ყველაზე რთული ხშირად სამუშაოს ორგანიზებაა: ვინ, როდის და რა თანმიმდევრობით გააკეთებს. ჩვენ ამას ვიღებთ: ერთ გეგმაში ვაერთიანებთ ელექტროობას, სანტექნიკას, ტიხრებს, იატაკს, კედლებს და მოპირკეთებას.',
      'ვმუშაობთ ახალ აშენებულ ბინებზე შავ ან თეთრ კარკასში, ასევე ძველი ბინებისა და სახლების სრულ განახლებაზე.',
    ],
    includesTitle: 'რას მოიცავს',
    includes: [
      'შავი და თეთრი კარკასის მოყვანა მზა მდგომარეობამდე',
      'ტიხრები, თაბაშირ-მუყაო და შეკიდული ჭერი',
      'იატაკი: მოჭიმვა, ფილა, ლამინატი, პარკეტი',
      'კედლები: ლესვა, შპაკლი, შეღებვა',
      'აბაზანისა და სამზარეულოს რემონტი',
      'ელექტრო და სანტექნიკური სამუშაოები',
      'ძველი ბინის ან სახლის სრული განახლება',
    ],
    faq: [
      {
        q: 'შეგიძლიათ მხოლოდ აბაზანის ან სამზარეულოს რემონტი?',
        a: 'დიახ, ვიღებთ როგორც სრულ რემონტს, ისე ცალკეულ ოთახებს.',
      },
      {
        q: 'მასალებს თქვენ ყიდულობთ?',
        a: 'როგორც გირჩევნიათ: შეგვიძლია მასალები ჩვენ შევარჩიოთ და შევიძინოთ, ან თქვენ მიერ შერჩეულით ვიმუშაოთ.',
      },
      {
        q: 'როგორ იწყება რემონტი?',
        a: 'ვნახულობთ ბინას ან სახლს, ვთანხმდებით, რისი შეცვლა გსურთ, და ვამზადებთ ხარჯთაღრიცხვას, სადაც სამუშაოები და მასალები ცალ-ცალკეა. სამუშაო გეგმისა და ხარჯთაღრიცხვის შეთანხმების შემდეგ იწყება.',
      },
      {
        q: 'ძველი ბინის რემონტსაც აკეთებთ?',
        a: 'დიახ. შავი და თეთრი კარკასის გარდა, ვაკეთებთ ძველი ბინებისა და სახლების სრულ განახლებას, მათ შორის ელექტროგაყვანილობისა და სანტექნიკის შეცვლას.',
      },
    ],
  },
];

const en: ServicePage[] = [
  {
    slug: SERVICE_SLUGS[0],
    metaTitle: 'Home Builders in Tbilisi and Across Georgia | BAU BILD',
    metaDescription:
      'Custom home builder in Tbilisi and across Georgia: private houses built as a full cycle, from foundation and roof to facade and interior. One team.',
    h1: 'Private house and country home construction',
    lead: 'We build homes from the ground up, from the foundation to handing over the keys, with one team and one person responsible.',
    body: [
      'Building a house is a big decision with many details. We take on the whole process: cost estimate, schedule, foundation and structure, roof, facade and interior works.',
      'We work in Tbilisi, the surrounding area and other cities across Georgia. At every stage the client knows what has been done and what comes next.',
    ],
    includesTitle: 'What is included',
    includes: [
      'Consultation and site visit',
      'Cost estimate and work schedule',
      'Foundation and groundwork',
      'Structure: concrete, block or steel',
      'Roofing',
      'Facade and insulation',
      'Interior works, from bare shell to finished',
      'Handover',
    ],
    faq: [
      {
        q: 'How long does it take to build a house?',
        a: 'It depends on the size, design and materials. We set an exact schedule after the site visit and cost estimate.',
      },
      {
        q: 'Can you build to my own design?',
        a: 'Yes. We work from the client’s finished design or help prepare one.',
      },
      {
        q: 'Where do you work?',
        a: 'In Tbilisi and across Georgia.',
      },
    ],
  },
  {
    slug: SERVICE_SLUGS[1],
    metaTitle: 'Commercial Construction and Fit-Out | BAU BILD',
    metaDescription:
      'Construction and renovation of pharmacies, shops, offices and petrol stations. On schedule, so your business opens on time.',
    h1: 'Commercial construction and renovation',
    lead: 'We build and renovate pharmacies, shops, offices and petrol stations. For a business every day counts, so we keep to the schedule.',
    body: [
      'On a commercial project, time and quality matter most: the space has to open on the planned day and stand up to daily use. We plan the work in advance and deliver it stage by stage.',
      'We follow brand standards: if your chain has a design book or technical requirements, we fit out the space exactly to them.',
    ],
    includesTitle: 'What is included',
    includes: [
      'New commercial buildings',
      'Reconstruction and renovation of existing spaces',
      'Shopfronts, facade and entrance',
      'Interior finishing to brand standards',
      'Coordination of electrics, plumbing and ventilation',
      'Handover ready for opening',
    ],
    faq: [
      {
        q: 'Can you work at night or on weekends?',
        a: 'If the site is open and daytime work is not possible, we agree the schedule together.',
      },
      {
        q: 'Do you work on several sites of a chain at once?',
        a: 'Yes, we can fit out several sites in parallel, including in different cities.',
      },
    ],
  },
  {
    slug: SERVICE_SLUGS[2],
    metaTitle: 'School and Kindergarten Construction and Renovation | BAU BILD',
    metaDescription:
      'Construction and renovation of schools and kindergartens to safety requirements. Planned around the start of the school year.',
    h1: 'School and kindergarten construction',
    lead: 'We build and renovate schools and kindergartens. In a building for children, safety and quality come first.',
    body: [
      'Educational buildings have special requirements: safe materials, proper lighting and ventilation, accessibility and fire safety. We account for all of this from the design stage.',
      'We plan the work so the building is handed over before the school year starts, or so that renovation during term does not disrupt lessons.',
    ],
    includesTitle: 'What is included',
    includes: [
      'New school or kindergarten buildings',
      'Reconstruction of existing buildings',
      'Classroom and playroom renovation',
      'Safe, easy-to-clean materials',
      'Bathrooms and kitchens',
      'Yard and entrance works',
    ],
    faq: [
      {
        q: 'Can you finish a renovation during the holidays?',
        a: 'Yes, we schedule the work for the holidays so the school year starts on time.',
      },
      {
        q: 'Do you take part in public tenders?',
        a: 'Contact us and we will discuss the specific terms together.',
      },
    ],
  },
  {
    slug: SERVICE_SLUGS[3],
    metaTitle: 'Roofing and Facade Contractor in Tbilisi: Roof and Siding Repair | BAU BILD',
    metaDescription:
      'Local roofing and construction company in Tbilisi and across Georgia: roof repair and replacement, leak repair, facade cladding (siding) repair and insulation.',
    h1: 'Roofing and facade contractor: roof and siding repair',
    lead: 'We install new roofs and facades and handle re-roofing, repairs and insulation. A good roof and facade protect a building for decades.',
    body: [
      'The roof and facade are the building’s shell: they keep out rain, wind and cold and define how the house looks. Rushed work shows up as leaks and cracks, so we build every layer properly.',
      'We work on new buildings and on renewing old ones: replacing damaged roofs, insulating facades and applying new cladding.',
      'For repairs we start with an on-site inspection of the roof covering, flashings, gutters and the facade cladding (siding, render or tiles), find where water gets in, and then propose either a local repair or a replacement of the damaged section.',
      'We work as a local roofing and construction team in Tbilisi and travel to projects across Georgia.',
    ],
    includesTitle: 'What is included',
    includes: [
      'New roof installation',
      'Re-roofing and leak repair',
      'Gutters and drainage',
      'Facade insulation',
      'Facade cladding: render, tiles, ventilated facade',
      'Restoring and renewing old facades',
    ],
    faq: [
      {
        q: 'My roof leaks. Does it need replacing?',
        a: 'Not always. We inspect it on site first and decide whether a repair is enough or re-roofing is needed.',
      },
      {
        q: 'Which season is best for facade work?',
        a: 'Wet work such as render and insulation is done in warm, dry weather, and we plan the schedule around it.',
      },
      {
        q: 'Do you repair facade cladding and siding, or only replace it?',
        a: 'Both. Damaged panels, cracked render or loose tiles can often be repaired in sections. If the insulation behind the cladding is wet or damaged, we replace that part as well.',
      },
      {
        q: 'Do you do roof and siding repair together?',
        a: 'Yes. Leaks often appear where the roof meets the walls, so we inspect the roof, gutters and facade together and fix them as one job.',
      },
      {
        q: 'Do you work outside Tbilisi?',
        a: 'Yes. We are based in Tbilisi and take roofing and facade projects across Georgia.',
      },
    ],
  },
  {
    slug: SERVICE_SLUGS[4],
    metaTitle: 'Interior Renovation in Tbilisi: Apartments and Houses | BAU BILD',
    metaDescription:
      'Interior renovation in Tbilisi from bare shell to finished home: partitions, floors, walls, bathrooms and kitchens. One renovation team for the full cycle.',
    h1: 'Interior renovation in Tbilisi: apartments and houses',
    lead: 'We renovate from bare shell to finished interior. One team does all the work, so you do not have to coordinate different tradespeople.',
    body: [
      'The hardest part of a renovation is often the organisation: who does what, when and in which order. We take that on and bring electrics, plumbing, partitions, floors, walls and finishes into one plan.',
      'We work on new-build apartments in shell or white-box condition, and on full renewals of older apartments and houses.',
    ],
    includesTitle: 'What is included',
    includes: [
      'Bringing shell and white-box apartments to finished condition',
      'Partitions, drywall and suspended ceilings',
      'Floors: screed, tiles, laminate, parquet',
      'Walls: plastering, filling, painting',
      'Bathroom and kitchen renovation',
      'Electrical and plumbing work',
      'Full renewal of older apartments and houses',
    ],
    faq: [
      {
        q: 'Can you renovate just a bathroom or kitchen?',
        a: 'Yes, we take on both full renovations and individual rooms.',
      },
      {
        q: 'Do you buy the materials?',
        a: 'As you prefer: we can choose and buy the materials, or work with ones you have chosen.',
      },
      {
        q: 'How does a renovation start?',
        a: 'We visit the apartment or house, agree on what you want to change, and prepare a cost estimate with works and materials listed separately. Work starts once the plan and estimate are agreed.',
      },
      {
        q: 'Do you renovate older apartments, not just new builds?',
        a: 'Yes. Besides shell and white-box apartments, we do full renewals of older apartments and houses, including replacing electrics and plumbing.',
      },
    ],
  },
];

export const servicePages: Record<Lang, ServicePage[]> = { ka, en };
