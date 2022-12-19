import content from '../content';
import Form from './contact/Form';
import { motion as m } from 'framer-motion';
import { useContext } from 'react';
import { AnimationContext } from '../context/AnimationContext';

const Contact = () => {
  const { contact } = content;
  const { footer } = content;
  const { pricing } = useContext(AnimationContext);
  return (
    <m.div
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.1 }}
      id="contact"
      className="pt-10 xl:pt-0 pb-20 bg"
    >
      <div className="container layout-padding">
        <m.h2 variants={pricing} className="xl:hidden garamond text-center">
          {contact.subtitle}
        </m.h2>
        <m.h1
          variants={pricing}
          className="text-center xl:text-left header-text-mobile"
        >
          {contact.title}
        </m.h1>
        <div className="xl:grid grid-cols-2 gap-10">
          <div className="text-left">
            <m.h2
              variants={pricing}
              className="hidden garamond text-2xl xl:block my-5 text-center"
            >
              {contact.subtitle}
            </m.h2>
            <m.p
              variants={pricing}
              className="text-xl xl:text-3xl text-center xl:text-left"
            >
              {contact.description}
            </m.p>
          </div>
          <m.div variants={pricing} className="xl:hidden flex flex-col py-10">
            <h3>Phone / Email</h3>
            <span>
              <a className="text-2xl" href="tel:1.800.555.5555">
                1-800-555-5555
              </a>
            </span>
            <span>
              <a className="text-xl" href="mailto:hello@yourcasaconcierge.com">
                hello@yourcasaconcierge.com
              </a>
            </span>
          </m.div>
          <Form />
        </div>
        <m.div variants={pricing} className="hidden xl:flex flex-col">
          <h3>Phone / Email</h3>
          <span>
            <a className="text-3xl" href="tel:1.800.555.5555">
              {footer.phone}
            </a>
          </span>
          <span>
            <a className="text-3xl" href={`mailto:${footer.email}`}>
              {footer.email}
            </a>
          </span>
        </m.div>
      </div>
    </m.div>
  );
};

export default Contact;
