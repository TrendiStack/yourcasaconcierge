import { motion as m } from "framer-motion";
import { useContext, useEffect } from "react";
import { AnimationContext } from "../../context/AnimationContext";

const Plan = ({ reversed, image, title, desc }) => {
  const { setReversed, pricing } = useContext(AnimationContext);
  useEffect(() => {
    setReversed(reversed);
  }, [reversed, setReversed]);

  const styles = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <m.div
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      className={`flex ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      } flex-col md:items-center md:justify-between gap-10`}
    >
      <m.div
        variants={pricing}
        className={`w-full md:w-[45%] 2xl:w-[55%] h-[300px] xl:h-[500px] object-cover shadow-lg ${
          reversed ? "md:ml-10" : "md:mr-10"
        }`}
        style={styles}
      />
      <m.div className="relative flex flex-col gap-5 ">
        <m.p
          variants={pricing}
          className="text-4xl 2xl:text-[64px] text-[#527488] font-semibold"
        >
          {title}
        </m.p>
        <m.p variants={pricing} className="max-w-[403px] text-[20px]">
          {desc}
        </m.p>
        <m.button
          variants={pricing}
          className="pricing-btn-mobile xl:pricing-btn"
        >
          Get Started
        </m.button>
      </m.div>
    </m.div>
  );
};

export default Plan;
