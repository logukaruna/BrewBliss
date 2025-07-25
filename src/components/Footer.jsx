import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#EFE3C8] dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Brew Bliss
          </h3>
          <p className="text-sm">© {new Date().getFullYear()} Brew Bliss. All rights reserved.</p>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium text-gray-800 dark:text-white">Quick Links</h4>
          <div className="flex flex-col md:flex-row md:space-x-4 items-center justify-center text-sm">
            <a href="#home" className="hover:text-[#B58E62]">Home</a>
            <a href="#about" className="hover:text-[#B58E62]">About</a>
            <a href="#menu" className="hover:text-[#B58E62]">Menu</a>
            <a href="#testimonials" className="hover:text-[#B58E62]">Testimonials</a>
            <a href="#contact" className="hover:text-[#B58E62]">Contact</a>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-800 dark:text-white mb-2">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <span className="text-xl cursor-pointer hover:text-[#B58E62]">Youtube</span>
            <span className="text-xl cursor-pointer hover:text-[#B58E62]">Instagram</span>
            <span className="text-xl cursor-pointer hover:text-[#B58E62]">Facebook</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
