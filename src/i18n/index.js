import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from '../data/locales/fr/translation.json';
import it from '../data/locales/it/translation.json';
import en from '../data/locales/en/translation.json';

const resources = {
    fr: { translation: fr },
    it: { translation: it },
    en: { translation: en }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'fr',
        fallbackLng: 'fr',
        interpolation: { escapeValue: false }
    });

i18n.on('languageChanged', (lng) => {
    document.documentElement.lang = lng;
});

export default i18n;