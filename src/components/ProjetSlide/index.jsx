import "./ProjetSlide.scss";

function ProjetSlide({ projet }) {

    // Mapping du tableau projets.json pour générer dynamiquement du contenu
    return (
        <article className="slide">
            <div className="slide__left">
                <h1>{projet.title}</h1>
                <div className="slide__left--images">
                    {projet.images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`${projet.title} screenshot ${index + 1}`}
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>

            <div className="slide__right">
                <img
                    src={projet.logo}
                    alt={`Logo ${projet.title}`}
                    className="slide__right--logo"
                    loading="lazy"
                />
                <ul className="slide__right--description">
                    {projet.description.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
                <div className="slide__right--links">
                    <a href={projet.github} target="_blank" rel="noreferrer">GitHub</a> <br />
                    <a href={projet.site} target="_blank" rel="noreferrer">Website</a>
                </div>
            </div>
        </article>
    );
}

export default ProjetSlide;