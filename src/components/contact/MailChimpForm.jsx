import MailchimpSubscribe from "react-mailchimp-subscribe";
import HeroForm from "./HeroForm";

const MailChimpForm = () => {
  const url = `https://app.us11.list-manage.com/subscribe/post?u=${
    import.meta.env.VITE_MAILCHIMP_U
  }&id=${import.meta.env.VITE_MAILCHIMP_ID}`;

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <HeroForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailChimpForm;
