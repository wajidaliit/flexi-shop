import Slider from "react-slick";
import logo1 from "../../assets/brand/logo1.png";
import logo2 from "../../assets/brand/logo2.png";
import logo3 from "../../assets/brand/logo3.png";
import logo4 from "../../assets/brand/logo4.png";
import logo5 from "../../assets/brand/logo5.png";
import logo6 from "../../assets/brand/logo6.png";
import Image from "../../components/image";
import Container from "../../components/share/Container";

const logo = [logo1, logo2, logo3, logo4, logo5, logo6];

export default function LogoSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true, 
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <Container className='py-14 md:py-28'>
      <div className="slider-container">
        <Slider {...settings}>
          {logo?.map((item, index) => (
            <div key={index}>
              <Image src={item} />
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
}
