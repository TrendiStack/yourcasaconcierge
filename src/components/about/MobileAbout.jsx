import content from "../../content";
import livingRoomDark from "../../assets/images/content/living-room-dark.jpg";
import { motion as m } from "framer-motion";
import { useContext } from "react";
import { AnimationContext } from "../../context/AnimationContext";

const MobileAbout = () => {
  const { about } = content;
  const { generic } = useContext(AnimationContext);
  return (
    <m.div
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      className="container xl:hidden flex flex-col justify-center pb-10 px-8 gap-5"
    >
      <m.div>
        <m.h1 variants={generic} className="header-text">
          {about.title}
        </m.h1>
        <m.img variants={generic} src={livingRoomDark} alt="living room" />
      </m.div>
      <m.p variants={generic} className="text-lg w-full leading-normal">
        {about.description}
      </m.p>
    </m.div>
  );
};

export default MobileAbout;
