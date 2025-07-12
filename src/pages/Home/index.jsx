import "./Home.scss";
import spiralHome from "../../assets/spirals/spiralHome.svg";

function Home() {
    return (
        <section className="home">
            <div className="home__content">
                <div className="home__container">
                    <div className="home__spiral">
                        <img
                            className="home__spiral--image"
                            src={spiralHome}
                            alt="Spirale de Fibonacci"
                        />
                        <div className="home__text">
                            <h1>
                                <span>Alberto</span> <br />
                                <span>Giordani</span>
                            </h1>
                            <h2>Portfolio</h2>
                            <p>Développeur Front-End</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Home;