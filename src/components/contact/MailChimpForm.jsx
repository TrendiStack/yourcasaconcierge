import { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import FooterForm from "./FooterForm";
import HeroForm from "./HeroForm";

const MailChimpForm = ({ footer, mobile }) => {
  const [customer, setCustomer] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });
  const url = `https://app.us11.list-manage.com/subscribe/post?u=${
    import.meta.env.VITE_MAILCHIMP_U
  }&id=${import.meta.env.VITE_MAILCHIMP_ID}`;

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <>
            {footer ? (
              <FooterForm
                status={status}
                message={message}
                customer={customer}
                setCustomer={setCustomer}
                mobile={mobile}
                onValidated={(formData) => subscribe(formData)}
              />
            ) : (
              <HeroForm
                status={status}
                message={message}
                customer={customer}
                setCustomer={setCustomer}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
          </>
        )}
      />
    </div>
  );
};

export default MailChimpForm;
