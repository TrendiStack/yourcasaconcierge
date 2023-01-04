import { useContext } from 'react';
import { AnimationContext } from '../../context/AnimationContext';
import { SanityContext } from '../../context/SanityContext';
import { motion as m } from 'framer-motion';
import Form from '../contact/Form';

const Contact = () => {
  const { generic } = useContext(AnimationContext);
  const { contact: data, footer: data2 } = useContext(SanityContext);
  const contact = data[0] === undefined ? null : data[0];
  const footer = data2[0] === undefined ? null : data2[0];

  return (
    <m.div
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.1 }}
      id="contact"
      className="pt-10 pb-20 bg-light"
    >
      <div className="container layout-padding">
        <m.h2
          variants={generic}
          className="sm:hidden garamond text-center text-xl"
        >
          {contact?.subtitle}
        </m.h2>
        <m.h1
          variants={generic}
          className="text-center sm:text-left header-text-mobile text-primary"
        >
          {contact?.title}
        </m.h1>
        <div className="xl:grid grid-cols-2 gap-10 garamond">
          <div className="text-left">
            <m.h2
              variants={generic}
              className="hidden text-2xl sm:block my-5 w-5/6"
            >
              {contact?.subtitle}
            </m.h2>
            <m.div variants={generic} className="hidden sm:flex flex-col mb-10">
              <span>
                <a className="text-3xl" href={`mailto:${footer?.email}`}>
                  {footer?.email}
                </a>
              </span>
            </m.div>
          </div>
          <m.div
            variants={generic}
            className="sm:hidden flex flex-col pb-10 text-center"
          >
            <span>
              <a className="text-xl" href={`mailto:${footer?.email}`}>
                {footer?.email}
              </a>
            </span>
          </m.div>
          <Form />
        </div>
      </div>
    </m.div>
  );
};

export default Contact;
