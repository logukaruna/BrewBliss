
import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <header className="fixed top-0 left-0 w-full bg-light-coffee dark:bg-gray-900 text-coffee-text dark:text-white shadow z-50">
      <div className="w-full flex justify-between items-center px-0 py-3 max-w-[100vw]">
        <a href="#home" className="text-2xl font-semibold pl-4">Brew Bliss</a>
        <div className="flex items-center space-x-6 pr-4">
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-coffee-accent transition">Home</a>
            <a href="#about" className="hover:text-coffee-accent transition">About</a>
            <a href="#menu" className="hover:text-coffee-accent transition">Menu</a>
            <a href="#testimonials" className="hover:text-coffee-accent transition">Testimonials</a>
            <a href="#contact" className="hover:text-coffee-accent transition">Contact</a>
          </nav>
          <button onClick={() => setIsDark(!isDark)} className="p-2 rounded hover:bg-coffee-accent/10 transition">
            {isDark ? (
              <SunIcon className="h-5 w-5 text-yellow-500" />
            ) : (
              <MoonIcon className="h-5 w-5 text-coffee-text" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
