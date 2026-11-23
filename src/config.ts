// საიტის ძირითადი პარამეტრები. ლოგოს, კონტაქტების და ფორმის შეცვლა აქედან ხდება.

export type LogoVariant = '7' | '14' | '17' | '18' | '19' | '21';

/** აქტიური ლოგო. შესაძლო მნიშვნელობები: '7', '14', '17', '18', '19', '21' */
export const LOGO_VARIANT: LogoVariant = '7';

/** ნაგულისხმევი თემა, თუ ვიზიტორს თავად არ აურჩევია */
export const DEFAULT_THEME: 'dark' | 'light' = 'dark';

export const CONTACT = {
  phoneDisplay: '+995 591 948 000',
  phoneHref: 'tel:+995591948000',
  email: 'info@baubild.ge',
  whatsapp: 'https://wa.me/995591948000',
  viber: 'viber://chat?number=%2B995591948000',
  facebook: '',
  instagram: '',
};

/**
 * „უფასო შეფასების“ ფორმა მოთხოვნას CONTACT.email-ზე აგზავნის.
 *
 * ნაგულისხმევად FormSubmit-ით (https://formsubmit.co, უფასო, რეგისტრაცია არ სჭირდება).
 * ერთხელ საჭიროა: პირველი მოთხოვნის შემდეგ info@baubild.ge-ზე მოვა წერილი „Activate Form“,
 * მასზე დაჭერის მერე ყველა მოთხოვნა მეილზე მოდის.
 *
 * Web3Forms-ის წვდომის გასაღები (https://web3forms.com) არასავალდებულოა. თუ აქ ჩაწერ,
 * ფორმა FormSubmit-ის ნაცვლად Web3Forms-ით გაიგზავნება.
 * თუ გაგზავნა ვერ მოხერხდა, ვიზიტორს WhatsApp-ით გაგზავნას ვთავაზობთ.
 */
export const WEB3FORMS_KEY = '';
