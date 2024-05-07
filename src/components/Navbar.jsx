import React from "react";
import logo from "../asset/luxlogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar font-bold p-1 rounded-lg mx-3  flex items-center">
      <img
        className="w-16"
        src={logo}
        alt="lux house"
      />
      <span>LUX HOUSE</span>

      <div className="links ml-auto text-center">
        <Link
          to="/"
          className="mr-20"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="mr-20"
        >
          About
        </Link>

        <Link
          to="/properties"
          className="mr-20"
        >
          Properties
        </Link>

        <Link
          to="/contact"
          className="mr-20"
        >
          Contact
        </Link>
      </div>

      <Link
        to="/consultation"
        className="ml-auto"
      >
        Get Consultation
      </Link>
    </div>
  );
};

export default Navbar;
