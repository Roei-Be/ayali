import { useState, useEffect, useContext } from "react";
import { DBContext } from "../context/DBContext";
import Papa from "papaparse";

import '../CSS/FigureSlider.css'

const FigureSlider = () => {

    const {images} = useContext(DBContext);
    
    const [currentIndex, setCurrentIndex] = useState(0)
    const increaseIndex = () => {
        if (currentIndex === (images.length -1)) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    const decreaseIndex = () => {
        if (currentIndex === 0) {
            setCurrentIndex(images.length -1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    return (
        <div className="figures_slideshow_wrapper">
            <div id="figures_slideshow" className="figures_slideshow" tabIndex="0">
                {images && images.map((figure,i) => (
                    <div key={i} className={`${i === currentIndex ? "mySlides fade" : "notActive"}`}>
                        <img src={figure.Image} />
                    </div>
                ))}

                <a className="prev" onClick={decreaseIndex}>❮</a>
                <a className="next" onClick={increaseIndex}>❯</a>

            </div>
            
            <div className="dots">
                {images && images.map((image,i) => (
                    <span key={i} className={`${i === currentIndex ? "dot" : "dot activeDot"}`} onClick={() => setCurrentIndex(i)}></span>
                ))}
            </div>
        </div>
    )
}

export default FigureSlider;
