import NewsletterToaster from "./NewsletterToaster";

const HeroForm = ({ status, message, onValidated, customer, setCustomer }) => {
  const submit = (e) => {
    e.preventDefault();
    try {
      if (status === "success") {
        setCustomer({
          email: "",
          firstName: "",
          lastName: "",
        });
      }
      const { email, firstName, lastName } = customer;
      email &&
        firstName &&
        lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
          EMAIL: email,
          FNAME: firstName,
          LNAME: lastName,
        });
      console.log("submitting");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={submit}
      className="hidden absolute bottom-0 xl:block border-y border-white w-full z-30"
    >
      <NewsletterToaster status={status} message={message} />
      <div className="container layout-padding flex">
        <input
          type="text"
          placeholder="First Name"
          className="border-r border-white py-5 bg-transparent placeholder:text-white outline-[#D6DFDE]"
          value={customer.firstName}
          onChange={(e) =>
            setCustomer({ ...customer, firstName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border-r border-white pl-5 py-5 bg-transparent placeholder:text-white outline-[#D6DFDE]"
          value={customer.lastName}
          onChange={(e) =>
            setCustomer({ ...customer, lastName: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          className="border-r border-white pl-5 py-5 bg-transparent placeholder:text-white outline-[#D6DFDE]"
          value={customer.email}
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
          required
        />
        <button className="py-5 bg-transparent placeholder:text-white outline-[#D6DFDE] w-full ">
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default HeroForm;
