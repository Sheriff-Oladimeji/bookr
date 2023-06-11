import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF,  FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-brown text-white py-8">
      <div className="w-[80%] mx-auto ">
        <div className="flex flex-col md:flex-row md:items-center justify-around w-full ">
          <div className="flex flex-col justify-center space-y-4 mb-12">
            <span className="font-bold text-2xl font-mont">Bookr</span>
            <div className="flex gap-4 text-white  cursor-pointer">
              <FaFacebookF size={20} className="hover:text-dark" />
              <BsTwitter size={20} className="hover:text-dark" />
              <BsInstagram size={20} className="hover:text-dark" />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4 mb-12">
            <span className="font-bold text-xl font-lato">CONTACT</span>
            <p className="flex items-center gap-2 ">
              <FaPhoneAlt size={20} /> +1-543-123-4567
            </p>
            <p className="flex items-center gap-2 ">
              <MdMail size={20} /> bookr@gmail.com
            </p>
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <span className="font-bold text-xl font-lato">HOTEL ADDRESS</span>
            <p className="flex items-center gap-2 ">ABC Hotel</p>
            <p className="flex items-center gap-2 ">123 Main Street</p>
            <p className="flex items-center gap-2 ">Lagos, Nigeria</p>
          </div>
        </div>
        <div className="flex flex-col md:items-center md:flex-row justify-between mt-6 space-y-4 md:space-y-0">
          <ul className="flex items-center gap-6 md:gap-12  font-semibold    text-white text-[17px] flex-wrap">
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/gallery">Gallery</Link>
            </p>
            <p>
              <Link to="/contact">Contact</Link>
            </p>
            <p>
              <Link>Services</Link>
            </p>
          </ul>
          <div>
            <p>Copyright © sheriff oladimeji. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer