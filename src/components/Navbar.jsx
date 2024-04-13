import React from "react";
import { Link } from "react-scroll";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mx-auto flex items-center justify-center bg-[#B48C56] h-13 pr-10 gap-12 max-w-6xl w-full">
      <div className=" mr-auto ">
        <img
          src="/PUNJAB_LOGO.png"
          alt="Logo"
          className="w-44 h-16 object-fill  "
          style={{ borderRadius: "0", marginLeft: "0" }}
        />{" "}
        {/* Replace with your image path */}
      </div>
      <div className="md:hidden z-50">
        <FaBars className="text-2xl" onClick={toggleMobileMenu} />
      </div>
      <nav
        className={`menu absolute md:relative top-full left-0 w-full bg-[#B48C56] md:bg-transparent p-5 md:p-0 transition-transform ${
          mobileMenuOpen ? "block" : "hidden"
        } md:block`}
      ><FaTimes className="text-2xl md:hidden" onClick={toggleMobileMenu} />
      
        {" "}
        <ul className="flex list-none flex-col md:flex-row md:flex p-0 mx-16  ${mobileMenuOpen ? '' : 'hidden'}" >
          <li className="px-5">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-xl font-normal font-belleza text-[#030114] no-underline transition-all duration-300 hover:text-[#EECE9E] hover:underline hover:cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li className="px-5">
            <Link
              to="featured"
              smooth={true}
              duration={500}
              className="text-xl font-belleza text-[#030114] no-underline transition-all duration-300 hover:text-[#EECE9E] hover:underline hover:cursor-pointer"
            >
              Featured
            </Link>
          </li>
          <li className="px-5">
            <Link
              to="gallery"
              smooth={true}
              duration={500}
              className="text-xl font-normal font-belleza text-[#030114] no-underline transition-all duration-300 hover:text-[#EECE9E] hover:underline hover:cursor-pointer"
            >
              Gallery
            </Link>
          </li>
          <li className="px-5">
            <Link
              to="collections"
              smooth={true}
              duration={500}
              className="text-xl font-belleza text-[#030114] no-underline transition-all duration-300 hover:text-[#EECE9E] hover:underline hover:cursor-pointer"
            >
              Collections
            </Link>
          </li>
          <li className="px-5">
            <Link
              to="newcollections"
              smooth={true}
              duration={500}
              className="text-xl font-belleza text-[#030114] no-underline transition-all duration-300 hover:text-[#EECE9E] hover:underline hover:cursor-pointer"
            >
              New Collections
            </Link>
          </li>
          <li className="px-5">
            <Link
              to="contactus"
              smooth={true}
              duration={500}
              className="text-xl font-normal font-belleza text-[#030114] no-underline transition-all duration-300 hover:text-[#EECE9E] hover:underline hover:cursor-pointer"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;