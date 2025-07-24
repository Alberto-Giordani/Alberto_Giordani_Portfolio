import "./Home.scss";
import spiralHome from "../../assets/spirals/spiralHome.svg";
import { useTranslation, Trans } from "react-i18next";

function Home() {
    const { t } = useTranslation();
    return (
        <section className="home">
            <div className="home__content">
                <div className="home__container">
                    <div className="home__spiral">
                        <img
                            className="home__spiral--image"
                            src={spiralHome}
                            alt={t('common.fibonacci')}
                        />
                        <div className="home__text">
                            <h1>
                                <span>{t('home.firstname')}</span> <br />
                                <span>{t('home.lastname')}</span>
                            </h1>
                            <h2>{t('home.portfolio')}</h2>
                            <h3>{t('home.role')}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Home;