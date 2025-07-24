import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from '../data/locales/fr/translation.json';
import it from '../data/locales/it/translation.json';

const resources = {
    fr: { translation: fr },
    it: { translation: it }
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