import React from "react";

import MobileFooter from "./footer/MobileFooter";
import DesktopFooter from "./footer/DesktopFooter";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center bg-variant-2">
      <MobileFooter />
      <DesktopFooter />
    </footer>
  );
};

export default Footer;
