import { useRef, useState } from "react";
import "./Contact.scss";
import spiralContact from "../../assets/spirals/spiralContact.svg";
import closeIcon from "../../assets/icons/close.svg";
import { useTranslation, Trans } from "react-i18next";

function Contact() {
    const formRef = useRef();
    const [submitted, setSubmitted] = useState(false);
    const { t } = useTranslation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(formRef.current);

        // On fait un appel API à getform.io pour envoyer les données du formulaire
        // et on gère les erreurs éventuels 
        try {
            await fetch("https://getform.io/f/amdmlrob", {
                method: "POST",
                body: formData,
            });

            setSubmitted(true);
            formRef.current.reset();
        } catch (error) {
            alert(t('contact.error', { message: error.message }));
        }
    };

    return (
        <section className="contact">
            <div className="contact__content">
                <div className="contact__container">
                    <div className="contact__spiral">
                        <img
                            className="contact__spiral--image"
                            src={spiralContact}
                            alt={t('common.fibonacci')}
                        />

                        <section className="contact__text">
                            <h1><Trans i18nKey="contact.title" components={{ 1: <span /> }} /></h1>

                            {submitted ? (
                                <div className="contact__text--thanks">
                                    <h2>{t('contact.thanks')}</h2>
                                    <img
                                        src={closeIcon}
                                        alt={t('contact.close')}
                                        onClick={() => setSubmitted(false)}
                                    />
                                </div>
                            ) : (

                                <form
                                    className="contact__text--form"
                                    ref={formRef}
                                    onSubmit={handleSubmit}
                                >
                                    <div className="contact__text--group">
                                        <label htmlFor="nom">{t('contact.labels.nom')}</label>
                                        <input
                                            type="text"
                                            id="nom"
                                            name="nom"
                                            placeholder={t('contact.placeholders.nom')}
                                            required
                                        />
                                    </div>

                                    <div className="contact__text--group">
                                        <label htmlFor="email">{t('contact.labels.email')}</label>
                                        <input
                                            type="text"
                                            id="email"
                                            name="email"
                                            placeholder={t('contact.placeholders.email')}
                                            required
                                        />
                                    </div>

                                    <div className="contact__text--group">
                                        <label htmlFor="message">{t('contact.labels.message')}</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder={t('contact.placeholders.message')}
                                            rows="3"
                                            required
                                        />
                                    </div>

                                    <button type="submit">{t('contact.submit')}</button>
                                </form>
                            )}

                        </section>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Contact;