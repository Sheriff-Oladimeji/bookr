import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-brown text-white py-8">
      <div className="w-[90%] md:w-[80%] mx-auto grid md:grid-cols-3">
        <div>
          <span className="font-bold text-2xl font-mont">Bookr</span>
          <div className="flex gap-4 text-white  cursor-pointer">
            <FaFacebookF size={20} className="hover:text-dark" />
            <BsTwitter size={20} className="hover:text-dark" />
            <BsInstagram size={20} className="hover:text-dark" />
          </div>
        </div>
        <div>
                  <span className="font-bold text-2xl font-mont">CONTACT</span>
                  <p></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer