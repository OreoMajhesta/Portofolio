import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import id from './locales/id.json';
import jpn from './locales/jpn.json';

i18n
    .use(initReactI18next) 
    .init({
        resources: {
            english: {
                translation: en,
            },
            indonesia: {
                translation: id,
            },
            japanese: {
                translation: jpn,
            },
        },
        lng: 'indonesia', 
        fallbackLng: 'english', 
        interpolation: {
            escapeValue: false, 
        },
    });

export default i18n;
