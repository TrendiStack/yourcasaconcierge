import { useEffect } from "react";
import { createContext, useState } from "react";

export const MenuContext = createContext({
  isOpen: "close",
  toggleMenu: () => {},
});

export const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState("close");
  const toggleMenu = () => {
    isOpen === "close" ? setIsOpen("open") : setIsOpen("close");
  };

  useEffect(() => {
    if (isOpen === "open") {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    };
  }, [isOpen]);

  const value = {
    isOpen,
    toggleMenu,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
