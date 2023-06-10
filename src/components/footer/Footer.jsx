import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-brown text-white py-8">
      <div className="w-[90%] md:w-[80%] mx-auto">
        <div>
                  <span className="font-bold text-2xl font-mont">Bookr</span>
                  <div>
                      <FaFacebookF/>
                     <BsTwitter/>
                    <BsInstagram/>
                  </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer