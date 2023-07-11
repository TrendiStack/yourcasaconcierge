import { motion as m } from 'framer-motion';
import { useContext } from 'react';
import { AnimationContext } from '../../context/AnimationContext';
import BrandLogo from '../brands/BrandLogo';

const Brands = () => {
  const { generic } = useContext(AnimationContext);
  return (
    <m.section
      id="partners"
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      className="container layout-padding flex items-center"
    >
      <m.div variants={generic} className="grid grid-cols-2 w-full">
        <BrandLogo logo="tripadvisor" borderRight borderBottom />
        <BrandLogo logo="airbnb" borderBottom />
        <BrandLogo logo="homeaway" borderRight borderBottom />
        <BrandLogo logo="vrbo" borderBottom />
        <BrandLogo logo="expedia" borderRight />
        <BrandLogo logo="booking" />
      </m.div>
    </m.section>
  );
};

export default Brands;
