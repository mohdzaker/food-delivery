import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold text-orange-500 mb-4">About Us</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            We at <span className="font-semibold text-orange-500">FoodieExpress</span> are dedicated to delivering delicious meals to your doorstep. From local favorites to international cuisines, we ensure every order is fresh and on time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-orange-500 mb-4">Quick Links</h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>
              <a
                href="#home"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold text-orange-500 mb-4">Contact Us</h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>
              <i className="fas fa-map-marker-alt mr-2"></i>123 Foodie Lane,
              Gourmet City, 45678
            </li>
            <li>
              <i className="fas fa-phone-alt mr-2"></i>+1 234 567 890
            </li>
            <li>
              <i className="fas fa-envelope mr-2"></i>support@fooddelivery.com
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center">
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-orange-500">FoodieExpress</span>. All rights reserved.
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
