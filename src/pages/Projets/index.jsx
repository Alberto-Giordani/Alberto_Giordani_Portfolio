import { useState, useEffect } from "react";
import ProjetSlider from "../../components/ProjetSlider";
import spiral from "../../assets/spirals/spiralProjets.svg";
import arrowLeft from "../../assets/icons/arrowLeft.svg";
import arrowRight from "../../assets/icons/arrowRight.svg";
import ProjetsData from "../../data/projets.json";
import { useTranslation } from "react-i18next";
import "./Projets.scss";

function Projets() {
    const { t, i18n } = useTranslation();
    const projets = ProjetsData.map((p) => ({
        ...p,
        title: p.title[i18n.language] || p.title.fr,
        description: p.description[i18n.language] || p.description.fr
    }));

    // On crée les variables pour gérer le déroulement des projets
    const [index, setIndex] = useState(0);
    const total = projets.length;

    const next = () => setIndex((i) => (i + 1) % total);
    const prev = () => setIndex((i) => (i - 1 + total) % total);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') {
                setIndex((i) => (i + 1) % total);
            } else if (e.key === 'ArrowLeft') {
                setIndex((i) => (i - 1 + total) % total);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [total]);

    return (
        <section className="projets">
            <button className="projets__arrow projets__arrow--left" onClick={prev}>
                <img src={arrowLeft} alt={t('projets.prev')} loading="lazy" />
            </button>
            <div className="projets__content">
                <div className="projets__container">
                    <div className="projets__spiral">
                        <img
                            src={spiral}
                            alt={t('projets.alt')}
                            className="projets__spiral--image"
                        />
                        <div className="projets__spiral--content">
                            <ProjetSlider
                                projet={projets[index]}
                                onNext={next}
                                onPrev={prev}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="projets__indicators">
                {projets.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        aria-label={`Slide ${i + 1}`}
                        className={`projets__indicator${i === index ? ' active' : ''}`}
                    />
                ))}
            </div>
            <button className="projets__arrow projets__arrow--right" onClick={next}>
                <img src={arrowRight} alt={t('projets.next')} loading="lazy" />
            </button>
        </section>
    )

}

export default Projets;