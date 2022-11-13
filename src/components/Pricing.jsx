import React from "react";
import Plan from "./pricing/Plan";
import { motion as m } from "framer-motion";

const Pricing = () => {
  return (
    <div id="prices" className="bg pb-20 px-8 xl:px-0">
      <div className="container">
        <m.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="header-text"
        >
          Pricing
        </m.h1>
        <div className="flex flex-col gap-14">
          <Plan image="pricingPlanOne" />
          <Plan image="pricingPlanTwo" reversed />
          <Plan image="pricingPlanThree" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
