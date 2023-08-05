import { useState, useContext } from 'react';

import '../CSS/carousel.css';
import { DBContext } from '../context/DBContext';

const Carousel = () => {

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
        <div className="carouselWrapper">
            
            <div className="carousel">
                {images && <div className="imagesList">
                    {images.map((img, i) => {
                        return (
                            <div key={i} className={i === currentIndex ? "carouselItem activeImg" : "carouselItem"}>
                                {console.log(currentIndex)}
                                <img src={img.Image} alt={img.Caption} />
                                <div className="caption"><span>{img.Caption}</span></div>
                            </div>
                        )
                    })}
                    <a className="prev" onClick={decreaseIndex}>❮</a>
                    <a className="next" onClick={increaseIndex}>❯</a>
                </div>}
            </div>
            <div className="dots">
                {images && images.map((image,i) => (
                    <span key={i} className={`${i === currentIndex ? "dot activeDot" : "dot"}`} onClick={() => setCurrentIndex(i)}></span>
                ))}
            </div>
        </div>
    )
}

export default Carousel;