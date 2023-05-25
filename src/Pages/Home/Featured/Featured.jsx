import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../../public/assets/images/featured.jpg";
import './Featured.css';


const Featured = () => {

    return (
        <div className="featured-item text-white pt-8 my-20">
            <SectionTitle
                heading="Check It Out"
                subHeading="Featured Item"></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-32">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Sep 17, 2024</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, vero libero veniam perspiciatis molestias quo accusamus laborum, placeat obcaecati natus labore cupiditate quos reiciendis minus voluptates neque iste in provident reprehenderit itaque maxime voluptas quasi consectetur nulla? Dolorum asperiores ipsam rem sed minima aut similique, et possimus vitae, reiciendis a.</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;