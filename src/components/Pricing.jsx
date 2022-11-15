import content from "../content";
import Plan from "./pricing/Plan";
import { motion as m } from "framer-motion";

const Pricing = () => {
  const { pricing } = content;
  const { plans } = pricing;
  return (
    <div id="prices" className="bg pb-20 px-8 xl:px-0">
      <div className="container">
        <m.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="header-text"
        >
          {pricing.title}
        </m.h1>
        <div className="flex flex-col gap-14">
          {plans.map((plan) => (
            <Plan
              key={plan.id}
              title={plan.title}
              desc={plan.description}
              reversed={plan.id % 2 === 0}
              image={plan.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
