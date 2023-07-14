import NewsletterToaster from './NewsletterToaster';
import { motion as m } from 'framer-motion';

const HeroForm = ({ status, message, onValidated, customer, setCustomer }) => {
  const submit = e => {
    e.preventDefault();
    try {
      if (status === 'success') {
        setCustomer({
          email: '',
          firstName: '',
          lastName: '',
        });
      }
      const { email, firstName, lastName } = customer;
      email &&
        firstName &&
        lastName &&
        email.indexOf('@') > -1 &&
        onValidated({
          EMAIL: email,
          FNAME: firstName,
          LNAME: lastName,
        });
      console.log('submitting');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <m.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      onSubmit={submit}
      className="hidden absolute bottom-0 xl:block border-y border-light w-full z-30"
    >
      <NewsletterToaster status={status} message={message} />
      <div className="container layout-padding flex">
        <input
          type="text"
          placeholder="First Name"
          className="border-r border-light py-5 bg-transparent placeholder:text-light outline-light"
          value={customer.firstName}
          onChange={e =>
            setCustomer({ ...customer, firstName: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border-r border-light pl-5 py-5 bg-transparent placeholder:text-light outline-light"
          value={customer.lastName}
          onChange={e => setCustomer({ ...customer, lastName: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border-r border-light pl-5 py-5 bg-transparent placeholder:text-light outline-light"
          value={customer.email}
          onChange={e => setCustomer({ ...customer, email: e.target.value })}
          required
        />
        <button className="py-5 bg-transparent placeholder:text-light outline-light w-full ">
          Stay Up to Date!
        </button>
      </div>
    </m.form>
  );
};

export default HeroForm;
