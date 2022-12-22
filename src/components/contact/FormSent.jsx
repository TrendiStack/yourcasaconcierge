import { motion as m } from 'framer-motion';
import waves from '../../assets/backgrounds/wave_background.svg';

const FormSent = () => {
  return (
    <div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center w-full h-screen bg-varaint garamond  header-text-variant"
    >
      <img
        src={waves}
        loading="lazy"
        alt="waves"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-white"
      >
        <h1>Thank you for your message!</h1>
        <p>We will get back to you as soon as possible.</p>
      </m.div>

      <m.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className=""
      >
        <a
          href="/"
          className="text-xl xl:text-3xl text-white xl:hover:bg-black transition-all duration-300 ease-in-out xl:hover:p-3"
        >
          GO BACK HOME
        </a>
      </m.button>
    </div>
  );
};

export default FormSent;
