import Header from "../Header";
import { useLocation } from "react-router-dom";
import "./Layout.scss";

function Layout({ children }) {

    // On utilise le hook useLocation pour établir si on est dans la page Home
    // et donc attribuer la classe corréspondante au main
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <>
            <Header />
            <main className={isHome ? "background__home" : "background__default"}>
                {children}
            </main>
        </>
    );
}

export default Layout;