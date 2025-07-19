import "./Header.scss";
import logo from "../../assets/logos/logoAG.svg";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import BurgerMenu from "../BurgerMenu";

function Header() {

    // Contrôle pour connaître la largeur de la page
    const [isMobile, setIsMobile] = useState(window.innerWidth < 960);

    // Contrôle si la dimension change et gère les effets de bord
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 960);
        };
        window.addEventListener("resize", handleResize);
        // Si on ferme la page on arrête d'êcouter, afin d'économiser l'énergie
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="header">
            <div className="header__container">
                <NavLink className="header__logo" to="/">
                    <img src={logo} alt="Logo Alberto Giordani" className="header__logo--image" />
                </NavLink>

                {isMobile ? (
                    <BurgerMenu />
                ) : (
                    <nav className="header__links">
                        {["/", "/apropos", "/projets", "/cv", "/contact"].map((path, i) => (
                            <NavLink
                                key={path}
                                to={path}
                                className={({ isActive }) =>
                                    "header__links--item" + (isActive ? " active" : "")
                                }
                            >
                                {["Home", "À Propos", "Projets", "CV", "Contact"][i]}
                            </NavLink>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;