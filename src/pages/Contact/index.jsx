import "./Contact.scss";
import spiralContact from "../../assets/spirals/spiralContact.svg";

function Contact() {
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
                            <h1>Ècrivez-moi !</h1>

                            <form
                                className="contact__text--form"
                                action="https://getform.io/f/amdmlrob"
                                method="POST"
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
                                        rows="10"
                                        required
                                    />
                                </div>

                                <button type="submit">Envoyer</button>
                            </form>

                        </section>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Contact;