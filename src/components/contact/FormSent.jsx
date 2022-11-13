import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";

const FormSent = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center w-full h-screen bg-varaint "
    >
      <h1>Thank you for your message!</h1>
      <p>We will get back to you as soon as possible.</p>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link to="/">Go back to home</Link>
      </button>
    </m.div>
  );
};

export default FormSent;
