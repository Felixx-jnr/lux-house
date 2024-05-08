import React, { useState } from "react";
import logo from "../asset/luxlogo.png";
import NavBtn from "./NavBtn";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "PROPERTIES", link: "/properties" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="md:flex items-center bg-neutral-800 fixed top-0 z-10 w-full">
      <div className="font-semibold cursor-pointer flex items-center max-md:bg-slate-600 text-2xl ">
        <span className="ml-12 mt-1">
          <img
            className="w-16"
            src={logo}
            alt="Lux houses"
          />
        </span>
        LUX HOUSES
      </div>

      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
      >
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
      </div>

      <ul
        className={`md:flex md:items-center ml-auto mr-10 max-md:bg-slate-600 absolute md:static md:z-auto z-[-1] left-0 w-full h-full md:w-auto md:pl-0 pl-9 ease-in ${
          open ? "top-15 " : "top-[-1000px]"
        }`}
      >
        {Links.map((link) => (
          <li
            key={link.name}
            className="max-md:  ml-16 font-bold md:my-0 text-1xl"
          >
            <a
              href={link.link}
              className=""
            >
              {link.name}
            </a>
          </li>
        ))}
        <NavBtn></NavBtn>
      </ul>
    </div>
  );
};

export default Navbar;
