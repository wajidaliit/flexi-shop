import ProductCard from "../../components/product-card";
import Container from "../../components/share/Container";
import product1 from "../../assets/products/product-1.png";
import product2 from "../../assets/products/product-2.png";
import product3 from "../../assets/products/product-3.png";
import product4 from "../../assets/products/product-4.png";
import Button from "../../components/Button";

const data = [
  {
    img: product1,
    name: "Backpack",
    price: "$285.00",
  },
  {
    img: product2,
    name: "Backpack",
    price: "$285.00",
  },
  {
    img: product3,
    name: "Backpack",
    price: "$285.00",
  },
  {
    img: product4,
    name: "Backpack",
    price: "$285.00",
  },
];

export default function ProductItem() {
  return (
    <Container>
      <div className="flex flex-wrap gap-4 justify-center md:justify-between items-center mb-8 ">
        <h2 className="text-2xl font-semibold">Selected just for you</h2>
         <Button variant="outline" className='hidden md:flex'>SHOW MORE</Button>
      </div>
      <ProductCard products={data} />
      <div  className='text-center mt-4 md:hidden'>
      <Button variant="outline">SHOW MORE</Button> 
      </div>
    </Container>
  );
}
