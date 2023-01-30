import { motion as m } from 'framer-motion';
import { useContext } from 'react';
import { AnimationContext } from '../../context/AnimationContext';
import { FiCheck } from 'react-icons/fi';
import { IoCloseSharp } from 'react-icons/io5';

const Plan = ({ id, reversed, image, title, services }) => {
  const { generic } = useContext(AnimationContext);
  return (
    <m.div
      variants={generic}
      className={`flex ${
        reversed ? 'md:flex-row-reverse' : 'md:flex-row'
      } flex-col md:items-center md:justify-between gap-10 md:h-[500px]`}
    >
      <m.div
        className={`w-full h-[300px] md:h-full object-cover shadow-lg ${
          reversed ? 'md:ml-10' : 'md:mr-10'
        }`}
      >
        <img
          className="w-full h-full object-cover"
          src={image}
          loading="lazy"
          alt="Plan Image"
        />
      </m.div>

      <div className="flex flex-col gap-5 w-full md:w-[80%] lg:w-[60%] xl:w-[80%] transition-all duration-500 ">
        <m.p className="text-4xl 2xl:text-[64px] text-primary font-semibold">
          {title}
        </m.p>
        <m.div className="bg-dark text-[18px] ">
          <ul className="flex flex-col gap-5 p-5 text-light">
            {services?.map(service => {
              const isAvailable =
                service?.title === 'Maintenance & Housekeeping' && id === 1;
              return (
                <li
                  key={service?.id}
                  className={`${
                    isAvailable && 'opacity-50 line-through'
                  } flex justify-between items-center`}
                >
                  <p>{service?.title}</p>
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
        <m.a href="#contact" className="pricing-btn-mobile pricing-btn">
          Get Started
        </m.a>
      </div>
    </m.div>
  );
};

export default Plan;
