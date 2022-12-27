import { useEffect, useState } from 'react';

const NewsletterToaster = ({ status, message }) => {
  const [errorStatus, setErrorStatus] = useState(null);

  useEffect(() => {
    setErrorStatus(status);
    if (status) {
      setTimeout(() => {
        setErrorStatus(null);
      }, 5000);
    }
  }, [status]);
  return (
    <div
      className={`fixed w-auto top-0 bg-dark text-center text-xl p-3 garamond 
            ${
              errorStatus ? 'top-0 opacity-1' : '-top-32 opacity-0'
            } transition-all duration-1000 z-[100] left-[50%] transform -translate-x-1/2
          `}
    >
      <span className="animate-pulse">
        {status === 'sending'
          ? 'Sending...'
          : status === 'error'
          ? message
          : status === 'success'
          ? message
          : ''}
      </span>
    </div>
  );
};

export default NewsletterToaster;
