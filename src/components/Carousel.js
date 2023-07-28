import { useState } from 'react';
import Papa from "papaparse";

import '../CSS/carousel.css';

const Carousel = () => {

    const [images, setImages] = useState();
    
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTrx5a6lcEqohu2wlApKa6DnPUmNRfYoUkRXjajieoF7PyPOrGKKQeqiROrECNHKPXAYMKZfMrLNwaB/pub?gid=1673365678&single=true&output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                setImages(results.data);
                console.log(results.data);
            }
        })
    return (
        <div className="carouselWrapper">
            <div className="carousel">
                {images && images.map((img, i) => {
                    return (
                        <div key={i} className={i === 6 ? "carouselItem active" : "carouselItem"}>
                            <img src={img.Image} alt={img.Caption} />
                            <span>{img.Caption}</span>
                        </div>
                    )
                })}
                <div className="arrow left">{"<"}</div>
                <div className="arrow right">{">"}</div>
            </div>

        </div>
    )
}

export default Carousel;