import "./APropos.scss";
import spiralAPropos from "../../assets/spirals/spiralAPropos.svg";
import photoGiordani from "../../assets/images/photo_Giordani.webp";
import { useTranslation, Trans } from "react-i18next";

function APropos() {
    const { t } = useTranslation();
    return (
        <section className="apropos">
            <div className="apropos__content">
                <div className="apropos__container">
                    <div className="apropos__spiral">
                        <img
                            className="apropos__spiral--image"
                            src={spiralAPropos}
                            alt={t('common.fibonacci')}
                        />

                        <div className="apropos__photo">
                            <img
                                className="apropos__photo--image"
                                src={photoGiordani}
                                alt="Alberto Giordani"
                            />
                        </div>
                        <div className="apropos__text">
                            <h1>{t('apropos.title')}</h1>

                            <p>
                                <Trans i18nKey="apropos.paragraph" components={{ bold: <span /> }} />
                            </p>

                            <h2><Trans i18nKey="apropos.motto" /></h2>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default APropos;