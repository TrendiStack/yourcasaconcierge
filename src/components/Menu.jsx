import { useContext } from 'react';
import { MenuContext } from '../context/MenuContext';
import { HashLink as Link } from 'react-router-hash-link';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

import { motion as m } from 'framer-motion';
import { SanityContext } from '../context/SanityContext';

const Menu = () => {
  const { isOpen, toggleMenu } = useContext(MenuContext);
  const { navigation: nav } = useContext(SanityContext);
  const navLinks = nav[0]?.navigation;
  return (
    <>
      <m.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen === 'open' ? 0 : '-100%' }}
        transition={{ duration: 0.5 }}
        className={`
        fixed top-0 left-0 h-screen w-4/5 z-40 shadow-lg
    lg:hidden bg-dark garamond text-white menu-text py-28 px-8`}
      >
        <ul className="flex flex-col gap-10">
          {navLinks?.map(item => {
            return (
              <li key={item.id}>
                <Link onClick={toggleMenu} to={`/#${item.path}`}>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <li>
            <p className="text-xl ">hello@yourcasaconcierge.com</p>
          </li>
          <li className="flex gap-5">
            <FaFacebookF className="text-xl" />
            <FaTwitter className="text-xl" />
            <FaInstagram className="text-xl" />
            <FaLinkedin className="text-xl" />
          </li>
        </ul>
      </m.div>

      <m.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen === 'open' ? 0 : '-100%' }}
        transition={{ duration: 0.7 }}
        onClick={toggleMenu}
        className={`${
          isOpen === 'open' ? 'block' : 'hidden'
        } fixed top-0 left-0 h-screen w-screen opacity-50 z-30 backdrop-filter backdrop-blur-sm bg-black/50`}
      ></m.div>
    </>
  );
};

export default Menu;
