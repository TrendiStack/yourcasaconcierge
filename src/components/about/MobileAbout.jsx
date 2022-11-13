import React from "react";
import livingRoomDark from "../../assets/images/content/living-room-dark.avif";

const MobileAbout = () => {
  return (
    <div className="container xl:hidden flex flex-col justify-center pb-10 px-8 gap-5">
      <div>
        <h1 className="header-text">About Us</h1>
        <img src={livingRoomDark} alt="" />
      </div>
      <p className="text-lg w-full leading-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};

export default MobileAbout;
