import { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="w-full bg-[#FAFAFA] font-lato fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center py-6 w-[90%]  mx-auto">
        <div>
          <a href="/" className="font-bold text-dark text-2xl font-mont">
            Bookr
          </a>
        </div>
        <ul className="hidden md:flex space-x-12 font-semibold items-center text-lg">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <a href="#rooms">Rooms</a>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="flex gap-6 items-center">
          <Link to="/cart">
            <AiOutlineShoppingCart size={30} />
          </Link>
          <button
            onClick={handleNav}
            className="duration-500 outline-none border-none z-20 md:hidden"
          >
            {nav ? (
              <AiOutlineClose size={30} className="text-[#fff]" />
            ) : (
              <AiOutlineMenu size={30} className="text-dark" />
            )}
          </button>
        </div>
      </div>
      {nav ? (
        <div className="bg-[#000]/80 h-screen w-full z-10 fixed top-0 left-0 md:hidden"></div>
      ) : (
        ""
      )}
      <div
        className={
          nav
            ? "md:hidden w-[60%] h-screen bg-[#FAFAFA] top-0 left-0 fixed z-10 duration-500 px-8 py-8"
            : "md:hidden w-[50px] h-screen bg-white top-0 left-[-100%] fixed z-10 duration-500"
        }
      >
        <div>
          <a href="/" className="font-bold text-dark text-2xl font-mont">
            Bookr
          </a>
        </div>
        {/* mobile menu */}
        <ul className="flex flex-col space-y-12 font-semibold mt-12 text-xl">
          <li>
            <Link to="/" onClick={handleNav}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={handleNav}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleNav}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={handleNav}>
            Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
