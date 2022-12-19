import headerImg from '../assets/images/header-img-5.jpg';
import MailChimpForm from './contact/MailChimpForm';
import { motion as m } from 'framer-motion';
import { useContext } from 'react';
import { AnimationContext } from '../context/AnimationContext';

const Hero = () => {
  const { generic } = useContext(AnimationContext);
  const styles = {
    backgroundImage: `url(${headerImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <m.header
      id="home"
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      className="relative lg:bg-fixed w-full flex flex-col justify-center h-[100.5vh] text-white"
      style={styles}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#000] opacity-90 z-20" />
      <m.div
        variants={generic}
        className="relative container garamond layout-padding flex flex-col gap-3 xl:block z-30"
      >
        <m.h2 variants={generic} className="text-xl xl:text-2xl">
          At your service across
        </m.h2>
        <m.h1 variants={generic} className="text-5xl xl:text-8xl">
          the Greater Toronto Area
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
