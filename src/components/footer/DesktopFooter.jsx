import content from "../../content";
import ycclogo from "../../assets/images/ycclogo.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import LinkItem from "../LinkItem";
import { useContext } from "react";
import { RefContext } from "../../context/RefContext";
import { AnimationContext } from "../../context/AnimationContext";
import MailChimpForm from "../contact/MailChimpForm";
import { motion as m } from "framer-motion";

const DesktopFooter = () => {
  const { footer } = content;
  const { nav } = content;
  const { footerRef } = useContext(RefContext);
  const { generic, pricing } = useContext(AnimationContext);
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1491489226161-1d38cb39ec64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500&q=80"
        alt="sauna"
        className="h-[15rem] lg:h-[25rem] w-full object-cover"
      />
      <div className="container layout-padding hidden xl:block py-5 text-[#D6DFDE]">
        <m.div
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
          className="flex justify-between mt-10"
        >
          <m.div variants={generic} className="garamond">
            <div className="text-xl leading-5">
              <p>{footer.address}</p>
              <p>
                {footer.phone.split("-")[0]} - {footer.phone.split("-")[1]} -{" "}
                {footer.phone.split("-")[2]} - {footer.phone.split("-")[3]}
              </p>
              <p>
                {footer.email.split("@")[0]} @ {footer.email.split("@")[1]}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xl">
              <div className="w-[27px] h-[3.03px] bg-variant"></div>
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
              {nav.map((item) => (
                <li key={item.id}>
                  <LinkItem to={item.path} text={item.title} />
                </li>
              ))}
            </ul>

            <MailChimpForm footer={true} />
          </m.div>
        </m.div>
        <m.div
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          ref={footerRef}
          className="flex justify-between items-end mt-20 mb-1"
        >
          <m.img
            variants={generic}
            className="w-[400px] logo"
            src={ycclogo}
            alt="logo white"
          />
          <m.p variants={generic} className="font-medium">
            {footer.copyRight}
          </m.p>
        </m.div>
      </div>
    </>
  );
};

export default DesktopFooter;
