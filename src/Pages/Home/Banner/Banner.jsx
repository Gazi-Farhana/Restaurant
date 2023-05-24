import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="assets/images/01.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/images/02.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/images/03.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/images/04.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/images/05.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/images/06.png" />
                    <p className="legend">Legend 1</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;