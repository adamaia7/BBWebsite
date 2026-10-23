# BAU BILD — ვებსაიტი

მშენებლობისა და რემონტის კომპანია BAU BILD-ის საიტი. აწყობილია [Astro](https://astro.build)-ზე, სტატიკური საიტია (სერვერი და ბაზა არ სჭირდება).

- ქართული: `/`
- ინგლისური: `/en/`
- მისამართი: https://baubild.ge

## ხშირი ცვლილებები

| რა | სად |
|---|---|
| ლოგოს ვარიანტი (7, 14, 17, 18, 19, 21) | `src/config.ts` → `LOGO_VARIANT` |
| ნაგულისხმევი თემა (მუქი / ღია) | `src/config.ts` → `DEFAULT_THEME` |
| ტელეფონი, მეილი, WhatsApp, Viber, სოც. ქსელები | `src/config.ts` → `CONTACT` |
| საიტის ყველა ტექსტი (ორივე ენაზე) | `src/i18n/index.ts` |
| hero ვიდეო | `public/video/` (hero-1920.mp4, hero-960.mp4, hero-poster.jpg) |
| პროექტების ფოტოები | `public/images/` და `src/i18n/index.ts` → `projects.items[].image` |
| ფერები | `src/styles/global.css` |

## საკონტაქტო ფორმა

ფორმა მეილზე [Web3Forms](https://web3forms.com)-ით იგზავნება (უფასო).
1. web3forms.com-ზე შეიყვანე `info@baubild.ge` და მიიღებ წვდომის გასაღებს (Access Key).
2. ჩასვი `src/config.ts` → `WEB3FORMS_KEY`.

სანამ გასაღები ცარიელია, ფორმა არ იგზავნება და ვიზიტორს ტელეფონზე ან მეილზე მიმართვას სთხოვს.

## სატესტო მონაცემები (გაშვებამდე შესაცვლელია)

ეს მონაცემები გამოგონილია და მხოლოდ სატესტო რეჟიმისთვისაა:
- ციფრები: 12 წელი, 85+ პროექტი, 40 000 მ², 5 წლიანი გარანტია
- „12 წელია ვმუშაობთ...“ (ჩვენ შესახებ)
- 3 პროექტი (აფთიაქი საბურთალოზე, სახლი წყნეთში, ბაღი ვაკეზე)
- 3 კლიენტის შეფასება
- hero ვიდეო და აფთიაქის ფოტო AI-ით არის დაგენერირებული (Hailuo)
- „24 საათში გიპასუხებთ“

## გაშვება კომპიუტერზე

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build    # მზა საიტი dist/ საქაღალდეში
```

## გამოქვეყნება

`main` ბრენჩზე ყოველი ცვლილება ავტომატურად იტვირთება GitHub Pages-ზე (`.github/workflows/deploy.yml`).
ერთხელ საჭიროა: Settings → Pages → Source: **GitHub Actions**.

### დომენი (baubild.ge)

დომენის DNS domenebi.ge-ზეა (NS ჩანაწერები არ იცვლება). DNS-ში ჩაწერილია:
- `A` ჩანაწერები `baubild.ge`-სთვის: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `CNAME` ჩანაწერი `www` → `adamaia7.github.io`

GitHub-ზე: Settings → Pages → Custom domain: `baubild.ge`, ჩართულია **Enforce HTTPS**.
`public/CNAME` ფაილში წერია `baubild.ge`.

## ახალი ენის დამატება

1. `src/i18n/index.ts`: დაამატე ენა `Lang`-ში, `LANGS`-ში და `dict`-ში.
2. შექმენი `src/pages/<ენა>/index.astro` (დააკოპირე `src/pages/en/index.astro`).
