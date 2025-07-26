import "./LivreSlide.scss";

function LivreSlide({ livre, className = "" }) {
    return (
        <article className={`slide ${className}`.trim()}>
            <div className="slide__left">
                <img
                    src={livre.cover}
                    alt={livre.title}
                    className="slide__left--cover"
                    loading="lazy"
                />
                <p className="slide__left--description">{livre.description}</p>
            </div>
            <div className="slide__right">
                <h2 className="slide__right--title">
                    {livre.title.split("\n").map((line, i) => (
                        <span key={i}>
                            {line}
                            <br />
                        </span>
                    ))}
                </h2>
                <div className="slide__right--links">
                    <a href={livre.amazon} target="_blank" rel="noreferrer">Amazon</a> <br />
                    {livre.ibs &&
                        <a href={livre.ibs} target="_blank" rel="noreferrer">IBS</a>
                    }
                </div>
            </div>
        </article>
    );
}

export default LivreSlide;