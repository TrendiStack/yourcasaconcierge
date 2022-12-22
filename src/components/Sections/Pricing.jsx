import content from '../../content';
import Plan from '../pricing/Plan';
import { motion as m } from 'framer-motion';
import { useContext } from 'react';
import { AnimationContext } from '../../context/AnimationContext';

const Pricing = () => {
  const { pricing, services } = content;
  const { plans } = pricing;
  const { generic } = useContext(AnimationContext);
  return (
    <m.div
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.5 }}
      id="pricing"
      className="bg-light pb-20"
    >
      <m.div className="container layout-padding">
        <m.h1 variants={generic} className="header-text text-primary">
          {pricing.title}
        </m.h1>
        <div className="flex flex-col gap-14">
          {plans.map(plan => (
            <Plan
              key={plan.id}
              id={plan.id}
              title={plan.title}
              desc={plan.description}
              reversed={plan.id % 2 === 0}
              image={plan.image}
              services={services.services}
            />
          ))}
        </div>
      </m.div>
    </m.div>
  );
};

export default Pricing;
