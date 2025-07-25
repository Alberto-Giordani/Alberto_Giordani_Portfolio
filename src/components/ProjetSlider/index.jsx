import { useRef, useState, useEffect } from "react";
import ProjetSlide from "../ProjetSlide";
import "./ProjetSlider.scss";

function ProjetSlider({ projet, onNext, onPrev }) {
    const startX = useRef(null);

    const [animationClass, setAnimationClass] = useState("");

    useEffect(() => {
        setAnimationClass("fade-in");
        const timer = setTimeout(() => setAnimationClass(""), 500);
        return () => clearTimeout(timer);
    }, [projet]);

    const handleKey = (e) => {
        if (e.key === "ArrowRight") onNext?.();
        if (e.key === "ArrowLeft") onPrev?.();
    };

    const onTouchStart = (e) => {
        startX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e) => {
        const diff = startX.current - e.changedTouches[0].clientX;
        if (diff > 50) onNext?.();
        if (diff < -50) onPrev?.();
    };

    return (
        <div
            className="slider"
            tabIndex="0"
            onKeyDown={handleKey}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            <ProjetSlide
                key={projet.title}
                projet={projet}
                className={animationClass}
            />
        </div>
    );
}

export default ProjetSlider;