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
  const { footer: data2 } = useContext(SanityContext);
  const footer = data2[0] === undefined ? null : data2[0];

  return (
    <>
      <m.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen === 'open' ? 0 : '-100%' }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 h-screen w-4/5 z-40 shadow-lg
        xl:hidden bg-white text-black py-28"
      />
      <m.ul
        initial={{ x: '-100%' }}
        animate={{ x: isOpen === 'open' ? 0 : '-100%' }}
        transition={{ duration: 0.7 }}
        className="xl:hidden fixed top-28 left-0 h-screen w-screen z-50 garamond menu-text"
      >
        <div className="container mx-auto flex flex-col gap-10">
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
            <a className="text-xl" href={`mailto:${footer?.email}`}>
              hello@yourcasaconcierge.com
            </a>
          </li>
          <li className="flex gap-5">
            <FaFacebookF className="text-xl cursor-pointer" />
            <FaTwitter className="text-xl cursor-pointer" />
            <FaInstagram className="text-xl cursor-pointer" />
            <FaLinkedin className="text-xl cursor-pointer" />
          </li>
        </div>
      </m.ul>

      <m.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen === 'open' ? '400%' : '-100%' }}
        transition={{ duration: 0.5 }}
        onClick={toggleMenu}
        className={`${
          isOpen === 'open' ? 'block' : 'hidden'
        } fixed top-0 left-0 h-screen w-1/5 opacity-50 z-30 backdrop-filter backdrop-blur-sm bg-black/50 cursor-pointer`}
      ></m.div>
    </>
  );
};

export default Menu;
