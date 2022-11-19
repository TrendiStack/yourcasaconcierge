import { useContext, useState, useEffect } from "react";
import { MenuContext } from "../context/MenuContext";
import { HashLink as Link } from "react-router-hash-link";
import { Outlet } from "react-router-dom";
import logo from "../assets/images/ycclogo.svg";
import LinkItem from "./LinkItem";
import Menu from "./Menu";
import content from "../content";
import { RefContext } from "../context/RefContext";

const Nav = () => {
  const { isOpen, toggleMenu } = useContext(MenuContext);
  const { footervisible } = useContext(RefContext);
  // background
  const [bg, setBg] = useState("bg-transparent");
  const { nav } = content;
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
        onClick={isOpen === "open" ? toggleMenu : null}
        className={`${bg} ${
          footervisible ? "top-[-100px]" : "top-0"
        } fixed top-0 left-0 w-screen py-5 md:px-0 z-50 transition-all duration-500`}
      >
        <div className="container layout-padding flex justify-between items-center">
          <Link to="/#home">
            <img className="hidden xl:block w-[200px] logo" src={logo} alt="" />
            <h1 className="xl:hidden garamond text-white text-4xl">YCC</h1>
          </Link>
          <ul className="hidden relative xl:flex gap-3 text-white text-md font-light">
            {nav.map((item, index) => {
              return (
                <li key={item.id}>
                  <LinkItem to={item.path} text={item.title} />
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-4 xl:hidden text-white">
            <Link to={`/#${nav[nav.length - 1].path}`} className="xl:hidden">
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
