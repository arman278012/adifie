import React, { useState } from 'react';
import { FaGlobeAmericas } from "react-icons/fa";
import { FaRadio } from "react-icons/fa6";
import { MdOutlineConnectingAirports } from "react-icons/md";
import { BsAirplaneFill, BsCart4 } from "react-icons/bs";
import { MdOutlineStoreMallDirectory } from "react-icons/md";
import { MdOutlineSportsHandball } from "react-icons/md";
import { FaPersonDotsFromLine } from "react-icons/fa6";
import { SiAffinitydesigner } from "react-icons/si";
import { CgStudio } from "react-icons/cg";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { PiTelevisionBold } from "react-icons/pi";
import { FaCarSide } from "react-icons/fa";
import { GiNewspaper } from "react-icons/gi";
import { IoMdPaper } from "react-icons/io";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { PiTelevisionSimpleLight } from "react-icons/pi";

const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-white text-xl">Logo</div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white">Home</a>
          <div className="relative">
            <button 
              className="text-white" 
              onMouseEnter={() => setIsMegaMenuOpen(true)} 
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              Advertisement
            </button>
            {isMegaMenuOpen && (
              <div 
                className="absolute left-0 w-full bg-white shadow-lg py-4 rounded-lg"
                style={{ minWidth: "600px" }} // Adjust the width as needed
                onMouseEnter={() => setIsMegaMenuOpen(true)} 
                onMouseLeave={() => setIsMegaMenuOpen(false)}
              >
                <div className="container mx-auto grid grid-cols-3 gap-4 px-4">
                  <div className="flex items-center py-2"><FaGlobeAmericas className="mr-2" /> Cinema</div>
                  <div className="flex items-center py-2"><HiOutlineGlobeAlt className="mr-2" /> Digital Ads</div>
                  <div className="flex items-center py-2"><GiNewspaper className="mr-2" /> Magazine</div>
                  <div className="flex items-center py-2"><IoMdPaper className="mr-2" /> Newspaper</div>
                  <div className="flex items-center py-2"><FaCarSide className="mr-2" /> BTL</div>
                  <div className="flex items-center py-2"><PiTelevisionBold className="mr-2" /> Television</div>
                  <div className="flex items-center py-2"><PiTelevisionSimpleLight className="mr-2" /> Outdoor</div>
                  <div className="flex items-center py-2"><FaRadio className="mr-2" /> Radio</div>
                  <div className="flex items-center py-2"><MdOutlineConnectingAirports className="mr-2" /> Airport</div>
                  <div className="flex items-center py-2"><BsAirplaneFill className="mr-2" /> Airplane</div>
                  <div className="flex items-center py-2"><MdOutlineSportsHandball className="mr-2" /> Sports</div>
                  <div className="flex items-center py-2"><FaPersonDotsFromLine className="mr-2" /> Influencers</div>
                  <div className="flex items-center py-2"><SiAffinitydesigner className="mr-2" /> Designers</div>
                  <div className="flex items-center py-2"><MdOutlineDeveloperMode className="mr-2" /> Developers</div>
                  <div className="flex items-center py-2"><CgStudio className="mr-2" /> Studios</div>
                </div>
              </div>
            )}
          </div>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Contact</a>
          <a href="#" className="text-white">Login</a>
          <a href="#" className="text-white">Signup</a>
          <a href="#" className="text-white"><BsCart4 /></a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600">
          <a href="#" className="block px-4 py-2 text-white">Home</a>
          <div className="relative">
            <button 
              className="block w-full text-left px-4 py-2 text-white" 
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            >
              Advertisement
            </button>
            {isMegaMenuOpen && (
              <div className="bg-white shadow-lg py-4 rounded-lg">
                <div className="grid grid-cols-3 gap-4 px-4">
                  <div className="flex items-center py-2"><FaGlobeAmericas className="mr-2" /> Cinema</div>
                  <div className="flex items-center py-2"><HiOutlineGlobeAlt className="mr-2" /> Digital Ads</div>
                  <div className="flex items-center py-2"><GiNewspaper className="mr-2" /> Magazine</div>
                  <div className="flex items-center py-2"><IoMdPaper className="mr-2" /> Newspaper</div>
                  <div className="flex items-center py-2"><FaCarSide className="mr-2" /> BTL</div>
                  <div className="flex items-center py-2"><PiTelevisionBold className="mr-2" /> Television</div>
                  <div className="flex items-center py-2"><PiTelevisionSimpleLight className="mr-2" /> Outdoor</div>
                  <div className="flex items-center py-2"><FaRadio className="mr-2" /> Radio</div>
                  <div className="flex items-center py-2"><MdOutlineConnectingAirports className="mr-2" /> Airport</div>
                  <div className="flex items-center py-2"><BsAirplaneFill className="mr-2" /> Airplane</div>
                  <div className="flex items-center py-2"><MdOutlineSportsHandball className="mr-2" /> Sports</div>
                  <div className="flex items-center py-2"><FaPersonDotsFromLine className="mr-2" /> Influencers</div>
                  <div className="flex items-center py-2"><SiAffinitydesigner className="mr-2" /> Designers</div>
                  <div className="flex items-center py-2"><MdOutlineDeveloperMode className="mr-2" /> Developers</div>
                  <div className="flex items-center py-2"><CgStudio className="mr-2" /> Studios</div>
                </div>
              </div>
            )}
          </div>
          <a href="#" className="block px-4 py-2 text-white">About</a>
          <a href="#" className="block px-4 py-2 text-white">Contact</a>
          <a href="#" className="block px-4 py-2 text-white">Login</a>
          <a href="#" className="block px-4 py-2 text-white">Signup</a>
          <a href="#" className="block px-4 py-2 text-white"><BsCart4 /></a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
