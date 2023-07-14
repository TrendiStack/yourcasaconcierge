import { motion as m } from 'framer-motion';
import { SanityContext } from '../context/SanityContext';
import { useContext, useEffect } from 'react';
import LogoSvg from './LargeLogo';
import Sunset from './coming-soon/Sunset';

const ComingSoon = () => {
  const { footer: data2 } = useContext(SanityContext);
  const footer = data2[0] === undefined ? null : data2[0];

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.backgroundColor = '#1F1F1F';
    return () => {
      body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <m.main aria-label="coming-soon" className="overflow-hidden">
      <Sunset />
      <m.div className="text-center  w-full text-light">
        <m.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 1.5, delay: 2.5 }}
          className="absolute left-1/2 -translate-x-1/2 top-6 md:top-4 z-50"
        >
          <LogoSvg bg="bg-dark" comingSoon />
        </m.div>
        <m.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="text-[10vw] lg:text-8xl capitalize garamond absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10"
        >
          coming soon
        </m.p>
        <m.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 1.5, delay: 2 }}
          className="text-center text-base md:text-2xl absolute bottom-12 md:bottom-6 left-0 w-full z-10"
        >
          <p className="font-bold capitalize">contact</p>
          <a className="text-sm md:text-base" href={`mailto:${footer?.email}`}>
            {footer?.email}
          </a>
        </m.div>
      </m.div>
    </m.main>
  );
};

export default ComingSoon;
