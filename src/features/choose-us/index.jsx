import ProductCard from "../../components/product-card";
import Container from "../../components/share/Container";
import pay from "../../assets/choose-us/pay.png"; 
import quality from "../../assets/choose-us/quality.png"; 
import shield from "../../assets/choose-us/shield.png"; 
import truck from "../../assets/choose-us/truck.png";   
import ChooseUsCard from "./choose-us-card";

const data = [
    {
      img: pay,
      title: "Easy Payments",
      des: "Fat new smallness few supposing",
    },
    {
      img: quality,
      title: "Finest Quality",
      des: "Fat new smallness few supposing",
    },
    {
      img: shield,
      title: "Money Back Guarantee",
      des: "Fat new smallness few supposing",
    },
    {
      img: truck,
      title: "Free Shipping",
      des: "Fat new smallness few supposing",
    },
  ];
  

export default function ChooseUs() {
  return (
    <Container className='py-20'> 
      <h2 className="text-2xl font-semibold text-center mb-10">Why Should Choose Us?</h2>  
      <ChooseUsCard data={data} />
    </Container>
  );
}
