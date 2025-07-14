
import ProjetSlide from "../ProjetSlide";
import "./ProjetSlider.scss";

function ProjetSlider({ projet }) {
    return (
        <div className="slider">
            <ProjetSlide projet={projet} />
        </div>
    );
}

export default ProjetSlider;
