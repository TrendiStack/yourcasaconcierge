import content from "../content";
import Plan from "./pricing/Plan";
import { motion as m } from "framer-motion";
import { useContext } from "react";
import { AnimationContext } from "../context/AnimationContext";

const Pricing = () => {
  const { pricing } = content;
  const { plans } = pricing;
  const { pricing: variant } = useContext(AnimationContext);
  return (
    <div id="prices" className="bg pb-20">
      <div className="container layout-padding">
        <m.h1
          variants={variant}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
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
