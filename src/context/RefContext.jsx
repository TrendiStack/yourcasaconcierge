import { useRef, useEffect, createContext, useState } from "react";

export const RefContext = createContext({
  footerRef: null,
  footervisible: false,
});

export const RefProvider = ({ children }) => {
  const [footervisible, setFootervisible] = useState(false);
  const footerRef = useRef(null);
  //check if the footer is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFootervisible(true);
        } else {
          setFootervisible(false);
        }
      },
      { threshold: 0 }
    );
    observer.observe(footerRef.current);
  }, []);

  const value = {
    footerRef,
    footervisible,
  };

  return <RefContext.Provider value={value}>{children}</RefContext.Provider>;
};
