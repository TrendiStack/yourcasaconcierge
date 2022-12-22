import { motion as m } from 'framer-motion';
import content from '../../content';
import { livingRoomTwo } from '../../assets/images/content';
import { useContext } from 'react';
import { AnimationContext } from '../../context/AnimationContext';
import AboutArticle from './AboutArticle';

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
        className="about-header-text text-primary garamond lg:relative top-12  px-10 text-center tracking-tight z-30"
      >
        Let's get to know <br /> each other
      </m.h1>
      <m.img
        variants={generic}
        src={livingRoomTwo}
        alt=""
        className="w-full max-h-[600px] object-cover "
      />

      <m.div
        variants={generic}
        className="text-light container layout-padding md:border-t-2 border-black md:mt-24"
      >
        <div className="grid grid-cols-1 2xl:grid-cols-3 gap-10 text-primary text-base xl:text-lg pt-10">
          <AboutArticle title="Smart Solutions" text={about.paragraphOne} />
          <AboutArticle
            title="Home System & Smart Tools"
            text={about.paragraphTwo}
          />
          <AboutArticle
            title="Transparency & Support"
            text={about.paragraphThree}
          />
        </div>
      </m.div>
    </m.div>
  );
};

export default DesktopAbout;
