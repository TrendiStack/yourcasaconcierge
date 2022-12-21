import NewsletterToaster from './NewsletterToaster';

const FooterForm = ({
  status,
  message,
  onValidated,
  mobile,
  customer,
  setCustomer,
}) => {
  const submit = e => {
    e.preventDefault();
    try {
      if (status === 'success') {
        setCustomer({
          email: '',
        });
      }
      const { email } = customer;
      email &&
        email.indexOf('@') > -1 &&
        onValidated({
          EMAIL: email,
        });
      console.log('submitting');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={submit}
      className={mobile ? 'text-black' : 'text-[#D6DFDE]'}
    >
      <div className="text-white">
        <NewsletterToaster status={status} message={message} />
      </div>

      <p className="text-xl garamond mb-2 text-light">
        Stay updated on the latest deals!
      </p>
      <input
        type="email"
        className="text-dark py-1 rounded-sm placeholder:text-gray-500 placeholder:font-serif placeholder:text-sm w-2/3 outline-gray-500"
        placeholder="Enter your Email"
        onChange={e => setCustomer({ ...customer, email: e.target.value })}
        required
      />
      <button
        type="submit"
        className="text-light hover:text-black hover:p-1 hover:bg-white transition-all duration-500 ml-2 rounded-sm"
      >
        Subscribe
      </button>
    </form>
  );
};

export default FooterForm;
