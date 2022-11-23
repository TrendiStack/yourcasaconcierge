import { motion as m } from "framer-motion";
import content from "../../content";
import livingRoomDark from "../../assets/images/content/living-room-dark.jpg";
import { useContext } from "react";
import { AnimationContext } from "../../context/AnimationContext";

const DesktopAbout = () => {
  const { about } = content;
  const { generic, absoluteText } = useContext(AnimationContext);

  const styles = {
    backgroundImage: `url(${livingRoomDark})`,
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
      className="container hidden xl:block h-screen"
    >
      <m.h1 variants={generic} className="header-text">
        {about.title}
      </m.h1>
      <m.div
        variants={generic}
        className="relative h-[70%] w-[70%] 2xl:w-full shadow-lg"
        style={styles}
      >
        <m.p
          variants={absoluteText}
          className="absolute top-[52%] translate-y-[-50%] left-[70%] w-[500px] text-justify 2xl:text-lg font-bold text-[#23372D] 2xl:leading-8"
        >
          {about.description}
        </m.p>
      </m.div>
    </m.div>
  );
};

export default DesktopAbout;
