import Carousel from '../components/Carousel';
import FigureSlider from '../components/FigureSlider';

import '../CSS/Home.css';

const Home = () => {
 return (
    <div className="homeWrapper">
        <h1>InsectLab</h1>
        <div className="slider">
            <Carousel />
        </div>
    </div>
 )
}

export default Home;