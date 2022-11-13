import { createContext } from "react";

export const FormValidationContext = createContext({});

export const FormValidationProvider = ({ children }) => {
  return (
    <FormValidationContext.Provider value={value}>
      {children}
    </FormValidationContext.Provider>
  );
};
