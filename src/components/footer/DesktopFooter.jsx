import { useContext } from 'react';
import { RefContext } from '../../context/RefContext';
import { AnimationContext } from '../../context/AnimationContext';
import { SanityContext } from '../../context/SanityContext';
import { urlFor } from '../../lib/client';
import { motion as m } from 'framer-motion';
import LinkItem from '../LinkItem';
import MailChimpForm from '../contact/MailChimpForm';

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import LargeLogo from '../LargeLogo';

const DesktopFooter = () => {
  const { navigation: nav, footer: foot } = useContext(SanityContext);
  const { footerRef } = useContext(RefContext);
  const { generic } = useContext(AnimationContext);
  const footer = foot[0] === undefined ? null : foot[0];
  const banner = footer?.banner;

  return (
    <>
      {/* {banner && (
        <img
          src={urlFor(banner).url()}
          loading="lazy"
          alt="sauna"
          className="h-[15rem] lg:h-[25rem] w-full object-cover"
        />
      )} */}
      {banner && (
        <img
          src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80"
          loading="lazy"
          alt="sauna"
          className="h-[15rem] lg:h-[25rem] w-full object-cover"
        />
      )}

      <div className="hidden xl:block py-5 container layout-padding">
        <m.div
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
          className="flex justify-between mt-10"
        >
          <m.div variants={generic} className="garamond">
            <div className="text-xl leading-5">
              <p>
                {footer?.email.split('@')[0]} @ {footer?.email.split('@')[1]}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xl">
              <div className="w-[27px] h-[3.03px] bg-dark"></div>
              <p>Follow us</p>
            </div>
            <m.div variants={generic} className="flex text-lg gap-2">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </m.div>
          </m.div>

          <m.div variants={generic}>
            <ul className="relative text-lg font-medium flex gap-5">
              {nav?.map((item, index) => (
                <li key={index}>
                  <LinkItem to={item.path} text={item.title} />
                </li>
              ))}
            </ul>

            <MailChimpForm footer={true} />
          </m.div>
        </m.div>
        <m.div
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.5 }}
          ref={footerRef}
          className="flex justify-between items-end mt-20 mb-1"
        >
          <a href="#">
            {/* {footer?.logo && (
              <m.img
                variants={generic}
                className="w-[400px] bg-black"
                src={urlFor(footer.logo).url()}
                loading="lazy"
                alt="logo white"
              />
            )} */}
            <LargeLogo bg="bg-light" />
          </a>
          <m.p variants={generic} className="font-medium">
            {`© ${
              new Date().getFullYear() - 1
            } YourCasaConcierge. All rights reserved.`}
          </m.p>
        </m.div>
      </div>
    </>
  );
};

export default DesktopFooter;
