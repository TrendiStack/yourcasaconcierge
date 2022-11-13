import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import { HashLink as Link } from "react-router-hash-link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import { motion as m } from "framer-motion";

const Menu = () => {
  const { isOpen, toggleMenu } = useContext(MenuContext);
  return (
    <>
      <m.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen === "open" ? 0 : "-100%" }}
        transition={{ duration: 0.5 }}
        className={`
        fixed top-0 left-0 h-screen w-4/5 bg-white z-40 shadow-lg
    lg:hidden bg-variant garamond text-white text-4xl py-28 px-8 `}
      >
        <ul className="flex flex-col gap-10">
          <li>
            <Link onClick={toggleMenu} to="#about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="#services">
              Services
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="#prices">
              Pricing
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="#brands">
              Brands
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="#contact">
              Contact
            </Link>
          </li>
          <div>
            <p className="text-2xl">1 800 123 4567</p>
            <p className="text-xl ">hello@youcasaconcierge.com</p>
          </div>
          <div className="flex gap-5">
            <FaFacebookF className="text-xl" />
            <FaTwitter className="text-xl" />
            <FaInstagram className="text-xl" />
            <FaLinkedin className="text-xl" />
          </div>
        </ul>
      </m.div>

      <m.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen === "open" ? 0 : "-100%" }}
        transition={{ duration: 0.7 }}
        onClick={toggleMenu}
        className={`${
          isOpen === "open" ? "block" : "hidden"
        } fixed top-0 left-0 h-screen w-screen opacity-50 z-30 backdrop-filter backdrop-blur-sm bg-black/50`}
      ></m.div>
    </>
  );
};

export default Menu;
