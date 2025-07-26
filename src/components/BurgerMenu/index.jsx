import { useState } from "react";
import "./BurgerMenu.scss";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <button
                className="burger-button"
                onClick={toggleMenu}
                aria-label="Menu"
                aria-expanded={isOpen}
            >
                <img
                    src={isOpen ? closeIcon : menuIcon}
                    alt={isOpen ? t('burger.close') : t('burger.open')}
                    className={`burger-icon ${isOpen ? "open" : "closed"}`}
                />
            </button>

            <nav
                className={`burger-panel ${isOpen ? "open" : ""}`}
                onClick={closeMenu}
                aria-hidden={!isOpen}
                style={{ display: isOpen ? "block" : "none" }}
            >
                <ul className="burger-links">
                    {["/", "/apropos", "/projets", "/cv", "/auteur", "/contact"].map((path, i) => (
                        <li key={path}>
                            <NavLink to={path} className={({ isActive }) =>
                                `burger-link${isActive ? " active" : ""}`} onClick={closeMenu}
                            >
                                {[
                                    t('nav.homeMobile'),
                                    t('nav.aproposMobile'),
                                    t('nav.projets'),
                                    t('nav.cv'),
                                    t('nav.auteur'),
                                    t('nav.contact')
                                ][i]}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default BurgerMenu;