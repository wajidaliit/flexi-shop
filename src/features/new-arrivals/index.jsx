import ProductCard from "../../components/product-card";
import Container from "../../components/share/Container";
import Newproduct1 from "../../assets/products/New-product-1.png";
import Newproduct2 from "../../assets/products/New-product-2.png";
import Newproduct3 from "../../assets/products/New-product-3.png";
import Newproduct4 from "../../assets/products/New-product-4.png";
import Button from "../../components/Button";

const data = [
  {
    img: Newproduct1,
    name: "Louis Vuitton Bag",
    price: "$285.00",
  },
  {
    img: Newproduct2,
    name: "Louis Vuitton Bag",
    price: "$285.00",
  },
  {
    img: Newproduct3,
    name: "Louis Vuitton Bag",
    price: "$285.00",
  },
  {
    img: Newproduct4,
    name: "Louis Vuitton Bag",
    price: "$285.00",
  },
];

export default function NewArrivals() {
  return (
    <Container className='py-8'>
      <div className="flex flex-wrap gap-4 justify-center md:justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold ">New Arrivals</h2>
        <Button variant="outline" className='hidden md:flex'>SHOW MORE</Button>
      </div>
      <ProductCard products={data} />
      <div className="mt-4 text-center md:hidden">
      <Button variant="outline" >SHOW MORE</Button>
      </div>
    </Container>
  );
}
