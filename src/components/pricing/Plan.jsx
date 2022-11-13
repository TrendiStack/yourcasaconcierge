import React from "react";
import {
  pricingPlanOne,
  pricingPlanTwo,
  pricingPlanThree,
} from "../../assets/images/content";
import { motion as m } from "framer-motion";

const Plan = ({ reversed, image }) => {
  const styles = {
    backgroundImage: `url(${
      image === "pricingPlanOne"
        ? pricingPlanOne
        : image === "pricingPlanTwo"
        ? pricingPlanTwo
        : pricingPlanThree
    })`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      className={`flex ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      } flex-col md:items-center md:justify-between gap-10`}
    >
      <m.div
        initial={{ opacity: 0, x: reversed ? 100 : -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className={`w-full md:w-[45%] 2xl:w-[55%] h-[300px] xl:h-[500px] object-cover shadow-lg ${
          reversed ? "md:ml-10" : "md:mr-10"
        }`}
        style={styles}
        alt=""
      />
      <div className="relative flex flex-col gap-5 ">
        <m.p
          initial={{ opacity: 0, x: reversed ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="text-4xl 2xl:text-[64px] text-[#527488] font-semibold"
        >
          Starter
        </m.p>
        <m.p
          initial={{ opacity: 0, x: reversed ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="max-w-[403px] text-[20px]"
        >
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </m.p>
        <m.button
          initial={{ opacity: 0, x: reversed ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 2.5 }}
          // button animation
          className="pricing-btn"
        >
          Get Started
        </m.button>
      </div>
    </div>
  );
};

export default Plan;
