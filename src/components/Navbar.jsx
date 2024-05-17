// Inside your Navbar component

import React, { useState, useEffect } from "react";
import logo from "../asset/luxlogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const Links = [
    { name: "HOME", link: "/" },
    { name: "PROPERTIES", link: "/properties" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];

  const toggleDropdown = () => {
    setOpen(!open);

    document.body.style.overflow = !open ? "hidden" : "auto"; // Disable scrolling when open
  };

  const handleClickOutside = (event) => {
    if (open && event.target.className.includes("dropdown-overlay")) {
      setOpen(false);
      document.body.style.overflow = "auto"; // Restore scrolling when closing the dropdown
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [open]);

  const handleLinkClick = (link) => {
    //setOpen(false);
    document.body.style.overflow = "auto"; // Restore scrolling when clicking a link

    setTimeout(() => {
      window.location.href = link;
    }, 0); // Adjust the timeout to match your transition duration
  };

  return (
    <div className=" fixed top-0 w-full z-10 bg-nav">
      <div className="flex justify-between items-center px-4 pb-1">
        <div className="font-semibold text-2xl flex items-center">
          <img
            className=" w-14"
            src={logo}
            alt="Lux houses"
          />
          <span className="ml-2 text-gold text-[100%] lg:text-[120%]">
            LUXE HOUSES
          </span>
        </div>

        {/* Toggle Button for Medium/Small Screens */}
        <div
          onClick={toggleDropdown}
          className="text-4xl cursor-pointer pt-2 md:hidden text-gold "
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        {/* Links for Large Screens */}
        <ul className="hidden md:flex items-center text-gold  lg:mr-6">
          {Links.map((link) => (
            <li
              key={link.name}
              className="font-bold lg:ml-20 ml-10 text-xl hover:text-white cursor-pointer"
            >
              <a onClick={() => handleLinkClick(link.link)}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Full-Screen Dropdown for Medium/Small Screens */}
      <div
        className={`dropdown-overlay fixed left-0 w-full h-full bg-nav transition-transform duration-300 z-20 flex flex-col justify-center items-center text-white md:hidden ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ top: "59px" }} // Dropdown starts below the navbar
      >
        <ul className="flex flex-col justify-center items-center mb-16 text-center h-full text-gold">
          {Links.map((link) => (
            <li
              key={link.name}
              className="py-6 text-2xl font-bold hover:text-white cursor-pointer"
            >
              <a onClick={() => handleLinkClick(link.link)}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
