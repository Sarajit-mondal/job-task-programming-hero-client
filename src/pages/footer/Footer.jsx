import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 px-4 text-center md:text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Company Name</h3>
          <p className="text-sm">
            Providing quality products and exceptional customer service since
            2024.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <p className="text-sm">
            <span className="font-semibold">Email:</span> support@company.com
          </p>
          <p className="text-sm">
            <span className="font-semibold">Phone:</span> +1 234 567 890
          </p>
          <p className="text-sm">
            <span className="font-semibold">Address:</span> 1234 Street Name,
            City, Country
          </p>
        </div>

        {/* Social Media Icons */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4 justify-center md:justify-start">
            <Link to="#" className="hover:text-white">
              <FaFacebookF />
            </Link>
            <Link to="#" className="hover:text-white">
              <FaTwitter />
            </Link>
            <Link to="#" className="hover:text-white">
              <FaInstagram />
            </Link>
            <Link to="#" className="hover:text-white">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; 2024 Company Name. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
