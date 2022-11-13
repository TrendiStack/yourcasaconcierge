import React from "react";
import {
  About,
  Services,
  Pricing,
  Brands,
  Contact,
  Footer,
} from "../components";
const Layout = () => {
  return (
    <div className="overflow-hidden">
      <About />
      <Services />
      <Pricing />
      <Brands />
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;
