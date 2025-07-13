import "./APropos.scss";
import spiralAPropos from "../../assets/spirals/spiralAPropos.svg";
import photoGiordani from "../../assets/images/photo_Giordani.webp";

function APropos() {
    return (
        <section className="apropos">
            <div className="apropos__content">
                <div className="apropos__container">
                    <div className="apropos__spiral">
                        <img
                            className="apropos__spiral--image"
                            src={spiralAPropos}
                            alt="Spirale de Fibonacci"
                        />

                        <div className="apropos__photo">
                            <img
                                className="apropos__photo--image"
                                src={photoGiordani}
                                alt="Alberto Giordani"
                            />
                        </div>
                        <div className="apropos__text">
                            <h1>À propos</h1>

                            <p>
                                Bonjour, je m'appelle <span>Alberto Giordani</span>.<br />
                                Ancien enseignant et auteur, je me suis reconverti en développeur front-end
                                par passion pour la logique, l’esthétique et la rigueur du code.<br /><br />
                                Je travaille avec <span>HTML</span>, <span>Sass</span>, <span>JavaScript</span> et <span>React</span>,
                                et m'attache à l'accessibilité, la performance
                                et le responsive design.<br /><br />
                                Ce portfolio est une vitrine technique mais aussi une réflexion de mon parcours
                                et de mes aspirations.
                            </p>

                            <h2>Code avec rigueur<br />Crée avec sens</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default APropos;