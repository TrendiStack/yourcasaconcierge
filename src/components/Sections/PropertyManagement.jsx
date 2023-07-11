import { AnimationContext } from '../../context/AnimationContext';
import { motion as m } from 'framer-motion';
import { SanityContext } from '../../context/SanityContext';
import { useContext } from 'react';
import AboutArticle from '../about/AboutArticle';

const PropertyManagement = () => {
  const { about: data } = useContext(SanityContext);
  const { generic } = useContext(AnimationContext);
  const about = data[0] === undefined ? null : data[0];
  return (
    <m.section
      id="property-management"
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <div className="container layout-padding">
        <m.h1
          variants={generic}
          className="header-text text-primary text-center md:text-left"
        >
          Property Management
        </m.h1>

        <m.div
          variants={generic}
          className="grid grid-cols-1 2xl:grid-cols-3 gap-10 text-primary text-base xl:text-lg pt-10"
        >
          {about?.paragraphs.map((item, index) => {
            return (
              <AboutArticle
                key={index}
                title={item.title}
                text={item.paragraph}
              />
            );
          })}
        </m.div>
      </div>
    </m.section>
  );
};

export default PropertyManagement;
