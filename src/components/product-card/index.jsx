import { Link } from "react-router-dom";
import Slider from "react-slick";
import Image from "../image";

export default function ProductCard({ products }) {
  const settings = { 
    slidesToShow: 6,  
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1.4, 
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.1, 
          }
        }
      ]
  };
  return (
    <>
    <div className="md:grid md:grid-cols-4 md:gap-10 hidden ">
      {products?.map((item, index) => (
        <div key={index} className=" max-w-[17rem]">
          <Link to="#">
            <Image  src={item.img} alt="img" />
          </Link>
          <div className="py-5">
            <h5>{item.name}</h5>
            <p>{item.price}</p>
          </div>
        </div>
      ))}
    </div>


    <div className="slider-container md:hidden">
        <Slider {...settings}>
        {products?.map((item, index) => (
        <div key={index} className=" max-w-[17rem]">
          <Link to="#">
            <Image  src={item.img} alt="img" />
          </Link>
          <div className="py-5">
            <h5>{item.name}</h5>
            <p>{item.price}</p>
          </div>
        </div>
      ))}
        </Slider>
      </div>
    </>
  );
}
