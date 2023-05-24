import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import img1 from '../../../../public/assets/images/slide1.jpg'
import img2 from '../../../../public/assets/images/slide2.jpg'
import img3 from '../../../../public/assets/images/slide3.jpg'
import img4 from '../../../../public/assets/images/slide4.jpg'
import img5 from '../../../../public/assets/images/slide5.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
    return (
       <section>
        <SectionTitle subHeading={"From 11.00am to 10.00pm"}
            heading={"Order Online"}>
        </SectionTitle>
         <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-24"
        >
            <SwiperSlide>
                <img src={img1} alt="" />
                <h3 className="text-4xl text-center text-white -mt-16 uppercase">Salads</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img2} alt="" />
                <h3 className="text-4xl text-center text-white -mt-16 uppercase">pizzas</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3} alt="" />
                <h3 className="text-4xl text-center text-white -mt-16 uppercase">Soups</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img4} alt="" />
                <h3 className="text-4xl text-center text-white -mt-16 uppercase">Deserts</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img5} alt="" />
                <h3 className="text-4xl text-center text-white -mt-16 uppercase">Salsa Salads</h3>
            </SwiperSlide>
        </Swiper>
       </section>
    );
};

export default Category;