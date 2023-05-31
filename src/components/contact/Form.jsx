import { useContext, useRef } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { motion as m } from 'framer-motion';
import { AnimationContext } from '../../context/AnimationContext';
import FormInput from './FormInput';
import Error from './Error';

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
      prospectiveAddress: '',
      underManagement: '',
      email: '',
      phone: '',
      inquiry: '',
    },
    //validate form
    validationSchema: yup.object({
      firstName: yup
        .string()
        .max(15, 'Must be 15 characters or less')
        .required('First name is required'),
      lastName: yup
        .string()
        .max(20, 'Must be 20 characters or less')
        .required('Last name is required'),
      prospectiveAddress: yup
        .string()
        .min(10, 'Must be 10 characters or more')
        .max(20, 'Must be 20 characters or less')
        .required('Prospective address is required'),
      underManagement: yup
        .string()
        .oneOf(['yes', 'no'], 'Invalid response')
        .required('Please select an option for under management'),
      email: yup
        .string()
        .email('Invalid email address')
        .required('Email is required'),
      phone: yup
        .string()
        .matches(
          /^\(?([2-9][0-9]{2})\)?[-.\s]?([2-9][0-9]{2})[-.\s]?([0-9]{4})$/,
          'Invalid phone number'
        ),
      inquiry: yup
        .string()
        .min(10, 'Must be 10 characters or more')
        .max(100, 'Must be 100 characters or less')
        .required('Inquiry is required'),
    }),
    onSubmit: () => {
      //send email
      sendEmail();
      //navigate to success page
      navigate('/success');
    },
  });

  const {
    firstName,
    lastName,
    prospectiveAddress,
    underManagement,
    email,
    phone,
    inquiry,
  } = formik.values;

  console.log(formik.errors.phone);
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
          name="prospectiveAddress"
          placeholder="Prospective Address"
          type="text"
          value={prospectiveAddress}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.prospectiveAddress}
          errors={formik.errors.prospectiveAddress}
        />
        <div className="-my-5">
          {formik.touched && formik.errors.underManagement && (
            <Error error={formik.errors.underManagement} />
          )}
          <label
            htmlFor="underManagement"
            className={`text-lg 
          ${
            formik.errors.underManagement ===
            'Please select an option for under management'
              ? 'text-red-500'
              : 'text-tertiary'
          }
          `}
          >
            Are you currently under management?
          </label>
          <FormInput
            name="underManagement"
            placeholder="Yes"
            type="radio"
            value="yes"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.currentManager}
            errors={formik.errors.currentManager}
            checked={underManagement === 'yes'}
          />
          <FormInput
            name="underManagement"
            placeholder="No"
            type="radio"
            value="no"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.currentManager}
            errors={formik.errors.currentManager}
            checked={underManagement === 'no'}
          />
        </div>

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
          name="phone"
          placeholder="Phone"
          type="tel"
          value={phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.phone}
          errors={formik.errors.phone}
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
