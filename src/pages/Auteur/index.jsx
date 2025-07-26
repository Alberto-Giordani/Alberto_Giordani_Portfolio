import "./Auteur.scss";
import livres from "../../data/livres.json";
import spiralAuteur from "../../assets/spirals/spiralAuteur.svg";
import { useTranslation, Trans } from "react-i18next";

function Auteur() {
    const { t, i18n } = useTranslation();
    const books = livres.map((b) => ({
        ...b,
        title: b.title[i18n.language] || b.title.fr,
        description: b.description[i18n.language] || b.description.fr,
        amazon: b.amazon[i18n.language] || b.amazon.fr,
    }));

    return (
        <section className="auteur">
            <div className="auteur__content">
                <div className="auteur__container">
                    <div className="auteur__spiral">
                        <img
                            className="auteur__spiral--image"
                            src={spiralAuteur}
                            alt={t('common.fibonacci')}
                        />
                        <div className="auteur__text">
                            <h1>{t('auteur.title')}</h1>
                            <p><Trans i18nKey="auteur.bio" components={{ bold: <span /> }} /></p>
                        </div>
                        <div className="auteur__grid">
                            {books.map((book) => (
                                <div key={book.id} className="auteur__book">
                                    <img src={book.cover} alt={book.title} />
                                    <h2>{book.title}</h2>
                                    <p>{book.description}</p>
                                    <div className="auteur__links">
                                        <a href={book.amazon} target="_blank" rel="noreferrer">Amazon</a>
                                        <a href={book.ibs} target="_blank" rel="noreferrer">IBS</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Auteur;