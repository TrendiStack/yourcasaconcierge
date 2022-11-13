import React, { useEffect, useRef } from "react";
import livingRoomDark from "../../assets/images/content/living-room-dark.avif";
import { motion as m, useInView } from "framer-motion";

const DesktopAbout = () => {
  const ref = useRef();
  const isInView = useInView({ ref, threshold: 0.5 });

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
        About Us
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </m.p>
      </m.div>
    </div>
  );
};

export default DesktopAbout;
