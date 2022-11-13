import { createContext, useRef } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export const FormValidationContext = createContext({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  inquiry: "",
  formik: {},
  formRef: {},
});

export const FormValidationProvider = ({ children }) => {
  const formRef = useRef();
  const navigate = useNavigate();
  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_14gv8cl",
        "template_4en3u3r",
        formRef.current,
        "4ANxRYt0_zBOr2eYx"
      )
      .then(
        (result) => {
          console.log(result.text);
          navigate("/success");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      inquiry: "",
    },
    //validate form
    validationSchema: yup.object({
      firstName: yup
        .string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: yup
        .string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: yup.string().email("Invalid email address").required("Required"),
      phone: yup
        .string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),
      inquiry: yup
        .string()
        .max(100, "Must be 100 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      //send email
      sendEmail();
      //navigate to success page
      navigate("/success");
    },
  });
  const value = {
    formik,
    formRef,
  };
  return (
    <FormValidationContext.Provider value={value}>
      {children}
    </FormValidationContext.Provider>
  );
};
