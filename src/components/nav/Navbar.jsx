import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
      <nav className="w-full bg-[#FAFAFA] font-lato">
        <div className="flex justify-between items-center py-6 w-[90%] md:w-[80%] mx-auto">
          <div>
            <span className="font-bold text-dark text-2xl font-mont">
              Bookr
            </span>
          </div>
          <ul className="hidden md:flex space-x-12 font-semibold items-center">
            <li>Home</li>
            <li>Rooms</li>
            <li>Contact</li>
            <li>Services</li>
          </ul>

          <div className="flex gap-6 items-center">
            <AiOutlineShoppingCart size={30} />
            <button
              onClick={handleNav}
              className="duration-500 outline-none border-none z-20 md:hidden"
            >
              {nav ? (
                <AiOutlineClose size={30}  className="text-[#fff]"/>
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
              ? "md:hidden w-[50%] h-screen bg-[#FAFAFA] top-0 left-0 fixed z-10 duration-500 px-8 py-8"
              : "md:hidden w-[50px] h-screen bg-white top-0 left-[-100%] fixed z-10 duration-500"
          }
        >
          <div>
            <span className="font-bold text-dark text-2xl font-mont">
              Bookr
            </span>
          </div>

          <ul className="flex flex-col space-y-8 font-semibold mt-8 text-xl">
            <li>Home</li>
            <li>Rooms</li>
            <li>Contact</li>
            <li>Services</li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar