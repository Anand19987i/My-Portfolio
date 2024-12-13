import React from 'react';

const Navbar = () => {
  return (
    <div className="h-16 text-white font-monospace flex items-center justify-between px-4 md:px-16">
      {/* Logo Section */}
      <h1 className="text-2xl font-bold md:text-3xl">Anand</h1>

      {/* Navbar Links */}
      <div className="flex gap-3 md:gap-10">
        <span className="cursor-pointer hover:text-gray-400 transition duration-200">
          <a href="#about">About</a>
        </span>
        <span className="cursor-pointer hover:text-gray-400 transition duration-200">
          <a href="#skills">Skills</a>
        </span>
        <span className="cursor-pointer hover:text-gray-400 transition duration-200">
          <a href="#projects">Projects</a>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
