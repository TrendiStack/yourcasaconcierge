import { motion as m } from 'framer-motion';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimationContext } from '../../context/AnimationContext';
import { FiCheck } from 'react-icons/fi';
import { IoCloseSharp } from 'react-icons/io5';

const Plan = ({ id, reversed, image, title, desc, services }) => {
  const { setReversed, pricing } = useContext(AnimationContext);
  useEffect(() => {
    setReversed(reversed);
  }, [reversed, setReversed]);

  const styles = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <m.div
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.1 }}
      className={`flex ${
        reversed ? 'md:flex-row-reverse' : 'md:flex-row'
      } flex-col md:items-center md:justify-between gap-10 md:h-[500px]`}
    >
      <m.div
        variants={pricing}
        className={`w-full h-[300px] md:h-full object-cover shadow-lg ${
          reversed ? 'md:ml-10' : 'md:mr-10'
        }`}
        style={styles}
      />
      <m.div className="flex flex-col gap-5 w-full md:w-[80%] lg:w-[60%] xl:w-[80%] transition-all duration-500 ">
        <m.p
          variants={pricing}
          className="text-4xl 2xl:text-[64px] text-primary font-semibold"
        >
          {title}
        </m.p>
        <m.div variants={pricing} className="bg-dark text-[18px] ">
          <ul className="flex flex-col gap-5 p-5 text-light">
            {services.map(service => {
              const isAvailable =
                service.title === 'Maintenance & Housekeeping' && id === 1;
              return (
                <li
                  className={`${
                    isAvailable && 'opacity-50 line-through'
                  } flex justify-between items-center`}
                >
                  <p>{service.title}</p>
                  {isAvailable ? (
                    <IoCloseSharp />
                  ) : (
                    <FiCheck className="text-secondary" />
                  )}
                </li>
              );
            })}
          </ul>
        </m.div>
        <m.a
          href="#contact"
          variants={pricing}
          className="pricing-btn-mobile pricing-btn"
        >
          Get Started
        </m.a>
      </m.div>
    </m.div>
  );
};

export default Plan;
