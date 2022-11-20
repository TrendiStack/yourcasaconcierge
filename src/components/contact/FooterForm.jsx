import React from "react";
import NewsletterToaster from "./NewsletterToaster";

const FooterForm = ({
  status,
  message,
  onValidated,
  mobile,
  customer,
  setCustomer,
}) => {
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
        });
      console.log("submitting");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={submit}
      className={mobile ? "text-black" : "text-[#D6DFDE]"}
    >
      <div className="xl:hidden">
        <NewsletterToaster status={status} message={message} />
      </div>

      <p className=" text-xl garamond mb-2">
        Stay updated on the latest deals!
      </p>
      <input
        type="email"
        className="text-black py-1 rounded-sm placeholder:text-gray-500 placeholder:font-serif placeholder:text-sm w-2/3 outline-[#2E4959]"
        placeholder="Enter your Email"
        onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
      />
      <button
        type="submit"
        className="text-white hover:text-black hover:p-1 hover:bg-white transition-all duration-500 ml-2 rounded-sm"
      >
        Subscribe
      </button>
    </form>
  );
};

export default FooterForm;
