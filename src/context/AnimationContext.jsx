import { createContext } from 'react';

export const AnimationContext = createContext({});

export const AnimationProvider = ({ children }) => {
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

  const value = {
    generic,
    absoluteText,
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};
