import { useRef, useState, useEffect } from "react";
import LivreSlide from "../LivreSlide";
import "./LivreSlider.scss";

function LivreSlider({ livre, onNext, onPrev }) {
    const startX = useRef(null);
    const [animationClass, setAnimationClass] = useState("");

    useEffect(() => {
        setAnimationClass("fade-in");
        const timer = setTimeout(() => setAnimationClass(""), 500);
        return () => clearTimeout(timer);
    }, [livre]);

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
            <LivreSlide key={livre.id} livre={livre} className={animationClass} />
        </div>
    );
}

export default LivreSlider;