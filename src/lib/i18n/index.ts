import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en/common.json';
import vi from './translations/vi/common.json';

const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
