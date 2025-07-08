import "./Home.scss";
import spiral from "../../assets/Golden-spiral.svg";

function Home() {
    return (
        <main className="home">
            <div className="container">
                <h1>
                    <span>Alberto</span> <br />
                    <span>Giordani</span>
                </h1>
                <h2>Portfolio</h2>
                <p>Développeur Front-End</p>

                <h3>Site en construction</h3>
                <img src={spiral} alt="spirale dorée" className="spiral" />
            </div>
        </main>
    );
}

export default Home;