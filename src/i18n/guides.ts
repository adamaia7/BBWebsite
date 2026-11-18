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

export const GUIDE_SLUGS = [
  'house-construction-stages',
  'apartment-renovation',
  'house-construction-cost',
  'black-white-green-frame',
] as const;

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
  {
    slug: GUIDE_SLUGS[2],
    metaTitle: 'სახლის მშენებლობის ხარჯთაღრიცხვა: რა განსაზღვრავს ფასს | BAU BILD',
    metaDescription:
      'რისგან შედგება სახლის მშენებლობის ხარჯთაღრიცხვა და რა მოქმედებს ფასზე: ნაკვეთი, გრუნტი, პროექტი, კონსტრუქცია, მასალები, კარკასის დონე და კომუნიკაციები.',
    h1: 'სახლის მშენებლობის ხარჯთაღრიცხვა: რა განსაზღვრავს ფასს',
    lead: 'კითხვაზე „რა ღირს სახლის აშენება“ ერთი ციფრით პასუხი არ არსებობს: ორი ერთნაირი ფართის სახლი შეიძლება სრულიად სხვადასხვა ფასი დაჯდეს. აქ ავხსნით, რისგან შედგება ხარჯთაღრიცხვა და რომელი გადაწყვეტილებები ცვლის ფასს ყველაზე მეტად.',
    published: '2026-11-18',
    sections: [
      {
        h2: '1. რატომ არ არსებობს ერთი ფასი კვადრატულ მეტრზე',
        paragraphs: [
          'კვადრატული მეტრის ფასი მოსახერხებელია შესადარებლად, მაგრამ ის ბევრს მალავს. ერთ შემთხვევაში მასში შედის მხოლოდ შავი კარკასი, მეორეში სახურავი და ფასადიც, მესამეში კი მზა ინტერიერი.',
          'ამიტომ ორი შეთავაზების შედარებისას ყოველთვის იკითხეთ, რა შედის ფასში და რა არა. ზუსტი ფასი მხოლოდ პროექტისა და ობიექტის ნახვის შემდეგ შედგენილი ხარჯთაღრიცხვით დგინდება.',
        ],
      },
      {
        h2: '2. ნაკვეთი და გრუნტი',
        paragraphs: [
          'დახრილ ნაკვეთზე საჭიროა მიწის სამუშაოები და ხშირად საყრდენი კედლები. სუსტ ან წყალგაჯერებულ გრუნტზე საძირკველი უფრო ღრმა და მასიური გამოდის.',
          'ამიტომ გრუნტის კვლევა ხარჯი კი არა, დაზოგვაა: ის აჩვენებს, რა საძირკველი გჭირდებათ, და გიცავთ როგორც ზედმეტი ხარჯისგან, ისე ბზარებისგან მომავალში.',
        ],
      },
      {
        h2: '3. პროექტი და კონსტრუქცია',
        paragraphs: [
          'სახლის ფორმა ფასზე პირდაპირ მოქმედებს. მარტივი, კომპაქტური გეგმა ნაკლები კედლით, კუთხით და სახურავის ქანობით იაფია, ვიდრე რთული ფორმა დიდი კონსოლებითა და მინის ფართო ზედაპირებით.',
          'მნიშვნელოვანია კონსტრუქციის სისტემაც: რკინაბეტონის კარკასი, ბლოკის მზიდი კედლები თუ ლითონის ან ხის კარკასი. თითოეულს თავისი ღირებულება, ვადა და შესაბამისი ნაკვეთი აქვს.',
        ],
      },
      {
        h2: '4. კარკასის დონე: შავი, თეთრი, მწვანე',
        paragraphs: [
          'შავი კარკასი არის კონსტრუქცია, კედლები და სახურავი. თეთრ კარკასში ემატება ლესვა, მოჭიმვა, კომუნიკაციების გაყვანა და ფანჯრები. მწვანე კარკასი კი ნიშნავს, რომ დარჩენილია მხოლოდ საბოლოო მოპირკეთება.',
          'რაც უფრო მაღალია მზადყოფნა, მით მაღალია ფასი, მაგრამ მით ნაკლებად გიწევთ ცალკეული ხელოსნების მოძებნა და კოორდინაცია.',
        ],
      },
      {
        h2: '5. მასალები',
        paragraphs: [
          'ერთი და იგივე სამუშაო სხვადასხვა მასალით სრულიად სხვა ფასი ჯდება: ფანჯრის პროფილი, სახურავის საფარი, ფასადის სისტემა, თბოიზოლაციის სისქე, იატაკი და სანტექნიკა.',
          'კარგი თბოიზოლაცია და ფანჯრები მშენებლობისას ძვირი ჩანს, მაგრამ წლების განმავლობაში გათბობასა და გაგრილებაზე ზოგავს. ამიტომ მასალებს მხოლოდ ფასით არ ვარჩევთ.',
        ],
      },
      {
        h2: '6. კომუნიკაციები, დოკუმენტები და რეზერვი',
        paragraphs: [
          'ხარჯთაღრიცხვაში ხშირად გამორჩება წყლის, კანალიზაციის, ელექტროობისა და გაზის მიერთება, ასევე პროექტისა და ნებართვის ხარჯი. დაწყებამდე გაარკვიეთ, რა მიდის ნაკვეთამდე და რა არის გასაყვანი.',
          'კარგ ბიუჯეტს ყოველთვის აქვს რეზერვი გაუთვალისწინებელი ხარჯებისთვის: მასალის გაძვირება, გრუნტის მოულოდნელობა ან თქვენი ცვლილებები მშენებლობის დროს.',
        ],
      },
      {
        h2: '7. როგორ ვადგენთ ხარჯთაღრიცხვას',
        paragraphs: [
          'ვნახულობთ ნაკვეთს, ვეცნობით პროექტს ან ერთად ვადგენთ მოთხოვნებს, შემდეგ ვამზადებთ ხარჯთაღრიცხვას, სადაც სამუშაოები და მასალები ცალ-ცალკეა გაწერილი. ასე ხედავთ, რაში იხდით და სად შეიძლება დაზოგვა ხარისხის დაკარგვის გარეშე.',
        ],
      },
    ],
    faq: [
      {
        q: 'რატომ არ წერთ საიტზე ფასს კვადრატულ მეტრზე?',
        a: 'იმიტომ, რომ ფასი ნაკვეთზე, პროექტზე, მასალებსა და კარკასის დონეზეა დამოკიდებული. ზოგადი ციფრი ხშირად შეცდომაში შეჰყავს დამკვეთი. ზუსტ ფასს ობიექტის ნახვის შემდეგ ხარჯთაღრიცხვით გეტყვით.',
      },
      {
        q: 'რამდენ ხანში მომიმზადებთ ხარჯთაღრიცხვას?',
        a: 'ეს პროექტის სირთულეზეა დამოკიდებული. დაგვიკავშირდით, ვნახავთ ობიექტს და შევთანხმდებით ვადაზე.',
      },
      {
        q: 'შეიძლება ფასის შემცირება ხარისხის დაკარგვის გარეშე?',
        a: 'ხშირად კი: გეგმის გამარტივებით, მასალის სხვა ვარიანტით ან სამუშაოების ეტაპებად დაყოფით. ხარჯთაღრიცხვაში ასეთ ვარიანტებს ცალკე გაჩვენებთ.',
      },
      {
        q: 'ფასში შედის პროექტი და ნებართვა?',
        a: 'ეს შეთანხმებაზეა დამოკიდებული. ხარჯთაღრიცხვაში ცალკე ეწერება, რას ვაკეთებთ ჩვენ და რას აგვარებს დამკვეთი.',
      },
    ],
    service: 'residential-construction',
  },
  {
    slug: GUIDE_SLUGS[3],
    metaTitle: 'შავი, თეთრი და მწვანე კარკასი: რას ნიშნავს და რა რემონტი სჭირდება | BAU BILD',
    metaDescription:
      'რას ნიშნავს შავი, თეთრი და მწვანე კარკასი ახალ აშენებულ ბინაში, რა შედის თითოეულში და რა სამუშაოები რჩება ბინის საცხოვრებლად მოსამზადებლად.',
    h1: 'შავი, თეთრი და მწვანე კარკასი: რას ნიშნავს და რა რემონტი სჭირდება',
    lead: 'ახალ კორპუსში ბინის ყიდვისას დეველოპერი ხშირად გთავაზობთ შავ, თეთრ ან მწვანე კარკასს. ეს სიტყვები ყველა კომპანიასთან ერთსა და იმავეს არ ნიშნავს, ამიტომ აქ ავხსნით, რა შედის ჩვეულებრივ თითოეულში და რა რემონტი გელით შემდეგ.',
    published: '2026-11-18',
    sections: [
      {
        h2: '1. შავი კარკასი',
        paragraphs: [
          'შავი კარკასი არის ბინა, სადაც მხოლოდ კონსტრუქცია და გარე კედლებია. ჩვეულებრივ არ არის შიდა ტიხრები ან მხოლოდ ნაწილობრივ არის, არ არის ლესვა, მოჭიმვა, ელექტროობა და სანტექნიკა ბინის შიგნით. ფანჯრები ზოგჯერ დაყენებულია, ზოგჯერ არა.',
          'შავი კარკასი იაფია და ბინის გეგმა სრულად თქვენზეა, მაგრამ საცხოვრებლად მოსამზადებლად სრული რემონტი სჭირდება.',
        ],
      },
      {
        h2: '2. თეთრი კარკასი',
        paragraphs: [
          'თეთრ კარკასში ჩვეულებრივ დგას ტიხრები, კედლები გალესილია, იატაკი მოჭიმულია, გაყვანილია ელექტროობა და წყალ-კანალიზაცია, დაყენებულია ფანჯრები და შესასვლელი კარი.',
          'ამის შემდეგ რჩება ფინალური სამუშაოები: შპაკლი და შეღებვა, იატაკის საფარი, ფილა სველ წერტილებში, შიდა კარები, განათება და სანტექნიკა.',
        ],
      },
      {
        h2: '3. მწვანე კარკასი',
        paragraphs: [
          'მწვანე კარკასი თეთრსა და მზა რემონტს შორისაა: კედლები შპაკლით მომზადებულია შესაღებად, ხშირად დაყენებულია სველი წერტილების ფილა ან სანტექნიკის ნაწილი. ცალკეულ დეველოპერებთან შემადგენლობა ძალიან განსხვავდება.',
        ],
      },
      {
        h2: '4. რა უნდა შეამოწმოთ ბინის ჩაბარებისას',
        paragraphs: [
          'ხელშეკრულებაში ზუსტად ჩაწერეთ, რა შედის კარკასში: ტიხრები, ფანჯრის პროფილი, გათბობის მილები, ელექტროს ფარი და გაყვანილობა, მრიცხველები.',
          'ჩაბარებისას შეამოწმეთ კედლებისა და იატაკის სიბრტყე, ბზარები, ფანჯრების დახურვა და ნესტის კვალი. რასაც ახლა შენიშნავთ, დეველოპერი ასწორებს; რასაც რემონტის შემდეგ, თქვენ.',
        ],
      },
      {
        h2: '5. რა თანმიმდევრობით მიდის რემონტი',
        paragraphs: [
          'შავი კარკასიდან: ტიხრები, ელექტროობა და სანტექნიკა, გათბობა, ლესვა და მოჭიმვა, შემდეგ ფინალური სამუშაოები. თეთრი კარკასიდან პირდაპირ ფინალურ სამუშაოებზე გადავდივართ, მაგრამ ჯერ ვამოწმებთ, რამდენად სწორად არის გაკეთებული უკვე არსებული ნაწილი.',
          'ზოგჯერ თეთრი კარკასის ნაწილის თავიდან გაკეთება გვიწევს, მაგალითად, როცა როზეტების ან სველი წერტილების ადგილი თქვენს ინტერიერს არ ერგება. ეს ჯობს წინასწარ გადაწყდეს, ვიდრე მოპირკეთების შემდეგ.',
        ],
      },
    ],
    faq: [
      {
        q: 'რომელი სჯობს ყიდვისას: შავი თუ თეთრი კარკასი?',
        a: 'თუ გეგმის შეცვლა და ყველაფრის საკუთარი გემოვნებით გაკეთება გინდათ, შავი კარკასი მეტ თავისუფლებას გაძლევთ. თუ სწრაფად შესახლება გინდათ და დეველოპერის გეგმა მოგწონთ, თეთრი კარკასი ზოგავს დროს.',
      },
      {
        q: 'რა ღირს შავი ან თეთრი კარკასის რემონტი?',
        a: 'ფასი ბინის ფართზე, კარკასის რეალურ მდგომარეობაზე, მასალებსა და ინტერიერის სირთულეზეა დამოკიდებული. ბინის ნახვის შემდეგ გიმზადებთ ხარჯთაღრიცხვას, სადაც სამუშაოები და მასალები ცალ-ცალკეა.',
      },
      {
        q: 'აკეთებთ რემონტს შავი კარკასიდან ბოლომდე?',
        a: 'დიახ. BAU BILD ბინას შავი ან თეთრი კარკასიდან მზა ინტერიერამდე ერთი გუნდით ამზადებს.',
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
  {
    slug: GUIDE_SLUGS[2],
    metaTitle: 'House Construction Cost Estimate in Georgia: What Drives the Price | BAU BILD',
    metaDescription:
      'What a house construction estimate is made of and what changes the price: the plot, soil, design, structure, materials, frame level and utilities.',
    h1: 'House construction estimate: what drives the price',
    lead: 'There is no single-number answer to "how much does it cost to build a house": two houses of the same size can cost very different amounts. Here we explain what an estimate is made of and which decisions change the price most.',
    published: '2026-11-18',
    sections: [
      {
        h2: '1. Why there is no single price per square metre',
        paragraphs: [
          'A price per square metre is handy for comparison, but it hides a lot. In one quote it covers only the black frame, in another the roof and facade too, and in a third a finished interior.',
          'So when you compare two offers, always ask what is included and what is not. An exact price comes only from an estimate prepared after seeing the design and the site.',
        ],
      },
      {
        h2: '2. The plot and the soil',
        paragraphs: [
          'A sloping plot needs earthworks and often retaining walls. On weak or waterlogged soil the foundation has to be deeper and heavier.',
          'That is why a soil survey saves money rather than costing it: it shows which foundation you need and protects you from both overspending and cracks later on.',
        ],
      },
      {
        h2: '3. Design and structure',
        paragraphs: [
          'The shape of the house affects the price directly. A simple, compact plan with fewer walls, corners and roof slopes costs less than a complex form with large cantilevers and wide glazing.',
          'The structural system matters too: a reinforced concrete frame, load-bearing block walls, or a steel or timber frame. Each has its own cost, timeline and suitable site.',
        ],
      },
      {
        h2: '4. Frame level: black, white, green',
        paragraphs: [
          'A black frame is the structure, walls and roof. A white frame adds plastering, screed, utilities and windows. A green frame means only the final finishes are left.',
          'The higher the level of completion, the higher the price, but the less you have to find and coordinate separate trades yourself.',
        ],
      },
      {
        h2: '5. Materials',
        paragraphs: [
          'The same job costs very different amounts with different materials: window profiles, roofing, facade system, insulation thickness, flooring and sanitary ware.',
          'Good insulation and windows look expensive during construction, but they save on heating and cooling for years. That is why we never choose materials on price alone.',
        ],
      },
      {
        h2: '6. Utilities, paperwork and a reserve',
        paragraphs: [
          'Estimates often leave out connections to water, sewerage, electricity and gas, as well as the cost of the design and the permit. Before you start, find out what already reaches the plot and what has to be brought in.',
          'A good budget always keeps a reserve for the unexpected: material price rises, surprises in the ground, or changes you decide on during construction.',
        ],
      },
      {
        h2: '7. How we prepare an estimate',
        paragraphs: [
          'We visit the plot, review the design or work out the requirements with you, then prepare an estimate with works and materials listed separately. That way you see what you are paying for and where you can save without losing quality.',
        ],
      },
    ],
    faq: [
      {
        q: 'Why is there no price per square metre on your website?',
        a: 'Because the price depends on the plot, the design, the materials and the frame level, and a general figure often misleads. We give you an exact price in an estimate after seeing the site.',
      },
      {
        q: 'How long does it take to prepare an estimate?',
        a: 'It depends on how complex the project is. Get in touch, we will see the site and agree on a timeline.',
      },
      {
        q: 'Can the price be reduced without losing quality?',
        a: 'Often yes: by simplifying the plan, choosing a different material or splitting the work into stages. We show such options separately in the estimate.',
      },
      {
        q: 'Are the design and permit included in the price?',
        a: 'That depends on the agreement. The estimate states separately what we do and what the client arranges.',
      },
    ],
    service: 'residential-construction',
  },
  {
    slug: GUIDE_SLUGS[3],
    metaTitle: 'Black, White and Green Frame Apartments in Georgia Explained | BAU BILD',
    metaDescription:
      'What black, white and green frame mean for a new-build apartment in Georgia, what each usually includes and what work is left before you can move in.',
    h1: 'Black, white and green frame: what they mean and what renovation they need',
    lead: 'When you buy in a new building in Georgia, developers often offer a black, white or green frame. These words do not mean exactly the same thing at every company, so here is what each usually includes and what renovation comes next.',
    published: '2026-11-18',
    sections: [
      {
        h2: '1. Black frame',
        paragraphs: [
          'A black frame apartment has only the structure and outer walls. Usually there are no internal partitions or only some, and no plaster, screed, electrics or plumbing inside the flat. Windows are sometimes fitted, sometimes not.',
          'A black frame is cheaper and the layout is entirely up to you, but it needs a full renovation before you can live in it.',
        ],
      },
      {
        h2: '2. White frame',
        paragraphs: [
          'A white frame usually has partitions in place, plastered walls, a levelled floor screed, electrics and water and sewerage run in, and windows and an entrance door fitted.',
          'What remains are the final finishes: skim coat and paint, floor covering, tiles in wet areas, internal doors, lighting and sanitary ware.',
        ],
      },
      {
        h2: '3. Green frame',
        paragraphs: [
          'A green frame sits between white frame and a finished renovation: walls are skimmed ready for paint, and wet-area tiles or some sanitary ware are often in place. What is included varies a lot between developers.',
        ],
      },
      {
        h2: '4. What to check at handover',
        paragraphs: [
          'Write into the contract exactly what the frame includes: partitions, window profile, heating pipes, the electrical panel and wiring, meters.',
          'At handover, check that walls and floors are level, look for cracks, test that windows close and look for signs of damp. What you spot now the developer fixes; what you spot after the renovation, you do.',
        ],
      },
      {
        h2: '5. The order of renovation work',
        paragraphs: [
          'From a black frame: partitions, electrics and plumbing, heating, plaster and screed, then the final finishes. From a white frame we go straight to the finishes, but first we check how well the existing work was done.',
          'Sometimes part of a white frame has to be redone, for example when sockets or wet areas are not where your interior needs them. That is better decided before finishing than after.',
        ],
      },
    ],
    faq: [
      {
        q: 'Which is better to buy: black or white frame?',
        a: 'If you want to change the layout and do everything to your own taste, a black frame gives you more freedom. If you want to move in quickly and like the developer\'s layout, a white frame saves time.',
      },
      {
        q: 'How much does a black or white frame renovation cost?',
        a: 'The price depends on the size of the flat, the real condition of the frame, the materials and how complex the interior is. After seeing the flat we prepare an estimate with works and materials listed separately.',
      },
      {
        q: 'Do you renovate from black frame all the way to finished?',
        a: 'Yes. BAU BILD takes an apartment from black or white frame to a finished interior with one team.',
      },
    ],
    service: 'renovation-interior',
  },
];

export const guides: Record<Lang, Guide[]> = { ka, en };
