import { useState, useEffect } from "react";

const HeroForm = ({ status, message, onValidated }) => {
  const [errorStatus, setErrorStatus] = useState(null);
  const [customer, setCustomer] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setErrorStatus(status);
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (status) {
      setTimeout(() => {
        setErrorStatus(null);
      }, 5000);
    }
  }, [status]);

  return (
    <form
      onSubmit={submit}
      className="hidden absolute bottom-0 xl:flex justify-center border-y border-white w-full z-30"
    >
      <div
        className={`fixed w-auto top-0 bg-variant-2 text-center text-xl p-3 garamond 
            ${errorStatus ? "top-0" : "-top-32"} transition-all duration-1000
          `}
      >
        <span className="animate-pulse">
          {status === "sending"
            ? "Sending..."
            : status === "error"
            ? message
            : status === "success"
            ? message
            : ""}
        </span>
      </div>
      <div className="container layout-padding flex">
        <input
          type="text"
          placeholder="First Name"
          className="border-r border-white py-5 bg-transparent placeholder:text-white"
          value={customer.firstName}
          onChange={(e) =>
            setCustomer({ ...customer, firstName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border-r border-white pl-5 py-5 bg-transparent placeholder:text-white"
          value={customer.lastName}
          onChange={(e) =>
            setCustomer({ ...customer, lastName: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          className="border-r border-white pl-5 py-5 bg-transparent placeholder:text-white"
          value={customer.email}
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
          required
        />
        <button className="py-5 bg-transparent placeholder:text-white w-full ">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default HeroForm;
