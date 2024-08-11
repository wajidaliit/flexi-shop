import Image from "../../components/image";
import NewCollectionImg from "../../assets/banner/New-Collection-img.png";
import mobileBanner from "../../assets/banner/mobileBanner.png";
import Button from "../../components/Button";

export default function NewCollectios() {
  return (
    <div className="py-8 w-full relative">
      <Image src={NewCollectionImg} className="bg-cover hidden md:block lg:h-full bg-left w-full max-w-none overflow-hidden" />
      <Image src={mobileBanner} className="bg-cover md:hidden h-[35rem] lg:h-full bg-left w-full max-w-none overflow-hidden" />
      <div className="bg-white absolute bottom-0 right-0 flex flex-wrap gap-4 items-center rounded-tl-3xl px-6  py-10 w-3/4">
      <div className="max-w-xl">
       <h3 className="text-xl font-medium uppercase" >New Collections</h3>
       <p>Lorem ipsum is placeholder text commonly used in the graphic, print.</p>
      </div> 
       <Button variant="primary" className='uppercase'>
        show Now
       </Button> 
      </div>
    </div>
  );
}
