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
 * Web3Forms-ის წვდომის გასაღები (https://web3forms.com).
 * გასაღები info@baubild.ge-ზე იქმნება, უფასოა. სანამ ცარიელია, ფორმა არ იგზავნება
 * და ვიზიტორს ტელეფონზე/მეილზე მიმართვას სთხოვს.
 */
export const WEB3FORMS_KEY = '';
