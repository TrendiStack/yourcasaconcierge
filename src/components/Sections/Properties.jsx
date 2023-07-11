import { AnimationContext } from '../../context/AnimationContext';
import { motion as m } from 'framer-motion';
import { useContext } from 'react';

const Properties = () => {
  const { generic } = useContext(AnimationContext);
  return (
    <section id="properties">
      <m.div
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.5 }}
        className="container layout-padding min-h-[50vh] flex flex-col justify-center items-center"
      >
        <m.h1 variants={generic} className="header-text text-primary">
          Our Properties
        </m.h1>
        <m.p variants={generic} className="text-gray-500 text-lg">
          Coming Soon
        </m.p>
      </m.div>
    </section>
  );
};

export default Properties;
