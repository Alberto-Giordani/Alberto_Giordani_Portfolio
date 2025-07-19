import { useState } from "react";
import "./BurgerMenu.scss";
import { NavLink } from "react-router-dom";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <button className="burger-button" onClick={toggleMenu} aria-label="Menu">
                <img
                    src={isOpen ? closeIcon : menuIcon}
                    alt={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    className={`burger-icon ${isOpen ? "open" : "closed"}`}
                />
            </button>

            <nav className={`burger-panel ${isOpen ? "open" : ""}`} onClick={closeMenu}>
                <ul className="burger-links">
                    {["/", "/apropos", "/projets", "/cv", "/contact"].map((path, i) => (
                        <li key={path}>
                            <NavLink to={path} className={({ isActive }) =>
                                `burger-link${isActive ? " active" : ""}`} onClick={closeMenu}
                            >
                                {["Accueil", "À propos", "Projets", "CV", "Contact"][i]}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default BurgerMenu;