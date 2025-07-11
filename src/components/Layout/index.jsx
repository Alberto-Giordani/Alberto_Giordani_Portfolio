import Header from "../Header";
import { useLocation } from "react-router-dom";
import "./Layout.scss";

function Layout({ children }) {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <>
            <Header isHome={isHome} />
            <main className={isHome ? "background__home" : "background__default"}>
                {children}
            </main>
        </>
    );
}

export default Layout;