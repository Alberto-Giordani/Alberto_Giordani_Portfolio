import { useTranslation } from 'react-i18next';
import './LanguageSwitch.scss';

function LanguageSwitch() {
    const { i18n } = useTranslation();

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <select value={i18n.language} onChange={changeLanguage} className="lang-switch" aria-label="Language selector">
            <option value="fr">FR</option>
            <option value="it">IT</option>
            <option value="en">EN</option>
        </select>
    );
}

export default LanguageSwitch;