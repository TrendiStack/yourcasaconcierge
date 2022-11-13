import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FormValidationProvider } from "./context/formValidation";
import { MenuProvider } from "./context/MenuContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FormValidationProvider>
        <MenuProvider>
          <App />
        </MenuProvider>
      </FormValidationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
