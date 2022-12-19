import { useContext } from 'react';
import { motion as m } from 'framer-motion';
import content from '../content';
import Service from './services/Service';
import { AnimationContext } from '../context/AnimationContext';

import { livingRoomOne } from '../assets/images/content';

const Services = () => {
  const { generic } = useContext(AnimationContext);
  const { services: data } = content;

  return (
    <div id="services" className="bg-variant pb-36">
      <m.div
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.5 }}
        className="container layout-padding flex flex-col"
      >
        <m.h1 variants={generic} className="garamond header-text-variant">
          {data.title}
        </m.h1>
        <div className="lg:flex items-center gap-10">
          <m.div
            variants={generic}
            className="bg p-5 lg:h-[40rem] w-full mb-5 md:mb-0 min-w-[50%] shadow-lg"
          >
            <img
              src={livingRoomOne}
              alt={livingRoomOne}
              className="h-full object-cover"
            />
          </m.div>
          <m.ul
            variants={generic}
            className="grid lg:grid-cols-2 gap-5 2xl:gap-10"
          >
            {data.services.map(service => (
              <Service
                key={service.id}
                num={service.id}
                title={service.title}
                desc={service.description}
              />
            ))}
          </m.ul>
        </div>
      </m.div>
    </div>
  );
};

export default Services;
