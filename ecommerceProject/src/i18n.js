import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTraslation from './languages/en.json';
import esTraslation from './languages/es.json';

i18n.use(initReactI18next).init({
   resources: {
      en: {
         translation: enTraslation,
      },
      es: {
         translation: esTraslation,
      },
   },
   lng: 'en',
   fallbackLng: 'en',

   interpolation: {
      escapeValue: false,
   },
});

export default i18n;
