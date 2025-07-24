import "./CV.scss";
import spiralCv from "../../assets/spirals/spiralCv.svg";
import { useTranslation } from "react-i18next";

function CV() {
    const { t } = useTranslation();
    const formations = t('cv.formations', { returnObjects: true });
    const experiences = t('cv.experiences', { returnObjects: true });
    const skills = t('cv.skills', { returnObjects: true });
    const langs = t('cv.langs', { returnObjects: true });
    const soft = t('cv.soft', { returnObjects: true });
    return (
        <section className="cv">
            <div className="cv__content">
                <div className="cv__container">
                    <div className="cv__spiral">
                        <img
                            className="cv__spiral--image"
                            src={spiralCv}
                            alt={t('common.fibonacci')}
                        />

                        <div className="cv__pdf">
                            <iframe
                                className="cv__pdf--viewer"
                                src="/CV_Alberto_Giordani_fr.pdf"
                                title="CV Alberto Giordani"
                            />
                            <a
                                href="/CV_Alberto_Giordani_fr.pdf"
                                download
                                className="cv__pdf--link"
                            >
                                {t('cv.download')}
                            </a>
                        </div>
                        <section className="cv__text">
                            <h1>{t('cv.title')}</h1>

                            <h2>{t('cv.formation')}</h2>
                            <ul>
                                {formations.map((f, i) => (
                                    <li key={i}>
                                        <span className="cv__text--bold">{f.title}</span> {f.subtitle}
                                        <p>{f.description}</p>
                                    </li>
                                ))}
                            </ul> <br />

                            <h2>{t('cv.experience')}</h2>
                            <ul>
                                {experiences.map((e, i) => (
                                    <li key={i}>
                                        <span className="cv__text--bold">{e.title}</span>
                                        {e.details.map((d, j) => (
                                            <p key={j} dangerouslySetInnerHTML={{ __html: d }} />
                                        ))}
                                    </li>
                                ))}
                            </ul> <br />

                            <h2>{t('cv.skillsTitle')}</h2>
                            <ul>
                                {skills.map((s, i) => (
                                    <li key={i}>{s}</li>
                                ))}
                            </ul> <br />

                            <h2>{t('cv.langsTitle')}</h2>
                            <ul>
                                {langs.map((l, i) => (
                                    <li key={i}>{l}</li>
                                ))}
                            </ul> <br />

                            <h2>{t('cv.softTitle')}</h2>
                            <ul>
                                {soft.map((q, i) => (
                                    <li key={i}>{q}</li>
                                ))}
                            </ul>

                        </section>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default CV;