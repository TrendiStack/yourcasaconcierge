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
    <form onSubmit={submit} className="text-dark">
      <div className="text-light">
        <NewsletterToaster status={status} message={message} />
      </div>

      <p className="text-xl garamond mb-2">Stay updated on the latest deals!</p>
      <input
        type="email"
        className="text-dark bg-transparent py-1 placeholder-dark placeholder:font-serif placeholder:text-sm w-2/3 outline-dark border-b border-dark indent-2"
        placeholder="Enter your Email"
        onChange={e => setCustomer({ ...customer, email: e.target.value })}
        required
      />
      <button
        type="submit"
        className="hover:text-light hover:p-1 hover:bg-dark transition-all duration-500 ml-2 rounded-sm"
      >
        Subscribe
      </button>
    </form>
  );
};

export default FooterForm;
