import "./Auteur.scss";
import { useState, useEffect, useCallback } from "react";
import livres from "../../data/livres.json";
import spiralAuteur from "../../assets/spirals/spiralAuteur.svg";
import arrowLeft from "../../assets/icons/arrowLeft.svg";
import arrowRight from "../../assets/icons/arrowRight.svg";
import LivreSlider from "../../components/LivreSlider";
import { useTranslation, Trans } from "react-i18next";

function Auteur() {
    const { t, i18n } = useTranslation();
    const books = livres.map((b) => ({
        ...b,
        title: b.title[i18n.language] || b.title.fr,
        description: b.description[i18n.language] || b.description.fr,
        amazon: b.amazon[i18n.language] || b.amazon.fr,
    }));

    const [index, setIndex] = useState(0);
    const total = books.length;

    const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
    const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [next, prev]);

    return (
        <section className="auteur">
            <button className="auteur__arrow auteur__arrow--left" onClick={prev}>
                <img src={arrowLeft} alt={t('projets.prev')} loading="lazy" />
            </button>
            <div className="auteur__content">
                <div className="auteur__container">
                    <div className="auteur__spiral">
                        <img
                            className="auteur__spiral--image"
                            src={spiralAuteur}
                            alt={t('common.fibonacci')}
                        />
                        <div className="auteur__spiral--content">
                            <LivreSlider livre={books[index]} onNext={next} onPrev={prev} />
                        </div>
                        <div className="auteur__title">
                            <h1>{t('auteur.title')}</h1>
                        </div>
                        <div className="auteur__bio">
                            <p><Trans i18nKey="auteur.bio" components={{ bold: <span /> }} /></p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="auteur__arrow auteur__arrow--right" onClick={next}>
                <img src={arrowRight} alt={t('projets.next')} loading="lazy" />
            </button>
        </section>
    );
}

export default Auteur;