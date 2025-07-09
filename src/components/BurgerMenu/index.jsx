import { slide as Menu } from 'react-burger-menu';
import { NavLink } from "react-router-dom";
import BurgerLogo from "../../assets/menu-icon.svg";
import CloseLogo from "../../assets/close-icon.svg";
import './BurgerMenu.scss';

function BurgerMenu({ isOpen, setIsOpen }) {
    const handleLinkClick = () => {
        setIsOpen(false);
    }

    return (
        <Menu
            right
            isOpen={isOpen}
            onStateChange={({ isOpen }) => setIsOpen(isOpen)}
            customBurgerIcon={<img src={BurgerLogo} alt="Menu" />}
            customCrossIcon={<img src={CloseLogo} alt="Close" />}
            overlayClassName="burger__overlay"
            className="burger__menu"
            burgerButtonClassName="burger__button"
            crossButtonClassName="burger__cross-button"
            itemListClassName="burger__items"
            crossClassName="burger__cross"
            menuClassName="burger__panel"
        >
            <NavLink
                to="/"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                    isActive
                        ? "burger__item active"
                        : "burger__item"
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/apropos"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                    isActive
                        ? "burger__item active"
                        : "burger__item"
                }
            >
                À propos
            </NavLink>
            <NavLink
                to="/projets"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                    isActive
                        ? "burger__item active"
                        : "burger__item"
                }
            >
                Projets
            </NavLink>
            <NavLink
                to="/cv"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                    isActive
                        ? "burger__item active"
                        : "burger__item"
                }
            >
                CV
            </NavLink>
            <NavLink
                to="/contact"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                    isActive
                        ? "burger__item active"
                        : "burger__item"
                }
            >
                Contact
            </NavLink>

        </Menu>
    );
}

export default BurgerMenu;