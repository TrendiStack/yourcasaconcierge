import { motion as m } from 'framer-motion';
import LargeLogo from '../LargeLogo';

export const LoadingScreen = () => {
  return (
    <div
      aria-label="loading-screen"
      className="fixed top-0 left-0 h-full w-full flex justify-center items-center text-white bg-dark"
    >
      <m.div
        animate={{
          opacity: 0,
        }}
        initial={{
          opacity: 1,
        }}
        transition={{ duration: 2 }}
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
      >
        <LargeLogo bg="bg-dark" />
      </m.div>
    </div>
  );
};

export default LoadingScreen;
