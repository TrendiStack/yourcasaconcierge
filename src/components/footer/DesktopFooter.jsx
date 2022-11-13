import ycclogoblack from "../../assets/images/ycclogoblack.svg";
import ycclogo from "../../assets/images/ycclogo.svg";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import LinkItem from "../LinkItem";

const DesktopFooter = () => {
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1491489226161-1d38cb39ec64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500&q=80"
        alt=""
        className="h-[25rem] w-full object-cover"
      />
      <div className="container hidden xl:block py-5 text-[#D6DFDE]">
        <div className="flex justify-between items-center mt-10">
          <div className="garamond">
            <div className="text-xl leading-5">
              <p>Level 1, 12 Sample St, Sydney NSW 2000</p>
              <p>1 - 800 - 123 - 4567</p>
              <p>hello @ youcasaconcierge.com</p>
            </div>
            <div className="flex items-center gap-2 text-xl">
              <div className="w-[27px] h-[3.03px] bg-variant"></div>
              <p>Follow us</p>
            </div>
            <div className="flex text-lg gap-2">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>

          <ul className="relative text-lg font-medium flex gap-5">
            <li>
              <LinkItem to="about" text="About" />
            </li>
            <li>
              <LinkItem to="services" text="Services" />
            </li>
            <li>
              <LinkItem to="prices" text="Pricing" />
            </li>
            <li>
              <LinkItem to="brands" text="Brands" />
            </li>
            <li>
              <LinkItem to="contact" text="Contact" />
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-end mt-20 mb-1">
          <img className="w-[400px] logo" src={ycclogo} alt="logo" />
          <p className="font-medium">
            © 2022 YourCasaConcierge. All right reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default DesktopFooter;
