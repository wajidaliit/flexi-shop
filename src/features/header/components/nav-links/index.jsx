import { useState } from "react";
import { NavLink } from "react-router-dom";
import { menu } from "./Menu";
import NavLanguage from "../nav-language";
import NavCart from "../nav-cart";
import NavSearch from "../nav-search"; 
import mobileMenu from '../../../../assets/header/mobileMenu.svg'
import crossIcon from '../../../../assets/header/crossIcon.svg'
import Image from "../../../../components/image";

export default function NavMenuLinks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      {/* Desktop Header */}
      <nav className="hidden lg:flex md:gap-6 lg:gap-14">
        {menu.header.menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className="text-xl md:text-2xl text-white hover:text-blue-400"
          >
            <span>{item.name}</span>
          </NavLink>
        ))}
        <NavLanguage />
        <NavCart />
        <NavSearch />
      </nav>

      {/* Mobile Header */}
      <div className="flex lg:hidden gap-4 justify-between items-center px-4 z-50">
         <NavCart />
        <button onClick={() => setIsOpen(!isOpen)} className="relative z-50">
          {isOpen ? <Image src={crossIcon} width={30} height={30}  /> : <Image src={mobileMenu} width={30} height={30}  /> }
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center space-y-6 text-white text-2xl">
          {menu.header.menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400"
            >
              <span>{item.name}</span>
            </NavLink>
          ))}
          <NavLanguage /> 
          <NavSearch />
        </div>
      )}
    </header>
  );
}
