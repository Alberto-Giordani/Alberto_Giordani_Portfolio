import "./Header.scss";
import logo from "../../assets/logo_with_brackets_color_002FA7.svg";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import BurgerMenu from "../BurgerMenu";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) setMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="header">
            <div className="header__container">
                <NavLink className="header__logo" to="/">
                    <img src={logo} alt="Logo" className="header__logo--image" />
                </NavLink>

                {isMobile ? (
                    <BurgerMenu />
                ) : (
                    <div className="header__links">
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
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;