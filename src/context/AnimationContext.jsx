import { createContext, useState } from "react";

export const AnimationContext = createContext({
  reversed: false,
  setReversed: () => {},
});

export const AnimationProvider = ({ children }) => {
  const [reversed, setReversed] = useState(false);
  const generic = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const absoluteText = {
    hidden: { opacity: 1, y: 100 },
    visible: {
      opacity: 1,
      y: -100,
      transition: {
        duration: 1.5,
        delay: 1,
      },
    },
  };

  const pricing = {
    hidden: {
      opacity: 0,
      x: reversed ? 100 : -100,
    },
    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 1.5,
      },
    },
  };

  const value = {
    generic,
    absoluteText,
    pricing,
    reversed,
    setReversed,
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};
