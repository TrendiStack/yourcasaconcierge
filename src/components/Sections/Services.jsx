import { useContext } from 'react';
import { AnimationContext } from '../../context/AnimationContext';
import { SanityContext } from '../../context/SanityContext';
import { urlFor } from '../../lib/client';
import { motion as m } from 'framer-motion';
import Service from '../services/Service';

const Services = () => {
  const { services } = useContext(SanityContext);
  const { generic } = useContext(AnimationContext);
  const data = services[0] === undefined ? null : services[0];

  return (
    <div id="services" className="bg-dark pb-36">
      <m.div
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.5 }}
        className="container layout-padding flex flex-col"
      >
        <m.h1 variants={generic} className="garamond header-text text-light">
          {data?.title}
        </m.h1>

        <div>
          <m.ul
            variants={generic}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            <m.li
              variants={generic}
              className="md:col-span-2 md:row-span-2 bg-light h-full w-full p-5 mb-5 md:mb-0 shadow-lg"
            >
              {data?.image && (
                <img
                  src={urlFor(data.image).url()}
                  loading="lazy"
                  alt="Services Image"
                  className="h-full w-full object-cover"
                />
              )}
            </m.li>
            {data?.services.map(service => (
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
