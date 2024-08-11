import Slider from "react-slick";
import Image from "../../components/image";
import SliderImg from "../../assets/hero-section/Slider-img.png";
import mobileHero from "../../assets/hero-section/mobileHero.png";
import { Link } from "react-router-dom";
import rightArrow from "../../assets/hero-section/right-arrow.png";
import { useMediaQuery } from "react-responsive";

const data = {
  hero: [
    {
      section: "SALE",
      title: "Stocktake Sale",
      subtitle: "Up to 75% Off",
      buttonText: "Shop Now",
      buttonLink: "/shop",
      image: SliderImg,
      mobileImage: mobileHero,
    },
    {
      section: "SALE",
      title: "New Collection",
      subtitle: "Summer 2024",
      buttonText: "Discover Now",
      buttonLink: "/new-collection",
      image: SliderImg,
      mobileImage: mobileHero,
    },
  ],
};

const details = [
  {
    title: "Free shipping",
    des: "Fat new smallness few supposing",
  },
  {
    title: "99% Satisfied Customer",
    des: "Fat new smallness few supposing",
  },
  {
    title: "Originality Guaranteed",
    des: "Fat new smallness few supposing",
  },
];

export default function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="relative overflow-hidden">
      <Slider {...settings}>
        {data.hero.map((slide, index) => (
          <div key={index} className="relative">
            <Image
              src={isMobile ? slide.mobileImage : slide.image}
              alt={slide.title}
              className="w-full object-cover filter blur-[1px] md:filter-none"
            />
            <div className="absolute top-[40%] md:top-20 lg:top-9 xl:inset-y-0 left-10 sm:left-10 md:left-14 lg:left-[6%] xl:left-[8%] 2xl:left-[14%] 3xl:left-[20%] 4xl:left-[25%] bg-opacity-50 flex flex-col justify-center text-white ">
              <p className="text-xl">{slide.section}</p>
              <h1 className=" text-3xl lg:text-6xl ">
                {slide.title}
              </h1>
              <p className=" text-3xl lg:text-6xl">
                {slide.subtitle}
              </p>
              <Link
                to={slide.buttonLink}
                className="flex items-center mt-4 md:mt-16 min-w-48"
              >
                <div className="w-14 h-14 bg-blue-500 rounded-full -mr-5" />
                <span>{slide.buttonText} </span>{" "}
                <span>
                  <Image src={rightArrow} className="ms-10" />
                </span>
              </Link>
            </div>
            <div className="bg-white absolute -bottom-1 md:bottom-0 left-0 flex space-x-24 pl-10 2xl:pl-20 3xl:pl-32 4xl:pl-60 justify-center items-center rounded-tr-3xl py-1 lg:py-10 w-3/4">
              <div className="flex gap-20">
                {details?.map((item, i) => (
                  <div
                    key={i}
                    className={`flex-col ${
                      i === 0 ? "flex" : "hidden sm:hidden lg:flex"
                    }`}
                  >
                    <h1 className="font-bold">{item.title}</h1>
                    <p>{item.des}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
