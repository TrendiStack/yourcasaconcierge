import ycclogoblack from "../../assets/images/ycclogoblack.svg";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const MobileFooter = () => {
  return (
    <div className="container xl:hidden py-10 px-8">
      <img className="w-[200px] logo" src={ycclogoblack} alt="logo" />

      <ul className="flex justify-between my-5">
        <div className="flex flex-col gap-2">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#prices">Pricing</a>
          </li>
        </div>
        <div className="flex flex-col gap-2">
          <li>
            <a href="#brands">Brands</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </div>
      </ul>
      <div className="my-4">
        <p className="font-semibold">Address:</p>
        <p>Level 1, 12 Sample St, Sydney NSW 2000</p>
      </div>
      <div className="my-4">
        <p className="font-semibold">Contact:</p>
        <p>
          1-800-123-4567
          <br /> hello@youcasaconcierge.com
        </p>
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex items-center gap-2 ml-2">
          <div className="w-[27px] h-[3.03px] bg-[#DAD7CD]"></div>
          <p>Follow us</p>
        </div>
        <div className="flex gap-2">
          <FaFacebookF className="text-xl" />
          <FaTwitter className="text-xl" />
          <FaInstagram className="text-xl" />
          <FaLinkedin className="text-xl" />
        </div>
      </div>
      <p className="text-center pt-8 font-light">
        © 2022 YourCasaConcierge. All right reserved.
      </p>
    </div>
  );
};

export default MobileFooter;
