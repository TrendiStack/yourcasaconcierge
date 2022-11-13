import React, { useContext, useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Outlet } from "react-router-dom";
import logo from "../assets/images/ycclogo.svg";
import { MenuContext } from "../context/MenuContext";
import LinkItem from "./LinkItem";
import Menu from "./Menu";

const Nav = () => {
  const { isOpen, toggleMenu } = useContext(MenuContext);
  // background
  const [bg, setBg] = useState("bg-transparent");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setBg("bg-variant-2");
      } else {
        setBg("bg-transparent");
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <>
      <Menu />
      <nav
        onClick={
          isOpen
            ? () => {
                toggleMenu();
              }
            : null
        }
        className={`${bg} fixed top-0 left-0 w-screen py-5 px-8 md:px-0 z-50 transition-all duration-500`}
      >
        <div className="container flex justify-between items-center">
          <Link to="/#home">
            <img className="hidden xl:block w-[200px] logo" src={logo} alt="" />
            <h1 className="xl:hidden garamond text-white text-4xl">YCC</h1>
          </Link>
          <ul className="hidden relative xl:flex gap-3 text-white text-md font-light">
            <li>
              <LinkItem to="about" text="About" />
            </li>
            <li>
              <LinkItem to="services" text="Services" />
            </li>
            <li>
              <LinkItem to="prices" text="Pricing" />
            </li>
            <li>
              <LinkItem to="brands" text="Brands" />
            </li>
            <li>
              <LinkItem to="contact" text="Contact" />
            </li>
          </ul>
          <div className="flex items-center gap-4 xl:hidden text-white">
            <Link to="/#contact" className="xl:hidden">
              Contact
            </Link>
            <div onClick={toggleMenu} className="menu-btn">
              <div className={`${isOpen} bg-white `}></div>
              <div className={`${isOpen} bg-white `}></div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
