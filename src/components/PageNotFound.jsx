import { motion as m } from 'framer-motion';
import waves from '../assets/backgrounds/wave_background.svg';
import arrow from '../assets/images/arrow.png';
import logoDark from '../assets/images/ycclogoblack.svg';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={waves}
        loading="lazy"
        alt="waves background"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />
      <m.img
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        src={logoDark}
        loading="lazy"
        alt="dark logo"
        className="w-[15rem] lg:w-[20rem] object-contain mt-14 xl:mt-5"
      />
      <div
        className="
        absolute
        top-[50%]
        left-[50%]
        transform
        -translate-x-[50%]
        -translate-y-[50%]
      "
      >
        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center garamond not-found w-[30rem] md:w-auto"
        >
          WE COULD'T
          <br /> FIND THE
          <br /> PAGE YOU
          <br /> WERE
          <br /> LOOKING FOR
        </m.p>
        <div className="flex justify-center xl:justify-start mt-5 gap-5">
          <m.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            src={arrow}
            loading="lazy"
            alt="arrow"
            className="w-[5rem] xl:w-[13rem] relative top-2 xl:top-5"
          />
          <m.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a
              href="/"
              className="garamond text-xl xl:text-3xl xl:hover:text-white xl:hover:bg-black transition-all duration-300 ease-in-out xl:hover:p-3"
            >
              GO BACK HOME
            </a>
          </m.button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
