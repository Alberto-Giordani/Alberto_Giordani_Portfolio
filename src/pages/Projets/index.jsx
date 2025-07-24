import { useState } from "react";
import ProjetSlider from "../../components/ProjetSlider";
import spiral from "../../assets/spirals/spiralProjets.svg";
import arrowLeft from "../../assets/icons/arrowLeft.svg";
import arrowRight from "../../assets/icons/arrowRight.svg";
import ProjetsData from "../../data/projets.json";
import { useTranslation } from "react-i18next";
import "./Projets.scss";

function Projets() {
    const { t } = useTranslation();

    // On crée les variables pour gérer le déroulement des projets
    const [index, setIndex] = useState(0);
    const total = ProjetsData.length;

    const next = () => setIndex((index + 1) % total);
    const prev = () => setIndex((index - 1 + total) % total);


    return (
        <section className="projets">
            <button className="projets__arrow projets__arrow--left" onClick={prev}>
                <img src={arrowLeft} alt={t('projets.prev')} />
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
                            <ProjetSlider projet={ProjetsData[index]} />
                        </div>
                    </div>
                </div>
            </div>
            <button className="projets__arrow projets__arrow--right" onClick={next}>
                <img src={arrowRight} alt={t('projets.next')} />
            </button>
        </section>
    )

}

export default Projets;