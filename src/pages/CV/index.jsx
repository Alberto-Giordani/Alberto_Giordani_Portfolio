import "./CV.scss";
import spiralCv from "../../assets/spirals/spiralCv.svg";

function CV() {
    return (
        <section className="cv">
            <div className="cv__content">
                <div className="cv__container">
                    <div className="cv__spiral">
                        <img
                            className="cv__spiral--image"
                            src={spiralCv}
                            alt="Spirale de Fibonacci"
                        />

                        <div className="cv__pdf">
                            <iframe
                                className="cv__pdf--viewer"
                                src="/CV_Alberto_Giordani.pdf"
                                title="CV Alberto Giordani"
                            />
                            <a
                                href="/CV_Alberto_Giordani.pdf"
                                download
                                className="cv__pdf--link"
                            >
                                Télécharger mon CV (PDF)
                            </a>
                        </div>
                        <section className="cv__text">

                            <h2>Formation</h2>
                            <ul>
                                <li>
                                    <span className="cv__text--bold">OpenClassrooms — Formation diplômante Intégrateur Web</span> (RNCP niveau 5 — Bac+2)
                                    <p>HTML, CSS, Sass, JavaScript, React, Redux, accessibilité, SEO, responsive design</p>
                                </li> <br />
                                <li>
                                    <span className="cv__text--bold">Université IUAV — Venise, Italie</span> (Master — Bac+5)
                                    <p>Sciences et Techniques du Théâtre — Analyse dramaturgique, mise en scène, médiation culturelle. Expérience pédagogique et rédactionnelle.</p>
                                </li>
                            </ul> <br />

                            <h2>Expériences professionnelles</h2>
                            <ul>
                                <li>
                                    <span className="cv__text--bold">Depuis 2018 : Chargé d’accueil — Centre de formation Cegos, Paris</span>
                                    <p>Accueil du public, gestion des appels et du suivi administratif. Soutien aux formateurs et à la coordination pédagogique.</p>
                                    <p><span className="cv__text--italic">Compétences transversales : écoute, organisation, relation client, autonomie.</span></p>
                                </li> <br />
                                <li>
                                    <span className="cv__text--bold">2014–2018 : Responsable courrier — ANSM via Elior, Saint-Denis</span>
                                    <p>Supervision d’équipe, traitement du courrier administratif sensible. Interface avec plusieurs directions.</p>
                                    <p><span className="cv__text--italic">Compétences transversales : rigueur, gestion de priorités, travail en équipe.</span></p>
                                </li> <br />
                                <li>
                                    <span className="cv__text--bold">2004–2024 : Auteur / Metteur en scène / Enseignant — Italie / France</span>
                                    <p>Conception de projets culturels, direction d’acteurs, enseignement universitaire (histoire du théâtre, dramaturgie), médiation.</p>
                                    <p><span className="cv__text--italic">Compétences transversales : esprit d’analyse, communication, créativité, pédagogie.</span></p>
                                </li>
                            </ul> <br />

                            <h2>Compétences techniques</h2>
                            <ul>
                                <li>HTML / CSS / Sass</li>
                                <li>Accessibilité / SEO</li>
                                <li>Responsive design</li>
                                <li>Git / GitHub</li>
                                <li>JavaScript</li>
                                <li>React / Redux</li>
                                <li>Performance web (Lighthouse)</li>
                                <li>Figma / Photoshop</li>
                            </ul> <br />

                            <h2>Langues</h2>
                            <ul>
                                <li>Italien</li>
                                <li>Français</li>
                                <li>Anglais</li>
                            </ul> <br />

                            <h2>Savoir-être</h2>
                            <ul>
                                <li>Créativité</li>
                                <li>Autonomie</li>
                                <li>Rigueur</li>
                                <li>Sens du détail</li>
                                <li>Apprentissage rapide</li>
                                <li>Aisance relationnelle</li>
                                <li>Travail en équipe</li>
                                <li>Polyvalence</li>
                                <li>Sens esthétique</li>
                            </ul>

                        </section>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default CV;