import {
  airbnb,
  booking,
  expedia,
  homeaway,
  vrbo,
} from "../assets/images/brands";
import { motion as m } from "framer-motion";
import BrandLogo from "./brands/BrandLogo";

const Brands = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      id="brands"
      className="h-screen flex items-center bg-variant "
    >
      <div className="container grid grid-cols-2 px-8">
        <div className="flex items-center justify-center h-40 w-full border-b border-r border-black">
          <p className="garamond md:text-lg xl:text-3xl text-center mr-2">
            We work with all your
            <br /> favourites
          </p>
        </div>
        <BrandLogo logo="airbnb" borderBottom />
        <BrandLogo logo="homeaway" borderRight borderBottom />
        <BrandLogo logo="vrbo" borderBottom />
        <BrandLogo logo="expedia" borderRight />
        <BrandLogo logo="booking" />
      </div>
    </m.div>
  );
};

export default Brands;
