import { useEffect, useState } from 'react';
import Papa from "papaparse";

import '../CSS/carousel.css';

const Carousel = () => {

    const [images, setImages] = useState();

    useEffect(() => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTrx5a6lcEqohu2wlApKa6DnPUmNRfYoUkRXjajieoF7PyPOrGKKQeqiROrECNHKPXAYMKZfMrLNwaB/pub?gid=1673365678&single=true&output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                setImages(results.data);
                console.log(results.data);
            }
        })
    },[])

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
                <div className="arrow left" onClick={decreaseIndex}>{"<"}</div>
                <div className="imagesList">
                    {images && images.map((img, i) => {
                        return (
                            <div key={i} className={i === currentIndex ? "carouselItem activeImg" : "carouselItem"}>
                                {console.log(currentIndex)}
                                <img src={img.Image} alt={img.Caption} />
                                <span>{img.Caption}</span>
                            </div>
                        )
                    })}
                </div>
                <div className="arrow right" onClick={increaseIndex}>{">"}</div>
            </div>
                
            {images && <div className="imgSlider">
                {images.map((img, i) => {
                    return (
                        <div key={i} className={i === currentIndex ? "slidePoint selectedImg" : "slidePoint"} onClick={() => {setCurrentIndex(i)}}></div>
                    )
                })}
            </div>}
        </div>
    )
}

export default Carousel;