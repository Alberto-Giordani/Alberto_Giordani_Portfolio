import "./Header.scss";
import logo from "../../assets/logos/logoAG.svg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BurgerMenu from "../BurgerMenu";
import LanguageSwitch from "../LanguageSwitch";

function Header() {

    const { t } = useTranslation();

    return (
        <header className="header">
            <div className="header__content">
                <div className="header__container">
                    <NavLink className="header__logo" to="/">
                        <img src={logo} alt="Logo Alberto Giordani" className="header__logo--image" />
                    </NavLink>

                    <BurgerMenu />
                    <div className="header__lang-mobile">
                        <LanguageSwitch />
                    </div>
                    <nav className="header__links">
                        {["/", "/apropos", "/projets", "/cv", "/auteur", "/contact"].map((path, i) => (
                            <NavLink
                                key={path}
                                to={path}
                                className={({ isActive }) =>
                                    "header__links--item" + (isActive ? " active" : "")
                                }
                            >
                                {[
                                    t('nav.home'),
                                    t('nav.apropos'),
                                    t('nav.projets'),
                                    t('nav.cv'),
                                    t('nav.auteur'),
                                    t('nav.contact')
                                ][i]}
                            </NavLink>
                        ))}
                        <LanguageSwitch />
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;