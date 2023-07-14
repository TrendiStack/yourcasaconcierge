import { AnimationContext } from '../../context/AnimationContext';
import { HashLink as Link } from 'react-router-hash-link';
import { MenuContext } from '../../context/MenuContext';
import { motion as m } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import { RefContext } from '../../context/RefContext';
import { SanityContext } from '../../context/SanityContext';
import { useContext, useState, useEffect } from 'react';
import LargeSvg from '../LargeLogo';
import LinkItem from '../LinkItem';
import Menu from '../Menu';
import MobileLogo from '../MobileLogo';

const Nav = () => {
  const { isOpen, toggleMenu } = useContext(MenuContext);
  const { footervisible } = useContext(RefContext);
  const { generic } = useContext(AnimationContext);
  const { navigation: nav, footer: foot } = useContext(SanityContext);
  const navLinks = nav[0]?.navigation || [];
  // background
  const [bg, setBg] = useState();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setBg(window.scrollY > 0 ? 'bg-light' : 'bg-transparent');
    });
    setBg(
      isOpen === 'open'
        ? 'bg-transparent'
        : window.scrollY > 0
        ? 'bg-light'
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
        className={`
        ${bg} 
        ${footervisible ? 'top-[-130px]' : 'top-0'}
        ${bg === 'bg-light' ? 'shadow-lg text-dark' : 'text-light'}
        fixed top-0 left-0 w-full py-5 z-50 transition-all duration-500`}
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
            <LargeSvg bg={bg} nav />
            <MobileLogo bg={bg} isOpen={isOpen} />
          </Link>
          <ul className="hidden relative xl:flex gap-3 text-md font-normal text-lg">
            {navLinks?.map((item, index) => {
              return (
                <m.li key={index}>
                  <LinkItem to={item.path} text={item.title} bg={bg} />
                </m.li>
              );
            })}
          </ul>
          <m.div
            variants={generic}
            className="flex items-center gap-4 xl:hidden"
          >
            {navLinks && (
              <Link
                to={`/#${navLinks[navLinks.length - 1]?.path}`}
                className={`
                ${isOpen === 'open' ? 'text-dark' : ''}
                xl:hidden`}
              >
                Contact
              </Link>
            )}

            <div onClick={toggleMenu} className="menu-btn cursor-pointer">
              <div
                className={`${isOpen} 
                ${
                  bg === 'bg-light'
                    ? 'bg-dark'
                    : isOpen === 'open'
                    ? 'bg-dark'
                    : 'bg-light'
                }`}
              ></div>
              <div
                className={`${isOpen}  ${
                  bg === 'bg-light'
                    ? 'bg-dark'
                    : isOpen === 'open'
                    ? 'bg-dark'
                    : 'bg-light'
                }`}
              ></div>
            </div>
          </m.div>
        </m.div>
      </m.nav>
      <Outlet />
    </>
  );
};

export default Nav;
