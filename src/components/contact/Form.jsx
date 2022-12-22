import { useContext, useRef } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { motion as m } from 'framer-motion';
import { AnimationContext } from '../../context/AnimationContext';
import FormInput from './FormInput';

const Form = () => {
  const { generic } = useContext(AnimationContext);
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
      variants={generic}
      ref={formRef}
      onSubmit={formik.handleSubmit}
      className="relative"
    >
      <div className="grid gap-y-5 md:gap-y-10 ">
        <FormInput
          name="firstName"
          placeholder="First Name"
          type="text"
          value={firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.firstName}
          errors={formik.errors.firstName}
        />
        <FormInput
          name="lastName"
          placeholder="Last Name"
          type="text"
          value={lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.lastName}
          errors={formik.errors.lastName}
        />

        <FormInput
          name="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.email}
          errors={formik.errors.email}
        />

        <FormInput
          name="inquiry"
          placeholder="Inquiry"
          type="text"
          value={inquiry}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.inquiry}
          errors={formik.errors.inquiry}
        />
      </div>
      <button
        type="submit"
        className="bg-variant text-light md:static absolute right-0 -bottom-24 flex items-center justify-center gap-2 md:float-right p-2 mt-8"
      >
        Send Message <div className="h-[3px] w-11 bg-light"></div>
      </button>
    </m.form>
  );
};

export default Form;
