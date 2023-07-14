import { AnimationContext } from '../../context/AnimationContext';
import { FiCheck } from 'react-icons/fi';
import { motion as m } from 'framer-motion';
import { useContext } from 'react';

const Plan = ({ image, title, services }) => {
  const { generic } = useContext(AnimationContext);
  return (
    <m.div variants={generic} className="grid lg:grid-cols-2 max-lg:gap-10">
      {/* Services Container */}
      <div className="flex flex-col gap-5 lg:w-4/5 transition-all duration-500">
        <m.p className="text-4xl 2xl:text-[64px] header-text">Services</m.p>
        <m.div className="bg-variant text-[18px]">
          <ul className="flex flex-col gap-5 p-5 text-light">
            {services?.map(service => (
              <li
                key={service?.id}
                className={`flex justify-between items-center`}
              >
                <p>{service?.title}</p>
                <FiCheck className="text-accent" />
              </li>
            ))}
          </ul>
        </m.div>
        <m.a href="#contact" className="pricing-btn-mobile pricing-btn">
          Get Started
        </m.a>
      </div>

      <m.div
        className={`w-full h-[300px] md:h-full shadow-lg max-lg:row-start-1`}
      >
        <img
          className="w-full h-full object-cover"
          src={image}
          loading="lazy"
          alt="Plan Image"
        />
      </m.div>
    </m.div>
  );
};

export default Plan;
