import { useContext } from 'react';
import { AnimationContext } from '../../context/AnimationContext';
import { SanityContext } from '../../context/SanityContext';
import { urlFor } from '../../lib/client';
import { motion as m } from 'framer-motion';
import MailChimpForm from '../contact/MailChimpForm';

const Hero = () => {
  const { generic } = useContext(AnimationContext);
  const { hero: data } = useContext(SanityContext);
  const hero = data[0] === undefined ? null : data[0];

  return (
    <m.header
      id="home"
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      className="relative lg:bg-fixed w-full flex flex-col justify-center h-[100.5vh] text-white"
    >
      {hero?.image && (
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={urlFor(hero.image).url()}
          loading="lazy"
          alt="Hero image"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-[#000] opacity-90 z-20" />
      <m.div
        variants={generic}
        className="relative container garamond layout-padding flex flex-col gap-3 xl:block z-30"
      >
        <m.h2 variants={generic} className="text-xl xl:text-2xl">
          {/* {hero?.heroTitleSmall} */}
          Higher occupancy, better guest experience, more revenue. We do it all,
          so you don't have to!
        </m.h2>
        <m.h1 variants={generic} className="text-5xl xl:text-8xl">
          {/* {hero?.heroTitleLarge} */}
          End-to-End Short Term Rental Management
        </m.h1>
        <m.button
          variants={generic}
          className="xl:hidden border border-white py-2 px-4 self-start"
        >
          <a href="#contact">Contact Us</a>
        </m.button>
      </m.div>
      <MailChimpForm />
    </m.header>
  );
};

export default Hero;
