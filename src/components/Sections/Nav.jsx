import { useContext, useState, useEffect } from 'react';
import { motion as m } from 'framer-motion';
import { MenuContext } from '../../context/MenuContext';
import { RefContext } from '../../context/RefContext';
import { HashLink as Link } from 'react-router-hash-link';
import { Outlet } from 'react-router-dom';
import LinkItem from '../LinkItem';
import Menu from '../Menu';
import content from '../../content';
import logo from '../../assets/images/ycclogo.svg';
import smallLogo from '../../assets/images/smallLogo.svg';
import { AnimationContext } from '../../context/AnimationContext';

const Nav = () => {
  const { isOpen, toggleMenu } = useContext(MenuContext);
  const { footervisible } = useContext(RefContext);
  const { generic } = useContext(AnimationContext);
  // background
  const [bg, setBg] = useState();
  const { nav } = content;
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setBg(window.scrollY > 0 ? 'bg-dark' : 'bg-transparent');
    });
    setBg(
      isOpen === 'open'
        ? 'bg-transparent'
        : window.scrollY > 0
        ? 'bg-dark'
        : 'bg-transparent'
    );

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, [isOpen]);

  return (
    <>
      <Menu />
      <m.nav
        onClick={isOpen === 'open' ? toggleMenu : null}
        className={`${bg} ${
          footervisible ? 'top-[-130px]' : 'top-0'
        } fixed top-0 left-0 w-screen py-5 md:px-0 z-50 transition-all duration-500`}
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <m.div
          variants={generic}
          className="container layout-padding flex justify-between items-center"
        >
          <Link to="/#home">
            <img
              className="hidden xl:block w-[250px]"
              src={logo}
              loading="lazy"
              alt="large logo"
            />
            <img
              className="xl:hidden w-[80px]"
              src={smallLogo}
              loading="lazy"
              alt="small logo"
            />
          </Link>
          <ul className="hidden relative xl:flex gap-3 text-white text-md font-normal text-lg ">
            {nav.map((item, index) => {
              return (
                <m.li variants={generic} key={item.id}>
                  <LinkItem to={item.path} text={item.title} />
                </m.li>
              );
            })}
          </ul>
          <m.div
            variants={generic}
            className="flex items-center gap-4 xl:hidden text-white"
          >
            <Link to={`/#${nav[nav.length - 1].path}`} className="xl:hidden">
              Contact
            </Link>
            <div onClick={toggleMenu} className="menu-btn">
              <div className={`${isOpen} bg-white `}></div>
              <div className={`${isOpen} bg-white `}></div>
            </div>
          </m.div>
        </m.div>
      </m.nav>
      <Outlet />
    </>
  );
};

export default Nav;
