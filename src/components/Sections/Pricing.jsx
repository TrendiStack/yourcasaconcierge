import { AnimationContext } from '../../context/AnimationContext';
import { motion as m } from 'framer-motion';
import { SanityContext } from '../../context/SanityContext';
import { urlFor } from '../../lib/client';
import { useContext } from 'react';
import Plan from '../pricing/Plan';

const Pricing = () => {
  const { pricing: data, services } = useContext(SanityContext);
  const plans = data[0]?.pricing || null;

  return (
    <m.div
      id="pricing"
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.5 }}
      className="container layout-padding"
    >
      <m.div>
        {/* <m.h1 variants={generic} className="header-text text-primary">
          Services
        </m.h1> */}

        {plans
          ?.filter(plan => plan.title === 'Premium')
          .map(plan => (
            <Plan
              key={plan?.id}
              title={plan?.title}
              desc={plan?.description}
              image={urlFor(plan.image).url()}
              services={services[0]?.services}
            />
          ))}
      </m.div>
    </m.div>
  );
};

export default Pricing;
