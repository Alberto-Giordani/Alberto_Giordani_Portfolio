import { useRef, useState } from "react";
import "./Contact.scss";
import spiralContact from "../../assets/spirals/spiralContact.svg";
import closeIcon from "../../assets/icons/close.svg";

function Contact() {
    const formRef = useRef();
    const [submitted, setSubmitted] = useState(false);

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
            alert(`Erreur ${error.message} lors de l'envoi. Veuillez réessayer`);
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
                            alt="Spirale de Fibonacci"
                        />

                        <section className="contact__text">
                            <h1>Idées, <span>questions ?</span></h1>

                            {submitted ? (
                                <div className="contact__text--thanks">
                                    <h2>
                                        Merci pour votre message !
                                    </h2>
                                    <img
                                        src={closeIcon}
                                        alt="Fermeture du message"
                                        onClick={() => setSubmitted(false)}
                                    />
                                </div>
                            ) : (

                                < form
                                    className="contact__text--form"
                                    ref={formRef}
                                    onSubmit={handleSubmit}
                                >
                                    <div className="contact__text--group">
                                        <label htmlFor="nom">Nom</label>
                                        <input
                                            type="text"
                                            id="nom"
                                            name="nom"
                                            placeholder="Votre nom"
                                            required
                                        />
                                    </div>

                                    <div className="contact__text--group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="text"
                                            id="email"
                                            name="email"
                                            placeholder="Votre email"
                                            required
                                        />
                                    </div>

                                    <div className="contact__text--group">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="Votre message"
                                            rows="3"
                                            required
                                        />
                                    </div>

                                    <button type="submit">Envoyer</button>
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