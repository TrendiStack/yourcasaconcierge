import { motion as m } from 'framer-motion';
import content from '../../content';
import { livingRoomTwo } from '../../assets/images/content';
import { useContext } from 'react';
import { AnimationContext } from '../../context/AnimationContext';

const DesktopAbout = () => {
  const { about } = content;
  const { generic } = useContext(AnimationContext);

  return (
    <m.div
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.5 }}
      className="pb-10 lg:pb-20"
    >
      <m.h1
        variants={generic}
        className="about-header-text garamond lg:relative top-12  px-10 text-center tracking-tight z-30"
      >
        Let's get to know <br /> each other
      </m.h1>
      <m.img
        variants={generic}
        src={livingRoomTwo}
        alt=""
        className="w-full max-h-[600px] object-cover "
      />
      <div className="mt-20 grid xl:grid-cols-2 gap-5 xl:gap-32 container layout-padding">
        <m.div variants={generic}>
          <h2 className="garamond font-semibold text-4xl xl:text-[64px] text-color-variant">
            {about.titleOne}
          </h2>
          <p className="pt-10 font-normal md:text-2xl text-justify">
            {about.paragraphOne}
          </p>
        </m.div>
        <m.div variants={generic}>
          <h2 className="garamond font-semibold text-4xl xl:text-[64px] text-color-variant">
            {about.titleTwo}
          </h2>
          <p className="pt-10 font-normal md:text-2xl text-justify">
            {about.paragraphTwo}
          </p>
        </m.div>
      </div>
    </m.div>
  );
};

export default DesktopAbout;
