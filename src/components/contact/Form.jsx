import { useContext, useRef } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { motion as m } from 'framer-motion';
import { AnimationContext } from '../../context/AnimationContext';

const Form = () => {
  const { pricing } = useContext(AnimationContext);
  const formRef = useRef();
  const navigate = useNavigate();
  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_14gv8cl',
        'template_4en3u3r',
        formRef.current,
        '4ANxRYt0_zBOr2eYx'
      )
      .then(
        result => {
          console.log(result.text);
          navigate('/success');
        },
        error => {
          console.log(error.text);
        }
      );
  };
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      inquiry: '',
    },
    //validate form
    validationSchema: yup.object({
      firstName: yup
        .string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: yup
        .string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: yup.string().email('Invalid email address').required('Required'),

      inquiry: yup
        .string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
    }),
    onSubmit: () => {
      //send email
      sendEmail();
      //navigate to success page
      navigate('/success');
    },
  });

  const { firstName, lastName, email, inquiry } = formik.values;
  return (
    <m.form
      variants={pricing}
      ref={formRef}
      onSubmit={formik.handleSubmit}
      className="relative"
    >
      <div className="grid gap-y-5 md:gap-y-10 ">
        <input
          className={`bg-transparent placeholder:bg-transparent border-b rounded-none border-black
                border-opacity-50 focus:outline-none focus:border-[#527488] focus:placeholder-[#527488]
                ${
                  formik.touched.firstName && formik.errors.firstName
                    ? 'border-red-500 bg-transparent placeholder:text-red-500'
                    : 'placeholder:text-[#527488]'
                }`}
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <input
          className={`bg-transparent placeholder:bg-transparent border-b rounded-none border-black
                border-opacity-50 focus:outline-none focus:border-[#527488] focus:placeholder-[#527488]
                 ${
                   formik.touched.lastName && formik.errors.lastName
                     ? 'border-red-500 bg-transparent placeholder:text-red-500'
                     : 'placeholder:text-[#527488]'
                 }`}
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <input
          className={`bg-transparent placeholder:bg-transparent border-b rounded-none border-black
                border-opacity-50 focus:outline-none focus:border-[#527488] focus:placeholder-[#527488]
                  ${
                    formik.touched.email && formik.errors.email
                      ? 'border-red-500 placeholder:text-red-500'
                      : 'placeholder:text-[#527488]'
                  }
                `}
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <input
          className={`bg-transparent placeholder:bg-transparent border-b rounded-none border-black
                border-opacity-50 focus:outline-none focus:border-[#527488] focus:placeholder-[#527488]
                ${
                  formik.touched.inquiry && formik.errors.inquiry
                    ? 'border-red-500 bg-transparent placeholder:text-red-500'
                    : 'placeholder:text-[#527488]'
                }`}
          type="text"
          name="inquiry"
          placeholder="Inquiry"
          value={inquiry}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <button
        type="submit"
        className="text-[#D6DFDE] md:static absolute right-0 -bottom-24 flex items-center justify-center gap-2 md:float-right p-2 mt-8 bg-variant"
      >
        Send Message <div className="h-[3px] w-11 bg"></div>
      </button>
    </m.form>
  );
};

export default Form;
