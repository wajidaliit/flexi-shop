import Container from "../../../components/share/Container";
import NavMenuLinks from "./nav-links";

export default function Header() {
  return (
    <header className=" sticky top-0 z-50 bg-gradient-to-r from-[#3A6681] from-10% via-[#5E829C] via-30% to-[#547892] to-90%">
      <Container className="py-4 flex justify-between items-center">
        <div>
          <h1 className="text-white font-bold text-xl sm:text-2xl lg:text-3xl ">
            Flexi-shop
          </h1>
        </div>
        <div>
          <NavMenuLinks />
        </div>
      </Container>
    </header>
  );
}
