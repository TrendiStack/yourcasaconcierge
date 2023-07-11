import { AnimationContext } from '../../context/AnimationContext';
import { HashLink as Link } from 'react-router-hash-link';
import { MenuContext } from '../../context/MenuContext';
import { motion as m } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import { RefContext } from '../../context/RefContext';
import { SanityContext } from '../../context/SanityContext';
import { urlFor } from '../../lib/client';
import { useContext, useState, useEffect } from 'react';
import LinkItem from '../LinkItem';
import LogoSvg from '../LogoSvg';
import Menu from '../Menu';

const Nav = () => {
  const { isOpen, toggleMenu } = useContext(MenuContext);
  const { footervisible } = useContext(RefContext);
  const { generic } = useContext(AnimationContext);
  const { navigation: nav, footer: foot } = useContext(SanityContext);
  const navLinks = nav[0]?.navigation || [];
  const footer = foot[0] || {};
  // background
  const [bg, setBg] = useState();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setBg(window.scrollY > 0 ? 'bg-white' : 'bg-transparent');
    });
    setBg(
      isOpen === 'open'
        ? 'bg-transparent'
        : window.scrollY > 0
        ? 'bg-white'
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
        ${bg === 'bg-white' ? 'shadow-lg text-black' : 'text-white'}
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
            {footer?.logo && (
              // <img
              //   className="hidden xl:block w-[250px]"
              //   src={urlFor(footer.logo).url()}
              //   loading="lazy"
              //   alt="large logo"
              // />
              <LogoSvg bg={bg} />
            )}
            {footer?.smallLogo && (
              <img
                className={`
                ${
                  bg === 'bg-white'
                    ? 'filter invert'
                    : isOpen === 'open'
                    ? 'filter invert'
                    : 'filter brightness-0 invert'
                }
                xl:hidden w-[80px] 
                `}
                src={urlFor(footer.smallLogo).url()}
                loading="lazy"
                alt="small logo"
              />
            )}
          </Link>
          <ul className="hidden relative xl:flex gap-3 text-md font-normal text-lg">
            {navLinks?.map((item, index) => {
              return (
                <m.li key={index}>
                  <LinkItem to={item.path} text={item.title} />
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
                className="xl:hidden"
              >
                Contact
              </Link>
            )}

            <div onClick={toggleMenu} className="menu-btn cursor-pointer">
              <div
                className={`${isOpen} 
                ${bg === 'bg-white' ? 'bg-black' : 'bg-white'}`}
              ></div>
              <div
                className={`${isOpen} ${
                  bg === 'bg-white' ? 'bg-black' : 'bg-white'
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
