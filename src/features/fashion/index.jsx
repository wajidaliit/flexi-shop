import Container from "../../components/share/Container";
import men from '../../assets/fashion/men-coll.png';
import women from '../../assets/fashion/women-coll.png';
import { Link } from "react-router-dom";
import Image from "../../components/image"; 
import rightArrow from '../../assets/fashion/rightArrow.svg';

export default function Fashion() {
  return (
    <Container> 
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-20 ">
        <div className="relative w-full">
          <Image src={men} className="w-full h-auto object-cover"  />
          <div className="absolute top-10 right-1 sm:top-20 sm:right-36 md:top-20 md:right-30 lg:top-16 lg:right-0 max-w-56 lg:max-w-72 md:max-w-64 p-4 ">
              <h2 className="text-3xl md:text-4xl font-semibold">Men's Casual Fashion Style</h2>  
              <Link
                to={"#"}
                className="flex items-center mt-4 md:mt-8 min-w-48 font-semibold"
              >
                <div className="w-14 h-14 bg-blue-500 rounded-full -mr-5" />
                <span className="font-bold">VIEW ALL</span>
                <span>
                  <Image src={rightArrow} className="ms-10" width={30} height={20} />
                </span>
              </Link>
            </div>
        </div>
        <div className="relative w-full">
          <Image src={women}  className="w-full h-auto object-cover"  />
          <div className="absolute top-8 sm:top-32 sm:left-32 lg:top-16 lg:left-6 max-w-80 p-4 ">
              <h2 className=" text-3xl md:text-4xl font-semibold">Women's Casual Fashion Style</h2>  
              <Link
                to={"#"}
                className="flex items-center mt-4 md:mt-8 min-w-48 font-semibold"
              >
                <div className="w-14 h-14 bg-blue-500 rounded-full -mr-5" />
                <span className="font-bold">VIEW ALL</span>
                <span>
                  <Image src={rightArrow} className="ms-10" width={30} height={20} />
                </span>
              </Link>
            </div>
        </div>
      </div>
    </Container>
  );
}
