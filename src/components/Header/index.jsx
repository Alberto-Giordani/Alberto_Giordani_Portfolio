import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/logo_with_brackets_color_002FA7.svg";
import BurgerMenu from "../BurgerMenu";
import "./Header.scss";

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) setMenuOpen(false); // chiudi menu se torni desktop
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header>
            <nav className="header">
                <NavLink className="header__logo" to="/">
                    <img src={logo} alt="Logo" className="header__logo--image" />
                </NavLink>

                {isMobile ? (
                    <BurgerMenu
                        isOpen={menuOpen}
                        setIsOpen={setMenuOpen}
                    />
                ) : (
                    <div className="header__links">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ?
                                    "header__links--item active" :
                                    "header__links--item"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/apropos"
                            className={({ isActive }) =>
                                isActive ?
                                    "header__links--item active" :
                                    "header__links--item"
                            }
                        >
                            À Propos
                        </NavLink>
                        <NavLink
                            to="/projets"
                            className={({ isActive }) =>
                                isActive ?
                                    "header__links--item active" :
                                    "header__links--item"
                            }
                        >
                            Projets
                        </NavLink>
                        <NavLink
                            to="/cv"
                            className={({ isActive }) =>
                                isActive ?
                                    "header__links--item active" :
                                    "header__links--item"
                            }
                        >
                            CV
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ?
                                    "header__links--item active" :
                                    "header__links--item"
                            }
                        >
                            Contact
                        </NavLink>
                    </div>
                )}
            </nav>
        </header >
    )

}

export default Header;