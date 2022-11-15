import content from "../content";
import Form from "./contact/Form";
import { motion as m } from "framer-motion";

const Contact = () => {
  const { contact } = content;
  const { footer } = content;
  return (
    <m.div id="contact" className="pt-10 xl:pt-0 pb-20 bg">
      <div className="container ">
        <m.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="xl:hidden garamond text-center"
        >
          {contact.subtitle}
        </m.h2>
        <m.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-center xl:text-left header-text-mobile"
        >
          {contact.title}
        </m.h1>
        <div className="xl:grid grid-cols-2 gap-10">
          <div className="text-left">
            <m.h2
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="hidden garamond text-2xl xl:block my-5"
            >
              {contact.subtitle}
            </m.h2>
            <m.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="text-xl xl:text-3xl text-center xl:text-left"
            >
              {contact.description}
            </m.p>
          </div>
          <m.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="xl:hidden flex flex-col py-10"
          >
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
        <m.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="hidden xl:flex flex-col"
        >
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
