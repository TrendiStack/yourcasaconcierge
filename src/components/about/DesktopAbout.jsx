import { useRef } from "react";
import content from "../../content";
import livingRoomDark from "../../assets/images/content/living-room-dark.jpg";
import { motion as m } from "framer-motion";

const DesktopAbout = () => {
  const ref = useRef();
  const { about } = content;

  const styles = {
    backgroundImage: `url(${livingRoomDark})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div ref={ref} className="container hidden xl:block h-screen">
      <m.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="header-text"
      >
        {about.title}
      </m.h1>
      <m.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="relative h-[70%] w-[70%] 2xl:w-full shadow-lg"
        style={styles}
        loading="lazy"
      >
        <m.p
          initial={{ opacity: 1, y: 100 }}
          animate={{ opacity: 1, y: -100 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="absolute top-[52%] translate-y-[-50%] left-[70%] w-[500px] text-justify 2xl:text-lg font-bold text-[#23372D] 2xl:leading-8"
        >
          {about.description}
        </m.p>
      </m.div>
    </div>
  );
};

export default DesktopAbout;
